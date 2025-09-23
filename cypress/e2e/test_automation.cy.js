describe("test automation website", () => {
    it("fills the form", () => {

        // Navigate to the TestAutomation website
        cy.visit('https://testautomationpractice.blogspot.com/')

// ----------------------------------------------------------------------------------------
        
        // Validate the Name feild
        cy.get('#name').type("Sathish")
                            .should('have.value', 'Sathish');

// ----------------------------------------------------------------------------------------
        
        // Validate the Email feild
        cy.get('#email').type("sathish@gmail.com")
                            .should('have.value', 'sathish@gmail.com');

// ----------------------------------------------------------------------------------------
        
        // Validate the Contact feild
        cy.get('#phone').type("8941236719")
                            .should('have.value', '8941236719');

// ----------------------------------------------------------------------------------------
        
        // Validate the Address feild
        cy.get('#textarea').type("123, Gandhi road")
                            .should('have.value', '123, Gandhi road');

// ----------------------------------------------------------------------------------------
        
        // Validate the Gender button
        cy.get('#male').click()
                            .should('be.checked')
                                .should('have.value', 'male');

// ----------------------------------------------------------------------------------------
        
        // Validate the Days feild
        cy.get('#sunday').click().should('have.value', 'sunday');
        cy.get('#thursday').click().should('have.value', 'thursday');

// ----------------------------------------------------------------------------------------
    
        cy.get('select').get('#country')
                            .select('India')
                                .should('have.value', 'india');

// ----------------------------------------------------------------------------------------
        
        cy.get('select#colors').select('Blue')
                            .invoke('val')
                                .should('deep.equal', ['blue']);

// ----------------------------------------------------------------------------------------
        
        cy.get('select#animals').select('Cat')
                            .invoke('val')
                                .should('deep.equal', ['cat']);

// ----------------------------------------------------------------------------------------
        
        let datePicker1 = "09/20/2025";
        cy.get('input#datepicker').type(datePicker1)
                                        .should('have.value', datePicker1);

// ----------------------------------------------------------------------------------------

        cy.press('Tab');
        let datePicker2 = "22/09/2025";
        cy.get('input#txtDate').invoke('removeAttr', 'readonly')
                                    .type(datePicker2, {force: true})
                                        .should('have.value', datePicker2);

// ----------------------------------------------------------------------------------------
    
        cy.get('input#start-date').type("2025-10-10")
                                        .should('have.value', '2025-10-10');

        cy.get('input#end-date').type("2025-10-20")
                                        .should('have.value', '2025-10-20');

        cy.get('button.submit-btn').click();

// ----------------------------------------------------------------------------------------

        // Upload a single file
        const singleFile = 'Gowtham_file.txt';
        cy.get('#singleFileInput').attachFile(singleFile);   // File to be upload
        cy.get('#singleFileForm').contains('Upload Single File').click();   // Click the upload button
        cy.get('#singleFileStatus').should('contain', 'Gowtham_file.txt');     // Verify the file was uploaded

// ----------------------------------------------------------------------------------------

        // Upload a multiple files
        const multipleFile = [`cypress/fixtures/Arun_file.txt`, 'cypress/fixtures/Gowtham_file.txt', 'cypress/fixtures/Sathish_file.txt'];
        cy.get('#multipleFilesInput').selectFile(multipleFile);     // Files to be upload
        cy.get('#multipleFilesForm').contains('Upload Multiple Files').click();     // Click the upload button
        
        const checkMultipleFiles = ['Arun_file.txt', 'Gowtham_file.txt', 'Sathish_file.txt'];
        checkMultipleFiles.forEach((file) => {
            cy.get('#multipleFilesStatus').should('contain', file);     // Verify the files were uploaded
        })

// ----------------------------------------------------------------------------------------

        // Static web table
        const bookList = [
            {bookName: 'Learn Selenium', author: 'Amit', subject: 'Selenium', price: '300'},
            {bookName: 'Learn Java', author: 'Mukesh', subject: 'Java', price: '500'},
        ]

        cy.verifyTableCells(bookList);

// ----------------------------------------------------------------------------------------
    
        // Pagination web table
        cy.get('#productTable input[type="checkbox"]').then(($checkboxes) => {
            // Check all boxes
            for (let i = 0; i < $checkboxes.length; i++) {
                cy.get('#productTable input[type="checkbox"]').eq(i).click();
            }
        })

        // Navigate to the next page
        cy.get('#pagination a').contains('2').click();
        cy.get('#productTable input[type="checkbox"]').then(($checkboxes) => {
            // Check all boxes
            for (let i = 0; i < $checkboxes.length; i++) {
                cy.get('#productTable input[type="checkbox"]').eq(i).click();
            }
        })

        // Navigate to the next page
        cy.get('#pagination a').contains('3').click();
        cy.get('#productTable input[type="checkbox"]').then(($checkboxes) => {
            // Check all boxes
            for (let i = 0; i < $checkboxes.length; i++) {
                cy.get('#productTable input[type="checkbox"]').eq(i).click();
            }
        })

        // Navigate to the next page
        cy.get('#pagination a').contains('4').click();
        cy.get('#productTable input[type="checkbox"]').then(($checkboxes) => {
            // Check all boxes
            for (let i = 0; i < $checkboxes.length; i++) {
                cy.get('#productTable input[type="checkbox"]').eq(i).click();
            }
        })

// ----------------------------------------------------------------------------------------

        // Form
        cy.get('#section1 #input1').type("Lorem ipsum")
                                        .should('have.value', 'Lorem ipsum');
        cy.get('#btn1').trigger('mouseover').click();

        cy.get('#section2 #input2').type("Lorem ipsum")
                                        .should('have.value', 'Lorem ipsum');
        cy.get('#btn2').trigger('mouseover').click();

        cy.get('#section3 #input3').type("Lorem ipsum")
                                        .should('have.value', 'Lorem ipsum');
        cy.get('#btn3').trigger('mouseover').click();

// ----------------------------------------------------------------------------------------

        // Footer
        // cy.get('#PageList1 a').contains('Home').click();
        // cy.get('#PageList1 a').contains('Hidden Elements & AJAX').click();
        // cy.url().should('include', '/p/gui-elements-ajax-hidden.html');
    })
})