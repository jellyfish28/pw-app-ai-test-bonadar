import { type Page, expect } from '@playwright/test'

export class DatePickerPage {
  constructor(private page: Page) { }

  async selectDateFromCommonDatePicker(day: string, month: string) {
    let monthAssert = new Date(`${month} 1, ${new Date().getFullYear()}`).toLocaleString('en-US', { month: 'short' })
    console.log('monthAssert: ', monthAssert)

    let yearCurrent = new Date().getFullYear();

    const formPicker = this.page.getByPlaceholder('Form Picker')
    await formPicker.click()

    const calendarViewModeButton = this.page.locator('nb-calendar-view-mode button')
    let calendarMonthText = await calendarViewModeButton.textContent()
    let calendarMonth = calendarMonthText?.trim().split(' ')[0]

    while (month !== calendarMonth) {
      await this.page.locator('[ng-reflect-icon="chevron-right-outline"]').click()
      calendarMonthText = await calendarViewModeButton.textContent()
      calendarMonth = calendarMonthText?.trim().split(' ')[0]
    }

    await this.page.locator('nb-calendar-picker').locator('nb-calendar-day-cell:not(.bounding-month)', { hasText: day }).click()
    await expect(formPicker).toHaveValue(`${monthAssert} ${day}, ${yearCurrent}`)
  }

}
