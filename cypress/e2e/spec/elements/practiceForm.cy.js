import { PracticeFormPage, SELECTORS } from "../../modules/pages/practiceForm.page"

const practiceForm = new PracticeFormPage

describe('Practice Form',() => {
    const USER_DATA = {
        name:'Dimon',
        lastName:'Chernenko',
        email: 'dimon13@gmail.com',
        mobile: '0959474352',
        address: 'Lviv',
        monthBD:'February',
        subject: 'History',
        yearBD: '2000',
        picturePath: 'cypress/fixtures/picture.jpeg',
        picture:'picture.jpeg',
        day: '13',
        gender: 'Male',
        hobbies: 'Sports'
    }
    
    beforeEach('',() => { 
        practiceForm.goto('automation-practice-form')
    })

    it('Filling out the student registration form',() => {
        const FORM_DATA = [`${USER_DATA.name} ${USER_DATA.lastName}`, USER_DATA.email, USER_DATA.gender, USER_DATA.mobile, 
        `${USER_DATA.day} ${USER_DATA.monthBD},${USER_DATA.yearBD}`,USER_DATA.subject, USER_DATA.hobbies, USER_DATA.picture, USER_DATA.address, 'NCR Delhi' ]
        
        practiceForm.getState()
        practiceForm.getCity()
        practiceForm.enterDataToForm(USER_DATA)
        

        practiceForm.getTable().should('be.visible')
        practiceForm.getTable().find('.modal-header').should('have.text','Thanks for submitting the form')

        
        practiceForm.checkElementsInTable(FORM_DATA)
    })

    it('No data entered',()=>{
        practiceForm.getElement(SELECTORS.SUBMIT).click({force: true})

        practiceForm.getElement(SELECTORS.FIRST_NAME).should('have.css', 'border-color','rgb(220, 53, 69)')
    })

    it('Fill in only first name',()=>{
        practiceForm.getElement(SELECTORS.FIRST_NAME).type(USER_DATA.name)
        practiceForm.getElement(SELECTORS.SUBMIT).click({force: true})
        practiceForm.getElement(SELECTORS.LAST_NAME).should('have.css', 'border-color','rgb(220, 53, 69)')
    })
    it('Fill in only email',()=>{
        const wrongEmail = 'dimon13'

        practiceForm.getElement(SELECTORS.EMAIL).type(wrongEmail)
        practiceForm.getElement(SELECTORS.SUBMIT).click({force: true})

        practiceForm.getElement(SELECTORS.EMAIL).should('have.css', 'border-color','rgb(220, 53, 69)')
    })
    it('Incorrectly filled "Mobile" field',()=>{

        const wrongMobile = 'asdfghjkll'

        practiceForm.getElement(SELECTORS.FIRST_NAME).type(USER_DATA.name)
        practiceForm.getElement(SELECTORS.LAST_NAME).type(USER_DATA.lastName)
        practiceForm.getElement(SELECTORS.EMAIL).type(USER_DATA.email)
        practiceForm.getElement(SELECTORS.GENDER).click({force: true} )
        practiceForm.getElement(SELECTORS.NUMBER).type(wrongMobile)
        practiceForm.getElement(SELECTORS.SUBMIT).click({force: true})

        practiceForm.getElement(SELECTORS.NUMBER).should('have.css', 'border-color','rgb(220, 53, 69)')
    })
    it('The table does not appear',()=>{
        practiceForm.getElement(SELECTORS.SUBMIT).click({force: true})

        practiceForm.getTable().should('not.exist')
    })
})