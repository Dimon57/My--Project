import { BasePage } from "./basePage.page";

const PRACTICE_FORM = 'Practice Form'

export const SELECTORS = {
    FIRST_NAME: '#firstName',
    LAST_NAME: '#lastName',
    EMAIL: '#userEmail',
    GENDER: '#gender-radio-1',
    NUMBER: '#userNumber',
    DATA_OF_BIRTH: '#dateOfBirthInput',
    MONTH: '.react-datepicker__month-select',
    YEAR: '.react-datepicker__year-select',
    DAY: '.react-datepicker__day--013',
    SUBJECT: '#subjectsContainer',
    HOBBIES: '#hobbies-checkbox-1',
    PICTURE: '#uploadPicture',
    CURRENT_ADDRESS: '#currentAddress',
    STATE: 'Select State',
    CITY: 'Select City',
    SUBMIT: '#submit'
   }

export class PracticeFormPage extends BasePage{
    clickPracticeForm(){
        cy.contains(PRACTICE_FORM).first().click()
    }
    getState(){
        cy.contains(SELECTORS.STATE).click({force: true}).type('NCR{enter}')
    }
    getCity(){
        cy.contains(SELECTORS.CITY).click({force: true}).type('Delhi{enter}')
    }
    enterDataToForm(user){
        this.getElement(SELECTORS.FIRST_NAME).type(user.name)
        this.getElement(SELECTORS.LAST_NAME).type(user.lastName)
        this.getElement(SELECTORS.EMAIL).type(user.email)
        this.getElement(SELECTORS.GENDER).click({force: true} )
        this.getElement(SELECTORS.NUMBER).type(user.mobile)
        this.getElement(SELECTORS.DATA_OF_BIRTH).click()
        this.getElement(SELECTORS.MONTH).select(user.monthBD)
        this.getElement(SELECTORS.YEAR).select(user.yearBD)
        this.getElement(SELECTORS.DAY).click()
        this.getElement(SELECTORS.SUBJECT).type(`${user.subject}{enter}`)
        this.getElement(SELECTORS.HOBBIES).click({force: true} ) 
        this.getElement(SELECTORS.PICTURE).selectFile(user.picturePath)
        this.getElement(SELECTORS.CURRENT_ADDRESS).type(user.address)
        this.getElement(SELECTORS.SUBMIT).click({force: true})
    }
    checkElementsInTable(data){
        for(let i = 1; i<11; i++){
            cy.get(`.table-responsive tbody > tr:nth-child(${i}) > td:nth-child(2)` )
            .should('have.text',data[i-1])
        }
    }
    getTable(){
        return this.getElement('.modal-content')
    }
}