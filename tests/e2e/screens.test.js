import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

const screensData = [ {
    id: 'header',
    maxDiffPixels: 100,
}, {
    id: 'about',
    maxDiffPixels: 1000,
}, {
    id: 'experience',
    maxDiffPixels: 500,
}, {
    id: 'footer',
    maxDiffPixels: 100,
}]

for (const { id, maxDiffPixels } of screensData) {
    test(id, async ({ page }) => {
        const element = page.locator(`#${ id }`)
        await expect(element).toHaveScreenshot(`${ id }.png`, {
            maxDiffPixels,
        })
    })
}
