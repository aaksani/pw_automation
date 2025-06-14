import { test as base } from '@playwright/test';
import { ValidatorPage } from '../pages/ValidatorPage';

type Fixtures = {
    validatorPage: ValidatorPage;
};

export const test = base.extend<Fixtures>({
    validatorPage: async ({ page }, use) => {
        await use(new ValidatorPage(page));
    },
});