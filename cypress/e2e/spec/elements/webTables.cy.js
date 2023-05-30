import { WebTablesPage, ADD_BTN, FIRST_NAME, LAST_NAME, EMAIL, AGE,DEPARTMENT,SUBMIT_BTN, ROWS_DATA } from "../../modules/pages/webTables.page"

const webTables = new WebTablesPage

describe('Web Tables', () => {
  const userName = 'Dimon'
  const userLastName = 'Chernenko'
  const userEmail = 'dimonpyzo13@gmail.com'
  const userAge = '23'
  const userSalary = '100000'
  const departmentUser = 'Ukraine'

    beforeEach('',() => {
      webTables.goto('webtables')
    })
  
    it('Filling out the form', () => {
      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.getDataExists(userName, userLastName, userAge,userEmail,  userSalary, departmentUser)
    })

    it('Edit button',()=>{
      const EDIT_NAME = 'Dmytro'

      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.clickEditBtn(userName)
      webTables.getElement(FIRST_NAME).clear().type(EDIT_NAME)
      webTables.getElement(SUBMIT_BTN).click()

     webTables.getEditCheck().should('have.text',EDIT_NAME)
  })

    it('Delete button',()=>{
      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.clickDeleteBtn(userName)

      webTables.getDeleteCheck().should('not.text', userName)
    })

    it('Click on the (Type to search)',()=>{
      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.clickSearchBox()

      webTables.getSearchCheck().should('have.text','Dimon')
    })

    it('The heading of the column by which you want to sort the data',()=>{
        const a = {
            "First Name": 0,
            "Last Name": 1
        }
        webTables.checkSortingTable(Object.keys(a)[0],a["First Name"])
    })

    it('(Next) button and (Previous) button',()=>{
      webTables.clickSelectBtn()

      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()
      
      webTables.clickNextBtn()
      webTables.getNextCheck().should('have.text','Dimon')
      
      webTables.clickPreviousBtn()
      webTables.getPreviousCheck().should('have.text','Cierra')
    })
    it('Filling out the form incorrectly',()=>{
      webTables.clickAddBtn()
      webTables.getElement(FIRST_NAME).type(userName)
      webTables.clickSubmitBtn()

      webTables.getElement(LAST_NAME).should('have.css','border-color','rgb(220, 53, 69)')
    })
    it('A name that does not exist is entered in the search line',()=>{
      webTables.clickSearchBox()

      webTables.getElement(ROWS_DATA).should('have.text','No rows found')
    })

})