import { BasePage } from "./abstract.classes";
import { step } from "../utils/step.utils";
import { Header } from "./components/header.component";
import { Filter } from "./components/filter.component";
import { Locator } from "@playwright/test";

export class Cart extends BasePage {
    pagePath: string = `shopping-cart`;
    public header = new Header(this.page);
    public filter = new Filter(this.page);
    readonly continueShoppingButton: Locator = this.page.getByRole("button", {
        name: "Continue shopping",
    });
    readonly clearCartButton: Locator = this.page.getByRole("button", {
        name: "Clear cart",
    });
    readonly checkoutButton: Locator = this.page.getByRole("button", {
        name: "CheckOut",
    });

    @step("Clicking Proceed to checkout button")
    async proceedToCheckout() {
        await this.checkoutButton.click();
    }

    @step("Clicking Continue shopping button")
    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    @step("Clearing the Cart")
    async clearCart() {
        await this.clearCartButton.click();
    }
}
