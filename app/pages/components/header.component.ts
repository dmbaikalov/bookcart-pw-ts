import { expect } from "@playwright/test";
import { Component } from "../abstract.classes";
import { step } from "../../utils/step.utils";

export class Header extends Component {
    private searchField = this.page.getByRole("combobox", { name: "search" });
    private cartButton = this.page
        .getByRole("button")
        .filter({ hasText: "shopping_cart" });
    private loginButton = this.page.getByRole("button", { name: "Login" });
    private swaggerButton = this.page.getByRole("link", {
        name: "Swagger icon Swagger",
    });
    private githubButton = this.page.getByRole("link", { name: " GitHub" });
    private logo = this.page.getByRole("button", { name: "Book Cart" });

    @step()
    async expectLoaded() {
        await expect(this.cartButton).toBeVisible();
        await expect(this.searchField).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.swaggerButton).toBeVisible();
        await expect(this.githubButton).toBeVisible();
        await expect(this.logo).toBeVisible();
    }

    @step()
    async search(query: string) {
        await this.searchField.pressSequentially(query);
        await this.page.keyboard.press("Enter");
    }

    @step()
    async openLoginForm() {
        await this.loginButton.click();
    }

    @step()
    async openSwaggerDocs() {
        await this.swaggerButton.click();
    }

    @step()
    async openGithubRepo() {
        await this.githubButton.click();
    }
}
