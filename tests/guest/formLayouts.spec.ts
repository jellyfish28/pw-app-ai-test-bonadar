import { test } from '../../playwright-utils/fixtures'
import { faker } from '@faker-js/faker'
import { blockFormData } from '../../playwright-utils/helpers/test-data'

test.describe('Form Layouts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('User can fill out and submit the inline form', async ({ pom }) => {
    const name = faker.person.firstName() + ' ' + faker.person.lastName()
    const email = faker.internet.email()
    await pom.homePage.openFormLayouts()
    await pom.formLayoutsPage.fillInlineForm(name, email)
    await pom.formLayoutsPage.expectInlineFormFilledCorrectly(name, email)
    await pom.formLayoutsPage.submitInlineForm()
  })

  test('User can fill out and submit the grid form', async ({ pom }) => {
    const email = faker.internet.email()
    const password = faker.internet.password()
    const radioOption = 'Option 1'
    await pom.homePage.openFormLayouts()
    await pom.formLayoutsPage.fillGridForm(email, password, radioOption)
    await pom.formLayoutsPage.expectGridFormFilledCorrectly(email, password, radioOption)
    await pom.formLayoutsPage.submitGridForm()
  })

  test('User can fill out and submit the basic form', async ({ pom }) => {
    const email = faker.internet.email()
    const password = faker.internet.password()
    await pom.homePage.openFormLayouts()
    await pom.formLayoutsPage.fillBasicForm(email, password)
    await pom.formLayoutsPage.expectBasicFormFilledCorrectly(email, password)
    await pom.formLayoutsPage.submitBasicForm()
  })

  test('User can fill out and submit the form without labels', async ({ pom }) => {
    const recipient = faker.internet.email()
    const subject = faker.lorem.sentence()
    const message = faker.lorem.paragraph()
    await pom.homePage.openFormLayouts()
    await pom.formLayoutsPage.formWithouLabelsSubmit(recipient, subject, message)
  })

  test('User can fill out and submit horizontal form', async ({ pom }) => {
    const email = faker.internet.email()
    const password = faker.internet.password()
    const option = false;
    await pom.homePage.openFormLayouts()
    await pom.formLayoutsPage.submitHorizontalForm(email, password, option)
  })

  test('User can fill out and submit Block form', async ({ pom }) => {
    await pom.homePage.openFormLayouts()
    await pom.formLayoutsPage.submitBlockForm(blockFormData)
  })
})
