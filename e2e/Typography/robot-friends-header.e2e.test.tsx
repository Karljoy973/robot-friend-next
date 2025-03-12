import {test} from '@playwright/test'
test('should worlk', async ({ page }) => {
  await page.goto('https://stackoverflow.com/questions')
})