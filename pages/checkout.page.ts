import { BasePage } from "./abstract.classes";
import { step } from "../utils/step.utils";
import { checkoutData } from "../utils/user.data.generator.utils";
import { Header } from "./components/header.component";
import { Filter } from "./components/filter.component";
import { Locator } from "@playwright/test";

export class Checkout extends BasePage {
    pagePath = `checkout`;
    public header = new Header(this.page);
    public filter = new Filter(this.page);
    readonly nameField: Locator = this.page.getByRole("textbox", {
        name: "Name",
    });
    readonly addressLine1Field: Locator = this.page.getByRole("textbox", {
        name: "Address Line 1",
    });
    readonly addressLine2Field: Locator = this.page.getByRole("textbox", {
        name: "Address Line 2",
    });
    readonly pincodeField: Locator = this.page.getByRole("textbox", {
        name: "Pincode",
    });
    readonly stateField: Locator = this.page.getByRole("textbox", {
        name: "State",
    });
    readonly placeOrderButton: Locator = this.page.getByRole("button", {
        name: "Place Order",
    });
    readonly cancelButton: Locator = this.page.getByRole("button", {
        name: "Cancel",
    });

    @step("Filling all required field to place an order")
    async fillAllRequiredFields() {
        await this.nameField.fill(checkoutData.name);
        await this.addressLine1Field.fill(checkoutData.addressLine1);
        await this.addressLine2Field.fill(checkoutData.addressLine2);
        await this.pincodeField.fill(checkoutData.pincode);
        await this.stateField.fill(checkoutData.state);
    }

    @step("Filling Name field")
    async fillNameField() {
        await this.nameField.fill(checkoutData.name);
    }

    @step("Filling Address Line 1 field")
    async fillAddressLine1Field() {
        await this.addressLine1Field.fill(checkoutData.addressLine1);
    }

    @step("Filling Address Line 2 field")
    async fillAddressLine2Field() {
        await this.addressLine2Field.fill(checkoutData.addressLine2);
    }

    @step("Filling Pincode field")
    async fillPincodeField() {
        await this.pincodeField.fill(checkoutData.pincode as string);
    }

    @step("Filling State field")
    async fillStateField() {
        await this.stateField.fill(checkoutData.state);
    }

    @step("Clicking Place Order button")
    async clickPlaceOrderButton() {
        await this.placeOrderButton.click();
    }

    @step("Clicking Cancle button")
    async clickCancleButton() {
        await this.cancelButton.click();
    }
}
