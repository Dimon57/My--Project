export class BasePage{
    
    goto(page){
        cy.visit('https://demoqa.com/'+ page)
    }
    getElement(element){
        return cy.get(element)
}
}