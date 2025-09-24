// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-file-upload';

// Static web table
Cypress.Commands.add('verifyTableCells', (books) => {

    books.forEach(book => {
        cy.get('table[name="BookTable"] tbody tr').each(($row) => {
            const bookName = $row.find('td').eq(0).text().trim();

            if (bookName === book.bookName) {

                cy.wrap($row).find('td')
                    .eq(1)
                    .invoke('text')
                    .then(text => text.trim())
                    .should('eq', book.author)
                    .then(text => cy.log(`Checking: ${bookName} | Author: ${text}`));

                cy.wrap($row).find('td')
                    .eq(2)
                    .invoke('text')
                    .then(text => text.trim())
                    .should('eq', book.subject)
                    .then(text => cy.log(`Checking: ${bookName} | Subject: ${text}`));

                cy.wrap($row).find('td')
                    .eq(3)
                    .invoke('text')
                    .then(text => text.trim())
                    .should('eq', book.price)
                    .then(text => cy.log(`Checking: ${bookName} | Price: ${text}`))
            }
        });
    });
});


// Dynamic web table
Cypress.Commands.add('verifyTaskTableDynamic', () => {
    // Map headers to column indexes
    cy.get('#taskTable thead tr th').then(($headers) => {
        const headerIndexes = {};
        $headers.each((index, header) => {
            headerIndexes[header.innerText.trim()] = index;
        });

        // Check each row dynamically
        cy.get('#taskTable tbody tr').each(($row) => {
            const name = $row.find('td').eq(headerIndexes['Name']).text().trim();
            cy.log(`Checking row: ${name}`);

            // Network (Mbps) as number
            cy.wrap($row).find('td').eq(headerIndexes['Network (Mbps)'])
                .invoke('text')
                .then(text => parseFloat(text.replace(' Mbps', '')))
                .should('be.gte', 0);

            // Disk (MB/s) as number
            cy.wrap($row).find('td').eq(headerIndexes['Disk (MB/s)'])
                .invoke('text')
                .then(text => parseFloat(text.replace(' MB/s', '')))
                .should('be.gte', 0);

            // CPU (%) as number
            cy.wrap($row).find('td').eq(headerIndexes['CPU (%)'])
                .invoke('text')
                .then(text => parseFloat(text.replace('%', '')))
                .should('be.lte', 100)      // CPU ≤ 100%
                .and('be.gte', 0);           // CPU ≥ 0

            // Memory (MB) as number
            cy.wrap($row).find('td').eq(headerIndexes['Memory (MB)'])
                .invoke('text')
                .then(text => parseFloat(text.replace(' MB', '')))
                .should('be.gte', 0);
        });
    });
});


// Drag and drop
Cypress.Commands.add('dragAndDrop', (dragElement, dropZone) => {
    const dataTransfer = new DataTransfer();

    cy.get(`#${dragElement}`)
        .trigger('dragstart', { dataTransfer });    // Elements to drag

    cy.get(`#${dropZone}`)
        .trigger('drop', { dataTransfer });   // Drop target

})