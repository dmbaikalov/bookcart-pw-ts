import { test } from "@playwright/test";

export function step(stepName?: string) {
    return function decorator(
        tar: Function,
        context: ClassMethodDecoratorContext,
    ) {
        return async function replacementMethod(this: any, ...args: any) {
            const className = this.constructor.name;
            const methodName = String(context.name);

            let sName = stepName
                ? stepName.replace("_PageName_", className)
                : `${className}.${methodName}`;

            if (args.length > 0) {
                sName = sName.replace(/\${(.*?)}/g, (_, match) => {
                    try {
                        return eval(match.replace("0", args[0]));
                    } catch (error) {
                        return `{${match}}`;
                    }
                });
            }

            if (args[0] && typeof args[0] === "object" && args[0]._selector) {
                sName += ` [${args[0]._selector}]`;
            }

            return await test.step(sName, async () => {
                try {
                    const result = await tar.apply(this, args);
                    return result;
                } catch (error: any) {
                    console.error(`Error in step ${sName}:`, error.message);
                    throw error;
                }
            });
        };
    };
}
