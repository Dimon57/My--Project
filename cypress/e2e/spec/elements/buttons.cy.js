import { ButtonPage,DOUBLE_CLICK_BOARDER,RIGHT_CLICK_BOARDER,CLICK_ME_BOARDER } from "../../modules/pages/buttons.page" 

const buttons = new ButtonPage()

const DOUBLE_CLICK = '#doubleClickBtn'
const RIGHT_CLICK = '#rightClickBtn'
const CLICK_ME = '[type="button"]'

describe ('Buttons',()=>{

    beforeEach('',()=>{
     buttons.goto('buttons')
        
    })

    it('You have done a double click',()=>{
        
        buttons.doubleClickButton()
        buttons.getElement(DOUBLE_CLICK_BOARDER).should('have.text','You have done a double click')
    })

    it('You have done a right click',()=>{

        buttons.rightClickButton()
        buttons.getElement(RIGHT_CLICK_BOARDER).should('have.text','You have done a right click')
    })

    it('You have done a dynamic click',()=>{

        buttons.clickMeButton()
        buttons.getElement(CLICK_ME_BOARDER).should('have.text','You have done a dynamic click')
    })

    it('One click on double click',()=>{

        buttons.getElement(DOUBLE_CLICK).click()
        buttons.getElement(DOUBLE_CLICK_BOARDER).should('not.exist')
    })

    it('Left click on right click',()=>{

        buttons.getElement(RIGHT_CLICK).click()
        buttons.getElement(RIGHT_CLICK_BOARDER).should('not.exist')
    })

    it('Right click on (Click Me)',()=>{

        buttons.getElement(CLICK_ME).eq(3).rightclick()   
        buttons.getElement(CLICK_ME_BOARDER).should('not.exist')
    })
})