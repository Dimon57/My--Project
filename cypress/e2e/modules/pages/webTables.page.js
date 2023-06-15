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
export const ROWS_DATA = '[class="rt-noData"]'



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
    clickEditBtn(name){
        this.getElement('[class="rt-tr-group"]').find('[role="gridcell"]').contains(name).parent().within(()=>{
            this.getElement('[id*=edit]').click()
            })
    }
    getEditCheck(){
        return this.getElement('[class="rt-tbody"] > :nth-child(4)').find('[role="gridcell"]').eq(0)
    }
    clickDeleteBtn(name){
        this.getElement('[class="rt-tr-group"]').find('[role="gridcell"]').contains(name).parent().within(()=>{
            this.getElement('[id*=delete]').click()
            })
    }
    getDeleteCheck(){
        return this.getElement('[class="rt-table"]')
    }
    clickSearchBox(){
        this.getElement('#searchBox').type('Dimon')
    }
    getSearchCheck(){
        return this.getElement('[class="rt-tbody"]').find('[role="gridcell"]').eq(0)
    }
    clickSelectBtn(){
        this.getElement('select').select('5 rows', { force: true })
    }
    clickFirstName(){
        this.getElement('[class="rt-resizable-header-content"]').contains('First Name').click()
    }
    clickNextBtn(){
        this.getElement('.-next :nth-child(1)').click({force: true})
    }
    getNextCheck(){
        return this.getElement('[class="rt-tbody"]').find('[role="gridcell"]').eq(0)
    }
    clickPreviousBtn(){
        this.getElement('.-previous :nth-child(1)').click({force: true})
    }
    getPreviousCheck(){
        return this.getElement('[class="rt-tbody"]').find('[role="gridcell"]').eq(0)
    }
    getDataExists(name,...dataTest){
        
        cy.contains(name).parent().within(() => {
            dataTest.forEach((data, index) => {
                this.getElement('[role="gridcell"]').eq(index + 1).should('have.text', data)
    
            })
    })
}
    getDataTable(index) {
        let arr = []
        this.getElement('[class="rt-table"]').find('[role="rowgroup"]').then((elem) => {
            for (const elemKey in elem) {
                const text = elem.eq(elemKey).find('[role="gridcell"]').eq(index).text()
                if (text.length <= 1) {
                    break;
                } else {
                    arr.push(text)
                }
            }
        })
        return arr
    }
    checkSortingTable(name, index) {
        const beforeSorting = this.getDataTable(index)
        this.clickFirstName(name)
        const afterSorting = this.getDataTable(index)
        cy.get("body").then(() => {
            expect(beforeSorting).to.be.not.eq(afterSorting);
        })
        

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