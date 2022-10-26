//<reference types="cypress" />

context('Visit',()=>{

  
    const url ="https://en.wikipedia.org/w/index.php?search"
    const specialPage ="li#ca-nstab-special  span"
    const headText="h1#firstHeading"

    it('Visit Wiki',()=>{
        cy.visit('https://en.wikipedia.org/w/index.php?search')
    })
    it('URL Verify',()=>{
        cy.url().should("include",url)
    })
    it('Page Verify',()=>{
        cy.get(specialPage).should("have.text","Special page")
    })
    it('Head Text Verify',()=>{
        cy.get(headText).should("have.text","Search")
    })

})