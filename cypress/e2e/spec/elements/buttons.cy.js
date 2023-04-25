import {ButtonPage} from "../../modules/pages/buttons.page"

const buttons = new ButtonPage()

describe ('Buttons',()=>{

    beforeEach('',()=>{
     buttons.goto('buttons')
        
    })
    it.only('',()=>{
        buttons.doubleClickButton()
        buttons.rightClickButton()
        buttons.clickMeButton()
    })

    it('You have done a double click',()=>{
        
        buttons.doubleClickButton()
        buttons.getDoubleClickBoarderElement().should('have.text','You have done a double click')
    })

    it('You have done a right click',()=>{

        buttons.rightClickButton()
        buttons.getRightClickBoarderElement().should('have.text','You have done a right click')
    })

    it('You have done a dynamic click',()=>{

        buttons.clickMeButton()
        buttons.getClickMeBoarderElement().should('have.text','You have done a dynamic click')
    })

    it('One click on double click',()=>{

        buttons.oneClickButton()
        buttons.getDoubleClickBoarderElement().should('not.exist')
    })

    it('Left click on right click',()=>{

        buttons.leftClickButton()
        buttons.getRightClickBoarderElement().should('not.exist')
    })

    it('Right click on (Click Me)',()=>{

        buttons.rightClicOnClickMe()  
        buttons.getClickMeBoarderElement().should('not.exist')
    })
})