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
//cypress/support/commands.js
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

import { expect } from 'chai';
import 'cypress-file-upload';

// Static web table
Cypress.Commands.add('verifyTableCells', (bookList) => {

        bookList.forEach(book => {
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

