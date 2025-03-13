import { BasePage } from "./abstract.classes";
import { step } from "../utils/step.utils";
import { randomUserData } from "../utils/user.credentials1";
import { Header } from "./components/header.component";
import { Filter } from "./components/filter.component";
import { Locator } from "@playwright/test";

export class Register extends BasePage {
    pagePath = `register`;
    public header = new Header(this.page);
    public filter = new Filter(this.page);
    readonly firstNameField: Locator = this.page.getByRole("textbox", {
        name: "First name",
    });
    readonly lastNameField: Locator = this.page.getByRole("textbox", {
        name: "Last name",
    });
    readonly userNameField: Locator = this.page.getByRole("textbox", {
        name: "User name",
    });
    readonly passwordField: Locator = this.page
        .getByRole("textbox", {
            name: "Password",
        })
        .first();
    readonly confirmPasswordField: Locator = this.page.getByRole("textbox", {
        name: "Confirm Password",
    });
    readonly genderMaleRadioButton: Locator = this.page.getByRole("radio", {
        name: "Male",
        exact: true,
    });
    readonly genderFemaleRadioButton: Locator = this.page.getByRole("radio", {
        name: "Female",
        exact: true,
    });
    readonly registerButton: Locator = this.page.locator(
        'button:has-text("Register")',
    );
    readonly loginButton: Locator = this.page.getByRole("button", {
        name: "Login",
    });

    @step("Filling First Name field")
    async fillFirstNameField(firstName?: string) {
        await this.firstNameField.pressSequentially(
            firstName || (randomUserData.firstname as string),
        );
    }

    @step("Filling Last Name field")
    async fillLastNameField(lastName?: string) {
        await this.lastNameField.pressSequentially(
            lastName || (randomUserData.lastname as string),
        );
    }

    @step("Filling Username field")
    async fillUsernameField(username?: string) {
        await this.userNameField.pressSequentially(
            username || randomUserData.username,
        );
    }

    @step("Filling Password field")
    async fillPasswordField(password?: string) {
        await this.passwordField.pressSequentially(
            password || (randomUserData.password as string),
        );
    }

    @step("Filling Confirm Password field")
    async fillConfirmPasswordField(password?: string) {
        await this.confirmPasswordField.pressSequentially(
            password || (randomUserData.password as string),
        );
    }

    @step("Picking gender")
    async pickGender(gender: "Male" | "Female") {
        if (gender === "Male") {
            await this.genderMaleRadioButton.check();
        }
        if (gender === "Female") {
            await this.genderFemaleRadioButton.check();
        }
    }

    @step("Clicking Register button")
    async clickRegisterButton() {
        await this.registerButton.click({ force: true });
    }

    @step("Returning to the login form")
    async clickLoginButton() {
        await this.loginButton.click();
    }
}
