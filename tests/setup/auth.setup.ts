import { chromium } from "@playwright/test";
import path from "path";
import { loginData } from "../../data/user.login.credentials";

const authFile = path.resolve(__dirname, "../../playwright/.auth/user.json");

async function globalSetup() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const usernameField = page.getByRole("textbox", {
        name: "Username",
    });
    const passwordField = page.getByRole("textbox", {
        name: "Password",
    });
    const loginButton = page.getByRole("button", { name: "Login" }).nth(1);

    await page.goto(`${process.env.BASE_URL}login`);
    await usernameField.fill(loginData.username);
    await passwordField.fill(loginData.password as string);
    await loginButton.click({ force: true });
    await page.waitForURL(`${process.env.BASE_URL}`);

    await page.context().storageState({ path: authFile });

    await browser.close();
}

export default globalSetup;
