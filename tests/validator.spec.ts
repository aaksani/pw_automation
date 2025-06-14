import { test } from '../fixtures/baseFixture';
import {expect} from "@playwright/test";

const testCases = [
    // Positive test cases
    { value: 'AbC123*', expected: 'Valid Value' },
    { value: 'ABCDEF1', expected: 'Valid Value' },
    { value: 'abc123*', expected: 'Valid Value' },
    { value: 'A1B2C3*', expected: 'Valid Value' },
    { value: '1234567', expected: 'Valid Value' },
    { value: '*******', expected: 'Valid Value' },

    // Negative test cases
    { value: '', expected: 'Invalid Value' },
    { value: 'A', expected: 'Invalid Value' },
    { value: 'ABC', expected: 'Invalid Value' },
    { value: 'ABC123456', expected: 'Invalid Value' },

    // Negative test cases (invalid characters)
    { value: 'ABC@12!', expected: 'Invalid Value' },
    { value: 'AbC12-+', expected: 'Invalid Value' },
    { value: 'ABC 123', expected: 'Invalid Value' },
    { value: '123 456', expected: 'Invalid Value' },
    { value: 'AB中文12', expected: 'Invalid Value' },
];

test.describe('Simple 7 Char Validator', () => {
    test.beforeEach(async ({ validatorPage }) => {
        await validatorPage.goto();
    });

    for (const { value, expected } of testCases) {
        test(`validate input: "${value}" => expect "${expected}"`, async ({ validatorPage }) => {
            await validatorPage.fillInput(value);
            await validatorPage.checkButton.click();
            await expect(validatorPage.resultField).toHaveValue(expected);
        });
    }
});