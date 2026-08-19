import { type Page, expect } from '@playwright/test'

export class HomePage {
  constructor(private page: Page) {}

  async openFormLayouts() {
    await this.page.getByRole('link', { name: 'Forms', exact: true }).click()
    await this.page.getByRole('link', { name: 'Form Layouts' }).click()
    await expect(this.page).toHaveURL(/\/pages\/forms\/layouts$/)
  }
}
