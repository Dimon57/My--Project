const ADD_BTN = '#addNewRecordButton'
const FIRST_NAME = '#firstName'
const LAST_NAME = '#lastName'
const EMAIL = '#userEmail'
const AGE = '#age'
const SALARY = '#salary'
const DEPARTMENT = '#department'
const SUBMIT_BTN = '#submit'
const userName = 'Dimon'
const userLastName = 'Chernenko'
const userEmail = 'dimonpyzo13@gmail.com'
const userAge = '23'
const userSalary = '100000'
const departmentUser = 'Ukraine'
describe('Web Tables', () => {

    beforeEach('',() => {
      cy.visit('https://demoqa.com/webtables')
    })
  
    it('Filling out the form', () => {

      cy.get(ADD_BTN).click()
      cy.get(FIRST_NAME).type(userName)
      cy.get(LAST_NAME).type(userLastName)
      cy.get(EMAIL).type(userEmail)
      cy.get(AGE).type(userAge)
      cy.get(SALARY).type(userSalary)
      cy.get(DEPARTMENT).type(departmentUser)
      cy.get(SUBMIT_BTN).click()
      cy.contains('Dimon').parent().within(()=>{
        cy.get('[role="gridcell"]').eq(1).should('have.text','Chernenko')
        cy.get('[role="gridcell"]').eq(2).should('have.text','23')
        cy.get('[role="gridcell"]').eq(3).should('have.text','dimonpyzo13@gmail.com')
        cy.get('[role="gridcell"]').eq(4).should('have.text','100000')
        cy.get('[role="gridcell"]').eq(5).should('have.text','Ukraine')
    })
    })

    it.only('Edit button',()=>{

      cy.get(ADD_BTN).click()
      cy.get(FIRST_NAME).type(userName)
      cy.get(LAST_NAME).type(userLastName)
      cy.get(EMAIL).type(userEmail)
      cy.get(AGE).type(userAge)
      cy.get(SALARY).type(userSalary)
      cy.get(DEPARTMENT).type(departmentUser)
      cy.get(SUBMIT_BTN).click()
      cy.get('[class="rt-tr-group"]').find('[role="gridcell"]').contains('Dimon').parent().within(()=>{
      cy.get('[id*=edit]').click()
       cy.get('').contains('Dimon').clear()
      })
    })
  
})