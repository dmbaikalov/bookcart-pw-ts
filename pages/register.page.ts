import { BasePage } from "./abstract.classes";
import { step } from "../utils/step.utils";
import { randomUserData } from "../data/user.credentials";
import { Header } from "./components/header.component";
import { Filter } from "./components/filter.compnent";

export class Register extends BasePage {
    pagePath = `register`;
    public header = new Header(this.page);
    public filter = new Filter(this.page);
    readonly firstNameField = this.page.getByRole("textbox", {
        name: "First name",
    });
    readonly lastNameField = this.page.getByRole("textbox", {
        name: "Last name",
    });
    readonly userNameField = this.page.getByRole("textbox", {
        name: "User name",
    });
    readonly passwordField = this.page
        .getByRole("textbox", {
            name: "Password",
        })
        .first();
    readonly confirmPasswordField = this.page.getByRole("textbox", {
        name: "Confirm Password",
    });
    readonly genderMaleRadioButton = this.page.getByRole("radio", {
        name: "Male",
        exact: true,
    });
    readonly genderFemaleRadioButton = this.page.getByRole("radio", {
        name: "Female",
        exact: true,
    });
    readonly registerButton = this.page.locator('button:has-text("Register")');

    readonly loginButton = this.page.getByRole("button", { name: "Login" });

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
