import { BasePage } from "./abstract.classes";
import { step } from "../utils/step.utils";
import { Header } from "./components/header.component";
import { Filter } from "./components/filter.component";
import { Locator } from "@playwright/test";

export class Shop extends BasePage {
    pagePath = ``;
    public header = new Header(this.page);
    public filter = new Filter(this.page);

    readonly addToCartFirstBook: Locator = this.page
        .locator("mat-card-content")
        .filter({ hasText: "Harry Potter and the Chamber" })
        .getByRole("button");

    @step("Adding first book on page to Cart")
    async addFirstBook() {
        await this.addToCartFirstBook.click();
    }
}
