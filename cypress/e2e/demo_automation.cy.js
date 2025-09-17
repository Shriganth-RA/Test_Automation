describe('Automation Demo Registration', () => {
  it('fills the form', () => {
    cy.visit('/');

    // Basic info
    cy.contains('Skip Sign In').click();
    cy.get('input[placeholder="First Name"]').type("Arun");
    cy.get('input[placeholder="Last Name"]').type("S");
    cy.get('textarea').type("123, main road");
    cy.get('input[type="email"]').type("test@gmail.com");
    cy.get('input[type="tel"]').type("7852346912");

    // Gender radio
    cy.get('input[value="Male"]').check().should('be.checked');

    // Hobbies checkbox
    cy.get('input[type="checkbox"]').check('Cricket', { force: true }).should('be.checked');

    // Languages (custom dropdown)
    // cy.get('#msdd').click();
    // cy.get('.ui-autocomplete li a').contains('English').click();

    // Skills dropdown (native select)
    cy.get('select#Skills').select('C'); // by visible text instead of index

    // Country dropdown (Select2 custom)
    cy.get('.select2-selection').click();
    cy.get('.select2-search__field').type('India{enter}');

    // DOB selects
    cy.get('select#yearbox').select("2002");
    cy.get('select[placeholder="Month"]').select("August");
    cy.get('select#daybox').select("8");

    // Passwords
    cy.get('input#firstpassword').type("78963@a");
    cy.get('input#secondpassword').type("78963@a");

  })
})