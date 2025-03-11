import { Component } from "../abstract.classes";
import { step } from "../../utils/step.utils";

export class Filter extends Component {
    readonly bookfilter = this.page.getByText("All Categories Biography");
    readonly filterAllCategories = this.page.getByText("All Categories");
    readonly filterBiography = this.page.getByText("Biography");
    readonly filterFiction = this.page.getByText("Fiction");
    readonly filterMystery = this.page.getByText("Mystery");
    readonly filterFantasy = this.page.getByText("Fantasy");
    readonly filterRomance = this.page.getByText("Romance");
    readonly filterSlider = this.page.getByRole("slider");

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
}
