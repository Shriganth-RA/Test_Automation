describe("test automation website", () => {
    it("fills the form", () => {

        // Navigate to the TestAutomation website
        cy.visit('https://testautomationpractice.blogspot.com/')
        
        // Validate the Name feild
        cy.get('#name').type("Sathish").should('have.value', 'Sathish');
        
        // Validate the Email feild
        cy.get('#email').type("sathish@gmail.com").should('have.value', 'sathish@gmail.com');
        
        // Validate the Contact feild
        cy.get('#phone').type("8941236719").should('have.value', '8941236719');
        
        // Validate the Address feild
        cy.get('#textarea').type("123, Gandhi road").should('have.value', '123, Gandhi road');
        
        // Validate the Gender button
        cy.get('#male').click().should('be.checked').should('have.value', 'male');
        
        // Validate the Days feild
        cy.get('#sunday').click().should('have.value', 'sunday');
        cy.get('#thursday').click().should('have.value', 'thursday');
    
        cy.get('select').get('#country').select('India').should('have.value', 'india');
        
        cy.get('select#colors').select('Blue').invoke('val').should('deep.equal', ['blue']);
        
        cy.get('select#animals').select('Cat').invoke('val').should('deep.equal', ['cat']);
        
        cy.get('input#datepicker').type("09/20/2025").should('have.value', '09/20/2025');

        // cy.get('input#txtDate').type("10/20/2025").should('have.value', '10/20/2025');
    
        cy.get('input#start-date').type("2025-10-10").should('have.value', '2025-10-10');

        cy.get('input#end-date').type("2025-10-20").should('have.value', '2025-10-20');

        //Footer links
        
    })
})