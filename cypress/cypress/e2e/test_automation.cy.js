describe("test automation website", () => {
    it("fills the form", () => {

        // Navigate to the TestAutomation website
        cy.visit('https://testautomationpractice.blogspot.com/')

// ----------------------------------------------------------------------------------------
        
        // Validate the Name feild
        const name = "Sathish";
        cy.get('#name').type(name)
                            .should('have.value', name);

// ----------------------------------------------------------------------------------------
        
        // Validate the Email feild
        const email = "sathish@gmail.com";
        cy.get('#email').type(email)
                            .should('have.value', email);

// ----------------------------------------------------------------------------------------
        
        // Validate the Contact feild
        const phone = "8941236719";
        cy.get('#phone').type(phone)
                            .should('have.value', phone);

// ----------------------------------------------------------------------------------------
        
        // Validate the Address feild
        const address = "123, Gandhi road";
        cy.get('#textarea').type(address)
                            .should('have.value', address);

// ----------------------------------------------------------------------------------------
        
        // Validate the Gender button
        const gender = "male"
        cy.get(`#${gender}`).click()
                            .should('be.checked')
                                .should('have.value', gender);

// ----------------------------------------------------------------------------------------
        
        // Validate the Days feild
        cy.get('#sunday').click().should('have.value', 'sunday');
        cy.get('#thursday').click().should('have.value', 'thursday');

// ----------------------------------------------------------------------------------------
    
        // const country = ""
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
    
        const start_date = "2025-10-10";
        const end_date = "2025-10-20";
        cy.get('input#start-date').type(start_date)
                                        .should('have.value', start_date);

        cy.get('input#end-date').type(end_date)
                                        .should('have.value', end_date);

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
        cy.fixture('BookList.json').then((bookList) => {
            cy.verifyTableCells(bookList);
        })

// ----------------------------------------------------------------------------------------

        // Dynamic web table
        cy.verifyTaskTableDynamic();

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
        const para = "Lorem ipsum";
        cy.get('#section1 #input1').type(para)
                                        .should('have.value', para);
        cy.get('#btn1').trigger('mouseover').click();

        cy.get('#section2 #input2').type(para)
                                        .should('have.value', para);
        cy.get('#btn2').trigger('mouseover').click();

        cy.get('#section3 #input3').type(para)
                                        .should('have.value', para);
        cy.get('#btn3').trigger('mouseover').click();

// ----------------------------------------------------------------------------------------

        // Tabs
        cy.get('form[name="wikipedia"] input[type="text"]').type("Cypress");


// ----------------------------------------------------------------------------------------

        // Footer
        // cy.get('#PageList1 a').contains('Home').click();
        // cy.get('#PageList1 a').contains('Hidden Elements & AJAX').click();
        // cy.url().should('include', '/p/gui-elements-ajax-hidden.html');
    })
})