// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    //cy.contains('h1', 'You did it!')
    cy.get('#AccountManagement').click()
    cy.get('#EmailText').type('email2')
    cy.get('#PasswordText').type('password')
    cy.get('#LoginButton').click()
    cy.get('#LoginLabel').contains('email2')
  })
})
