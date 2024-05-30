// https://on.cypress.io/api

describe('Testing the login functionality with JWT token implementation', () => {
  it('Visits the app and logs in.', () => {
    cy.visit('/')
    //cy.contains('h1', 'You did it!')
    cy.get('#AccountManagement').click()
    cy.get('#EmailText').type('email2')
    cy.get('#PasswordText').type('password')
    cy.get('#ToSButton').click()
    cy.get('#LoginButton').click()
    cy.get('#LoginLabel').contains('email2')
  })
})
