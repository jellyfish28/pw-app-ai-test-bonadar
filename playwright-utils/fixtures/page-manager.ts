import type { Page } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { FormLayoutsPage } from '../pages/form-layouts-page'
import { DatePickerPage } from '../pages/date-picker-page'

export class PageManager {
  readonly homePage: HomePage
  readonly formLayoutsPage: FormLayoutsPage
  readonly datePickerPage: DatePickerPage

  constructor(page: Page) {
    this.homePage = new HomePage(page)
    this.formLayoutsPage = new FormLayoutsPage(page)
    this.datePickerPage = new DatePickerPage(page)
  }
}
