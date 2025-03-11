import { BasePage } from "./abstract.classes";
import { step } from "../utils/step.utils";
import { Header } from "./components/header.component";
import { Filter } from "./components/filter.compnent";

export class Cart extends BasePage {
    pagePath = `shopping-cart`;
    public header = new Header(this.page);
    public filter = new Filter(this.page);
    readonly continueShoppingButton = this.page.getByRole("button", {
        name: "Continue shopping",
    });
    readonly clearCartButton = this.page.getByRole("button", {
        name: "Clear cart",
    });
    readonly checkoutButton = this.page.getByRole("button", {
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
