import { TextBoxPage,
   emailIntoBoarder, nameIntoBoarder,
   PERMANENT_ADDRESS, PERMANENT_ADDRESS,
    fieldError, border } from "../../modules/pages/textBox.page"

const textBox = new TextBoxPage

describe ('Text box',() => {

  const userName = 'dimonpyzo'
  const Address = 'Lviv'
  const permanentAddress = 'Dnipro'

  beforeEach("",() =>{
    textBox.goto('elements')
  })

  it.skip("Enter correct data ",() => {
    const userEmail = 'dimonpyzo57@gmail.com'
    
    textBox.fillAllFild(userName, userEmail, Address, permanentAddress)
  
    // textBox.getElement(border).then((element) => {
    //   expect(element.find(nameIntoBoarder)).to.be.text(`Name:${userName}`)
    //   expect(element.find(emailIntoBoarder)).to.be.text(`Email:${userEmail}`)
    //   expect(element.find(currentAddressIntoBoarder)).to.be.text(`Current Address :${Address} `)
    //   expect(element.find(permanentAddressIntoBoarder)).to.be.text(`Permananet Address :${permanentAddress}`)
    // })
    textBox.getElement(border).find(nameIntoBoarder).should('have.text',`Name:${userName}`) 
    textBox.getElement(border).find(emailIntoBoarder).should('have.text',`Email:${userEmail}`) 
    textBox.getElement(border).find(CURRENT_ADDRESS).should('have.text',`Current Address :${Address} `) 
    textBox.getElement(border).find(PERMANENT_ADDRESS).should('have.text',`Permananet Address :${permanentAddress}`) 
  })

  it.skip("Enter wrong email",() => {

    const wrongEmail = 'dimonpyzo57'

    textBox.fillAllFild(userName,wrongEmail,Address,permanentAddress)

    textBox.getElement(border).should('not.exist')
    textBox.getElement(fieldError).should('be.visible')

  })
})