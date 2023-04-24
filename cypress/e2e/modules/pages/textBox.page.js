import { BasePage } from "./basePage.page";

const TEXT_BOX = 'Text Box'
const USER_NAME = '#userName'
const USER_EMAIL = '#userEmail'
const SUBMIT_BTN = '#submit'

export const CURRENT_ADDRESS = '#currentAddress'
export const PERMANENT_ADDRESS = '#permanentAddress'
export const nameIntoBoarder = '#name'
export const emailIntoBoarder = '#email'
export const border = '.border'
export const fieldError = '.field-error'

export class TextBoxPage extends BasePage{

        fillAllFild(name, email, address, permanentAddress){
        cy.contains(TEXT_BOX).first().click()
        this.getElement(USER_NAME).type(name)
        this.getElement(USER_EMAIL).type(email)
        this.getElement(CURRENT_ADDRESS).type(address)
        this.getElement(PERMANENT_ADDRESS).type(permanentAddress)
        this.getElement(SUBMIT_BTN).click()
    }
}
