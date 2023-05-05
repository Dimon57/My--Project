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

      webTables.clickEditBtn()
      webTables.getElement(FIRST_NAME).clear().type('Dmytro')
      webTables.getElement(SUBMIT_BTN).click()

      webTables.getElement('[class="rt-tr-group"]').find('[role="gridcell"]').contains('Dmytro')
  })

    it('Delete button',()=>{
      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.clickDeleteBtn()
    })

    it('Click on the (Type to search)',()=>{
      webTables.clickAddBtn()
      webTables.fillAllFild(userName, userLastName, userEmail, userAge, userSalary, departmentUser)
      webTables.clickSubmitBtn()

      webTables.clickSearchBox()
    })

    it('The heading of the column by which you want to sort the data',()=>{
      let arr = []
      let arrSort = []
      cy.get('[class="rt-table"]').find('[role="rowgroup"]').then((elem)=>{
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

      cy.get('[class="rt-table"]').find('[role="rowgroup"]').then((elem)=>{
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
      webTables.clickPreviousBtn()
    })
    it('Filling out the form incorrectly',()=>{
      webTables.clickAddBtn()
      webTables.getElement(FIRST_NAME).type(userName)
      webTables.clickSubmitBtn()

      webTables.getElement('#lastName').should('have.css','border-color','rgb(220, 53, 69)')
    })
    it('A name that does not exist is entered in the search line',()=>{
      webTables.clickSearchBox()

      webTables.getElement('[class="rt-noData"]').should('have.text','No rows found')
    })

})