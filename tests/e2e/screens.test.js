import {expect, test} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('/')
})

const screensData = ['header', 'about', 'experience', 'footer'];

for (const id of screensData) {
    test(id, async ({page}) => {
        const element = page.locator(`#${id}`)
        await expect(element).toHaveScreenshot(`${id}.png`, {
            maxDiffPixelRatio: 0.005,
        })
    })
}
