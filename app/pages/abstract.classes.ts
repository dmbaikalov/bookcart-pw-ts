import type { Page } from "@playwright/test";
import { step } from "../utils/step.utils";

export class PageHolder {
    constructor(protected page: Page) {}
}

export abstract class Component extends PageHolder {
    abstract expectLoaded(): Promise<void>;
}

export abstract class BasePage extends PageHolder {
    abstract expectLoaded(): Promise<void>;
}
