
context('Visit',()=>{

 
  const url="https://en.wikipedia.org/w/index.php?search"
  const searchInputXpath  =  "/html//input[@id='ooui-php-1']"
  const searchInputClearPath  ="[id='ooui-php-1']"
  const searchButtonXpath =  "/html//div[@id='mw-search-top-table']/div//button/span[@class='oo-ui-labelElement-label']"
  const searchButtonPath  =  "button > .oo-ui-labelElement-label"
  const resultMessage     =  "#mw-content-text > div.searchresults > div.mw-search-results-info > p.mw-search-nonefound"
  const advancedSearchButtonPath  = ".mw-advancedSearch-container div:nth-child(1) > span:nth-of-type(1) .oo-ui-indicator-down"
  const theseWordLabelPath= "/html//div[@id='advancedSearchField-plain']//input"
  const searchingCancelButtonPath  = "div[title='randomword2']  a[role='button'] > .oo-ui-icon-close.oo-ui-iconElement-icon"
  const deletingSearchingWord = ".mw-advancedSearch-searchPreview.oo-ui-widget.oo-ui-widget-enabled"



    it('Visit Wiki',()=>{
        cy.visit('https://en.wikipedia.org/w/index.php?search')
    })

    it('URL Verify',()=>{
        cy.url().should("include",url)
    })

    it('Search Button Verify',()=>{
    cy.get(searchButtonPath).should("be.visible").should("have.text","Search").invoke("text").then((headLabelText)=>{
    assert.equal(headLabelText,"Search")})
    })

    it('Searching Not Exist Word-1',()=>{
    cy.get(searchInputClearPath).clear()
    cy.xpath(searchInputXpath).type('randomword')
    cy.xpath(searchButtonXpath).click()
    cy.get(resultMessage).should("be.visible")
    cy.get(resultMessage).should("include.text","There were no results matching the query.") 
  })

  it('Searching Not Exist Word-2',()=>{
    cy.get(searchInputClearPath).clear()
    cy.get(advancedSearchButtonPath).should("be.visible")
    cy.get(advancedSearchButtonPath).click()
    cy.xpath(theseWordLabelPath).type('randomword2')
    cy.xpath(searchButtonXpath).click()
    cy.get(resultMessage).should("be.visible")
    cy.get(resultMessage).should("include.text","There were no results matching the query.") 
  })

  it('Cleaning Search Area',()=>{
    cy.get(searchingCancelButtonPath).click()
    cy.get(deletingSearchingWord).should("not.have.class","mw-advancedSearch-searchPreview-content")
  })

})