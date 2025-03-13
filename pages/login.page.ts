import { BasePage } from "./abstract.classes";
import { step } from "../utils/step.utils";
import { loginData } from "../data/user.credentials";
import { Header } from "./components/header.component";
import { Filter } from "./components/filter.component";
import { Locator } from "@playwright/test";

export class Login extends BasePage {
    pagePath = `login`;
    public header = new Header(this.page);
    public filter = new Filter(this.page);
    readonly registerButton: Locator = this.page.getByRole("button", {
        name: "Register",
    });
    readonly usernameField: Locator = this.page.getByRole("textbox", {
        name: "Username",
    });
    readonly passwordField: Locator = this.page.getByRole("textbox", {
        name: "Password",
    });
    readonly loginButton: Locator = this.page
        .getByRole("button", { name: "Login" })
        .nth(1);

    @step("Filling username field")
    async fillUsernameField(username?: string) {
        await this.usernameField.pressSequentially(
            username || loginData.username,
        );
    }

    @step("Filling password field")
    async fillPasswordField(password?: string) {
        await this.passwordField.pressSequentially(
            password || (loginData.password as string),
        );
    }

    @step("Clicking login button")
    async clickLoginButton() {
        await this.loginButton.click();
    }

    @step("Clicking register button")
    async clickRegisterButton() {
        await this.registerButton.click();
    }
}
