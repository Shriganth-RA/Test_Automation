
describe('template spec', () => {
  it('test automation page', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');

    // Tabs

    //Search bar
    const search = "Cypress"
    cy.get('form[name="wikipedia"] input[type="text"]').type(search);
    cy.get('form[name="wikipedia"] input[type="submit"]').click();
    cy.get('#Wikipedia1_wikipedia-search-results div a').invoke('text').should('include', search);
    
    // Dynamic button
    cy.get('.widget-content button[name="start"]').should('have.text', 'START');
    cy.get('.widget-content button[name="start"]').click();
    cy.get('.widget-content button[name="stop"]').should('have.text', 'STOP');

    // Alert & Popups
    // const input = "Praveen"
    // cy.window().then((win) => {
    //   cy.stub(win, 'prompt').returns(input);
    // })
    // cy.get('.widget-content button[id="promptBtn"]').click();
    // cy.get('.widget-content #demo').should('contain', `Hello ${input}! How are you today?`)

    // cy.get('.widget-content button').contains('New Tab').click();
    // cy.url().should('eq', 'https://www.pavantestingtools.com/');

    // Mouse hover
    cy.get('.dropdown .dropbtn').trigger('mouseover');
    cy.get('.dropdown-content a').first().invoke('css', 'display', 'visible').click({force: true});
    cy.url().should('include', '/#');

    // Double click
    const word = "Cypress";
    cy.get('.widget-content #field1').clear().type(word).should('have.value', word);
    cy.get('.widget-content #field2').should('have.value', '');
    cy.get('.widget-content button').contains('Copy Text').dblclick();
    cy.get('.widget-content #field2').should('have.value', word);

    


  })
})