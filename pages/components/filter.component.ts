import { Component } from "../abstract.classes";
import { step } from "../../utils/step.utils";
import { expect } from "../../fixtures/fixtures";
import { Locator } from "@playwright/test";

export class Filter extends Component {
    readonly bookfilter: Locator = this.page.getByText(
        "All Categories Biography",
    );
    readonly filterAllCategories: Locator =
        this.page.getByText("All Categories");
    readonly filterBiography: Locator = this.page.getByText("Biography", {
        exact: true,
    });
    readonly filterFiction: Locator = this.page.getByText("Fiction");
    readonly filterMystery: Locator = this.page.getByText("Mystery");
    readonly filterFantasy: Locator = this.page.getByText("Fantasy");
    readonly filterRomance: Locator = this.page.getByText("Romance");
    readonly filterSlider: Locator = this.page.getByRole("slider");

    @step("Picking 'All Categories'")
    async pickAllCategories() {
        await this.filterAllCategories.click();
    }

    @step("Picking 'Biography' category")
    async pickBiography() {
        await this.filterBiography.click();
    }

    @step("Picking 'Fiction' category")
    async pickFiction() {
        await this.filterFiction.click();
    }

    @step("Picking 'Mystery' category")
    async pickMystery() {
        await this.filterMystery.click();
    }

    @step("Picking 'Fantasy' category")
    async pickFantasy() {
        await this.filterFantasy.click();
    }

    @step("Picking 'Romance' category")
    async pickRomance() {
        await this.filterRomance.click();
    }

    @step("Verifying url change")
    async checkingUrl(category: string) {
        if (category === "All Categories") {
            expect(this.page.url()).toBe(`${process.env.BASE_URL}`);
        } else
            expect(this.page.url()).toBe(
                `${process.env.BASE_URL}filter?category=${category}`,
            );
    }
}
