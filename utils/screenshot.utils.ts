import { promises as fs } from "fs";
import { Page } from "@playwright/test";

export async function createScreenshotOnFailure(page: Page, testTitle: string) {
    const sanitizedTitle = testTitle.replace(/[^a-zA-Z0-9]/g, "_");
    const screenshotDir = "./screenshots";
    const screenshotPath = `${screenshotDir}/${sanitizedTitle}.png`;

    await fs.mkdir(screenshotDir, { recursive: true });
    await page.screenshot({ path: screenshotPath });
    console.log(`Screenshot saved at: ${screenshotPath}`);
}
