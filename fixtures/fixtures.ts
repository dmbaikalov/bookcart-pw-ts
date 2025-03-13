import { test as base } from "@playwright/test";
import { Application } from "../pages/app";
import { createScreenshotOnFailure } from "../utils/screenshot.utils";

export const test = base.extend<{ app: Application }>({
    app: async ({ page }, use) => {
        const app = new Application(page);
        await use(app);
    },
});

test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status === "failed") {
        await createScreenshotOnFailure(page, testInfo.title);
    }
});

export { expect } from "@playwright/test";
