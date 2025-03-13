import { expect, Locator } from "@playwright/test";
import { Component } from "../abstract.classes";
import { step } from "../../utils/step.utils";

export class Header extends Component {
    readonly searchField: Locator = this.page.getByRole("combobox", {
        name: "search",
    });
    readonly cartButton: Locator = this.page
        .getByRole("button")
        .filter({ hasText: "shopping_cart" })
        .nth(0);
    readonly loginButton: Locator = this.page
        .getByRole("button", { name: "Login" })
        .first();
    readonly swaggerButton: Locator = this.page.getByRole("link", {
        name: "Swagger icon Swagger",
    });
    readonly githubButton: Locator = this.page.getByRole("link", {
        name: " GitHub",
    });
    readonly logo: Locator = this.page.getByRole("button", {
        name: "Book Cart",
    });

    @step("Checking if Header is loaded")
    async isLoaded() {
        await expect(this.cartButton).toBeVisible();
        await expect(this.searchField).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.swaggerButton).toBeVisible();
        await expect(this.githubButton).toBeVisible();
        await expect(this.logo).toBeVisible();
    }

    @step("Searching for a product")
    async search(query: string) {
        await this.searchField.pressSequentially(query);
        await this.page.keyboard.press("Enter");
    }

    @step("Opening login form")
    async openLoginForm() {
        await this.loginButton.click({ force: true });
    }

    @step("Opening Swagger documentation")
    async openSwaggerDocs() {
        await this.swaggerButton.click();
    }

    @step("Opening GitHub repository")
    async openGithubRepo() {
        await this.githubButton.click();
    }
}
