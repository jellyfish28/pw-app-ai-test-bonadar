import { type Page, expect } from '@playwright/test'
import { BlockFormData } from '../helpers/test-data'

export class FormLayoutsPage {
  constructor(private page: Page) { }

  async fillInlineForm(name: string, email: string) {
    const inlineFormCard = this.page.locator('nb-card', { hasText: 'Inline form' })
    await inlineFormCard.getByPlaceholder('Jane Doe').fill(name)
    await inlineFormCard.getByPlaceholder('Email').fill(email)
    await inlineFormCard.locator('label', { hasText: 'Remember me' }).click()
    await expect(inlineFormCard.locator('label', { hasText: 'Remember me' })).toBeChecked()
  }

  async submitInlineForm() {
    const inlineFormCard = this.page.locator('nb-card', { hasText: 'Inline form' })
    await inlineFormCard.getByRole('button', { name: 'Submit' }).click()
    await expect(this.page).toHaveURL(/\/pages\/forms\/layouts/)
  }

  async expectInlineFormFilledCorrectly(name: string, email: string) {
    const inlineFormCard = this.page.locator('nb-card', { hasText: 'Inline form' })
    await expect(inlineFormCard.getByPlaceholder('Jane Doe')).toHaveValue(name)
    await expect(inlineFormCard.getByPlaceholder('Email')).toHaveValue(email)
  }

  async fillGridForm(email: string, password: string, radioOption: string) {
    const gridFormCard = this.page.locator('nb-card', { hasText: 'Using the Grid' })
    await gridFormCard.getByLabel('Email').fill(email)
    await gridFormCard.getByLabel('Password').fill(password)
    await gridFormCard.getByRole('radio', { name: radioOption }).check({ force: true })
    await expect(gridFormCard.getByRole('radio', { name: radioOption })).toBeChecked()
  }

  async submitGridForm() {
    const gridFormCard = this.page.locator('nb-card', { hasText: 'Using the Grid' })
    await gridFormCard.getByRole('button', { name: 'Sign in' }).click()
    await expect(this.page).toHaveURL(/\/pages\/forms\/layouts/)
  }

  async expectGridFormFilledCorrectly(email: string, password: string, radioOption: string) {
    const gridFormCard = this.page.locator('nb-card', { hasText: 'Using the Grid' })
    await expect(gridFormCard.getByLabel('Email')).toHaveValue(email)
    await expect(gridFormCard.getByLabel('Password')).toHaveValue(password)
    await expect(gridFormCard.getByRole('radio', { name: radioOption })).toBeChecked()
  }

  async fillBasicForm(email: string, password: string) {
    const basicFormCard = this.page.locator('nb-card', { hasText: 'Basic form' })
    await basicFormCard.getByLabel('Email address').fill(email)
    await basicFormCard.getByLabel('Password').fill(password)
    await basicFormCard.locator('label', { hasText: 'Check me out' }).click()
    await expect(basicFormCard.locator('label', { hasText: 'Check me out' })).toBeChecked()
  }

  async submitBasicForm() {
    const basicFormCard = this.page.locator('nb-card', { hasText: 'Basic form' })
    await basicFormCard.getByRole('button', { name: 'Submit' }).click()
    await expect(this.page).toHaveURL(/\/pages\/forms\/layouts/)
  }

  async expectBasicFormFilledCorrectly(email: string, password: string) {
    const basicFormCard = this.page.locator('nb-card', { hasText: 'Basic form' })
    await expect(basicFormCard.getByLabel('Email address')).toHaveValue(email)
    await expect(basicFormCard.getByLabel('Password')).toHaveValue(password)
  }

  async formWithouLabelsSubmit(recipient: string, subject: string, message: string) {
    const formWithoutLabelsCard = this.page.locator('nb-card', { hasText: 'Form without labels' })
    await formWithoutLabelsCard.getByPlaceholder('Recipients').fill(recipient)
    await formWithoutLabelsCard.getByPlaceholder('Subject').fill(subject)
    await formWithoutLabelsCard.getByPlaceholder('Message').fill(message)
    await formWithoutLabelsCard.getByRole('button', { name: 'Send' }).click()
    await expect(this.page).toHaveURL(/\/pages\/forms\/layouts/)
  }

  async submitHorizontalForm(email: string, password: string, option: boolean) {
    const horizontalFormCard = this.page.locator('nb-card', { hasText: 'Horizontal form' })
    await horizontalFormCard.getByLabel('Email').fill(email)
    await horizontalFormCard.getByLabel('Password').fill(password)
    if (option) {
      await horizontalFormCard.getByRole('checkbox', { name: 'Remember me' }).check({ force: true })
    }
    await horizontalFormCard.getByRole('button', { name: 'Sign in' }).click()
    await expect(this.page).toHaveURL(/\/pages\/forms\/layouts/)
    await expect(horizontalFormCard.getByLabel('Email')).toHaveValue(email)
    await expect(horizontalFormCard.getByLabel('Password')).toHaveValue(password)
    if (option) {
      await expect(horizontalFormCard.getByRole('checkbox', { name: 'Remember me' })).toBeChecked()
    }
  }

  async submitBlockForm(person: BlockFormData) {
    const horizontalFormCard = this.page.locator('nb-card', { hasText: 'Block form' })
    await horizontalFormCard.getByLabel('Email').fill(person.email)
    await horizontalFormCard.getByLabel('First Name').fill(person.firstName)
    await horizontalFormCard.getByLabel('Last Name').fill(person.lastName)
    await horizontalFormCard.getByLabel('Website').fill(person.website)
    await horizontalFormCard.getByRole('button', { name: 'Submit' }).click()
    await expect(this.page).toHaveURL(/\/pages\/forms\/layouts/)
    await expect(horizontalFormCard.getByLabel('Email')).toHaveValue(person.email)
    await expect(horizontalFormCard.getByLabel('First Name')).toHaveValue(person.firstName)
    await expect(horizontalFormCard.getByLabel('Last Name')).toHaveValue(person.lastName)
    await expect(horizontalFormCard.getByLabel('Website')).toHaveValue(person.website)
  }
}
