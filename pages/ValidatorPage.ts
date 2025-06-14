import { Locator, Page } from '@playwright/test';

export class ValidatorPage {
    readonly page: Page;
    readonly inputField: Locator;
    readonly checkButton: Locator;
    readonly resultField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputField = page.locator('input[name="characters"]');
        this.resultField = page.locator('input[name="validation_message"]');
        this.checkButton = page.locator('input[value="Check Input"]');
    }

    async goto() {
        await this.page.goto('/styled/apps/7charval/simple7charvalidation.html');
    }
    async fillInput(value: string) {
        await this.inputField.fill(value);
    }
}