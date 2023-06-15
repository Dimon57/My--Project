import { WebTablesPage, ADD_BTN, FIRST_NAME, LAST_NAME, EMAIL, AGE,DEPARTMENT,SUBMIT_BTN, ROWS_DATA } from "../../modules/pages/webTables.page"
import { WebTablesPage, ADD_BTN, FIRST_NAME, LAST_NAME, EMAIL, AGE,DEPARTMENT,SUBMIT_BTN } from "../../modules/pages/webTables.page"

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

      cy.contains('Dimon').parent().within(()=>{
        webTables.getElement('[role="gridcell"]').eq(1).should('have.text','Chernenko')
        webTables.getElement('[role="gridcell"]').eq(2).should('have.text','23')
        webTables.getElement('[role="gridcell"]').eq(3).should('have.text','dimonpyzo13@gmail.com')
        webTables.getElement('[role="gridcell"]').eq(4).should('have.text','100000')
        webTables.getElement('[role="gridcell"]').eq(5).should('have.text','Ukraine')

    })
    })

    it('Edit button',()=>{
      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.clickEditBtn(userName)
      webTables.getElement(FIRST_NAME).clear().type(EDIT_NAME)
      webTables.getElement(SUBMIT_BTN).click()

      webTables.getEditCheck().should('have.text',EDIT_NAME)
      webTables.clickEditBtn()
      webTables.getElement(FIRST_NAME).clear().type('Dmytro')
      webTables.getElement(SUBMIT_BTN).click()

      webTables.getElement('[class="rt-tr-group"]').find('[role="gridcell"]').contains('Dmytro')
  })

    it('Delete button',()=>{
      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.clickDeleteBtn(userName)

      webTables.getDeleteCheck().should('not.text', userName)
      webTables.clickDeleteBtn()
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

    it('The heading of the column by which you want to sort the data',()=>{
      let arr = []
      let arrSort = []
      webTables.getElement('[class="rt-table"]').find('[role="rowgroup"]').then((elem)=>{
        cy.log(elem.length)
        for (const elemKey in elem) {
          const text = elem.eq(elemKey).find('[role="gridcell"]').eq(0).text()
            if(text.length<= 1){
              break;
            } else {
              arr.push(text)
            }
        }
      })
      webTables.clickFirstName()

      webTables.getElement('[class="rt-table"]').find('[role="rowgroup"]').then((elem)=>{
        cy.log(elem.length)
        for (const elemKey in elem) {
          const text = elem.eq(elemKey).find('[role="gridcell"]').eq(0).text()
          if(text.length<= 1){
            break;
          } else {
            arrSort.push(text)
          }
        }
        expect(arr).to.be.not.eq(arrSort);

      })
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
      webTables.clickPreviousBtn()
    })
    it('Filling out the form incorrectly',()=>{
      webTables.clickAddBtn()
      webTables.getElement(FIRST_NAME).type(userName)
      webTables.clickSubmitBtn()

      webTables.getElement(LAST_NAME).should('have.css','border-color','rgb(220, 53, 69)')
      webTables.getElement('#lastName').should('have.css','border-color','rgb(220, 53, 69)')
    })
    it('A name that does not exist is entered in the search line',()=>{
      webTables.clickSearchBox()

      webTables.getElement(ROWS_DATA).should('have.text','No rows found')
    })

})
      webTables.getElement('[class="rt-noData"]').should('have.text','No rows found')
    })

})
