import { test } from '../../playwright-utils/fixtures'

test.describe('Date Picker', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Forms' }).click()
    await page.getByRole('link', { name: 'Datepicker' }).click()
  })

  test('User can select a date from the common date picker', async ({ pom }) => {
    await pom.datePickerPage.selectDateFromCommonDatePicker('30', 'September')
  })

})
