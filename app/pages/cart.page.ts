import { expect } from "@playwright/test";
import { BasePage } from "./abstract.classes";
import { step } from "../utils/step.utils";

export class Cart extends BasePage {
    private continueShoppingButton = this.page.getByRole("button", {
        name: "Continue shopping",
    });
    private clearCartButton = this.page.getByRole("button", {
        name: "Clear cart",
    });
    private checkoutButton = this.page.getByRole("button", {
        name: "CheckOut",
    });

    @step()
    async expectLoaded(empty: boolean) {
        if (empty === true) {
            await expect(this.continueShoppingButton).toBeVisible();
        }
        if (empty === false) {
            await expect(this.clearCartButton).toBeVisible();
            await expect(this.checkoutButton).toBeVisible();
        }
    }

    @step()
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    @step()
    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    @step()
    async clearCart() {
        await this.clearCartButton.click();
    }
}
