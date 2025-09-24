
describe('Demo automation website', () => {

    beforeEach(() => {
    // Ignore application errors like "angular is not defined"
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('angular is not defined')) {
        return false; // prevents Cypress from failing the test
      }
    });
  });

    it('Static page', () => {

        cy.visit('https://demo.automationtesting.in/Static.html')

        cy.dragAndDrop('angular', 'droparea');
        cy.dragAndDrop('mongo', 'droparea');
        cy.dragAndDrop('node', 'droparea');

        cy.get('#droparea').contains('contain.html', 'img');
    })
})