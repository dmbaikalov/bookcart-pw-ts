import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: process.env.CI ? 2 : 0,
    testDir: "./tests",
    workers: process.env.CI ? 4 : undefined,
    globalSetup: require.resolve("./tests/setup/auth.setup.ts"),
    globalTeardown: require.resolve("./tests/setup/auth.teardown.ts"),

    use: {
        baseURL: `${process.env.BASE_URL}`,
        headless: true,
        viewport: { width: 1920, height: 1080 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        trace: "on",
        screenshot: "on-first-failure",
    },
    reporter: process.env.CI
        ? [["html", { outputFolder: "playwright-report" }]]
        : "line",
    projects: [
        { name: "setup", testMatch: /.*\.setup\.ts/ },

        {
            name: "chromium",
            use: {
                browserName: "chromium",
                storageState: "playwright/.auth/user.json",
            },
        },
        {
            name: "firefox",
            use: {
                browserName: "firefox",
                storageState: "playwright/.auth/user.json",
            },
        },
        {
            name: "webkit",
            use: {
                browserName: "webkit",
                storageState: "playwright/.auth/user.json",
            },
        },
    ],
};

export default config;
