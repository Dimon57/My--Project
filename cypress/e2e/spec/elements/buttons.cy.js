const DOUBLE_CLICK = '#doubleClickBtn'
const RIGHT_CLICK = '#rightClickBtn'
const CLICK_ME = '[type="button"]'

const DOUBLE_CLICK_BOARDER = '#doubleClickMessage'
const RIGHT_CLICK_BOARDER = '#rightClickMessage'
const CLICK_ME_BOARDER = '#dynamicClickMessage'

describe ('Buttons',()=>{

    beforeEach('',()=>{
     cy.visit('https://demoqa.com/buttons')
        
    })

    it('Click Btn',()=>{
       cy.get(DOUBLE_CLICK).dblclick()
       cy.get(RIGHT_CLICK).rightclick()
       cy.get(CLICK_ME).eq(3).click()
    })
    it('You have done a double click',()=>{
        cy.get(DOUBLE_CLICK).dblclick()
        cy.get(RIGHT_CLICK).rightclick()
        cy.get(CLICK_ME).eq(3).click()
        
        cy.get(DOUBLE_CLICK_BOARDER).should('have.text','You have done a double click')
    })
    it('You have done a right click',()=>{
        cy.get(DOUBLE_CLICK).dblclick()
        cy.get(RIGHT_CLICK).rightclick()
        cy.get(CLICK_ME).eq(3).click()
        
        cy.get(RIGHT_CLICK_BOARDER).should('have.text','You have done a right click')
    })
    it('You have done a dynamic click',()=>{
        cy.get(DOUBLE_CLICK).dblclick()
        cy.get(RIGHT_CLICK).rightclick()
        cy.get(CLICK_ME).eq(3).click()
        
        cy.get(CLICK_ME_BOARDER).should('have.text','You have done a dynamic click')
    })
    it('One click on double click',()=>{
        cy.get(DOUBLE_CLICK).click()
        cy.get(RIGHT_CLICK).rightclick()
        cy.get(CLICK_ME).eq(3).click()

        cy.get(DOUBLE_CLICK_BOARDER).should('not.exist')
    })
    it('Left click on right click',()=>{
        cy.get(DOUBLE_CLICK).dblclick()
        cy.get(RIGHT_CLICK).click()
        cy.get(CLICK_ME).eq(3).click()

        cy.get(RIGHT_CLICK_BOARDER).should('not.exist')
    })
    it('',()=>{
        cy.get(DOUBLE_CLICK).dblclick()
        cy.get(RIGHT_CLICK).rightclick()
        cy.get(CLICK_ME).eq(3).rightclick()   

        cy.get(CLICK_ME_BOARDER).should('not.exist')
    })
})