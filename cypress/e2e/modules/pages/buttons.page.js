import { BasePage } from "./basePage.page";

const BUTTONS = 'Buttons'
const DOUBLE_CLICK = '#doubleClickBtn'
const RIGHT_CLICK = '#rightClickBtn'
const CLICK_ME = '[type="button"]'

export const DOUBLE_CLICK_BOARDER = '#doubleClickMessage'
export const RIGHT_CLICK_BOARDER = '#rightClickMessage'
export const CLICK_ME_BOARDER = '#dynamicClickMessage'

export class ButtonPage extends BasePage{
    clickButton(){
       cy.contains(BUTTONS).first().click()
    }
    
    doubleClickButton(){
        this.getElement(DOUBLE_CLICK).dblclick()
    }

    rightClickButton(){
        this.getElement(RIGHT_CLICK).rightclick()
    }

    clickMeButton(){
        this.getElement(CLICK_ME).eq(3).click()
    }
}

