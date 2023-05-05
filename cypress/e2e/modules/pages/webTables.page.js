import { BasePage } from "./basePage.page";

const WEB_TABLES = 'Web Tables'

export const ADD_BTN = '#addNewRecordButton'
export const FIRST_NAME = '#firstName'
export const LAST_NAME = '#lastName'
export const EMAIL = '#userEmail'
export const AGE = '#age'
export const SALARY = '#salary'
export const DEPARTMENT = '#department'
export const SUBMIT_BTN = '#submit'



export class WebTablesPage extends BasePage{
    clickWebTables(){
    cy.contains(WEB_TABLES).first().click()
    }
    clickAddBtn(){
    this.getElement(ADD_BTN).click()
    }
    clickSubmitBtn(){
        this.getElement(SUBMIT_BTN).click()
    }
    fillAllFild(firstName, lastName, email, age, salary, department){

        this.getElement(FIRST_NAME).type(firstName)
        this.getElement(LAST_NAME).type(lastName)
        this.getElement(EMAIL).type(email)
        this.getElement(AGE).type(age)
        this.getElement(SALARY).type(salary)
        this.getElement(DEPARTMENT).type(department)
        

    }
    clickEditBtn(){
        this.getElement('[class="rt-tr-group"]').find('[role="gridcell"]').contains('Dimon').parent().within(()=>{
            this.getElement('[id*=edit]').click()
            })
    }
    clickDeleteBtn(){
        this.getElement('[class="rt-tr-group"]').find('[role="gridcell"]').contains('Dimon').parent().within(()=>{
            this.getElement('[id*=delete]').click()
            })
    }
    clickSearchBox(){
        this.getElement('#searchBox').type('Dimon')
    }
    clickSelectBtn(){
        cy.get('select').select('5 rows', { force: true })
    }
    clickFirstName(){
        cy.get('[class="rt-resizable-header-content"]').contains('First Name').click()
    }
    clickNextBtn(){
        cy.get('[class="-next"]').click()
    }
    clickPreviousBtn(){
        cy.get('[class="-previous"]').click()
    }
}