import { test as base } from "@playwright/test";
import { Application } from "../pages/app";

export const test = base.extend<{ app: Application }>({
    app: async ({ page }, use) => {
        const app = new Application(page);
        await use(app);
    },
});
