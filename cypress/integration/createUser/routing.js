/// <reference types="Cypress" />

import { ROUTES } from '../../../packages/front/app/src/constants'
const PORT = 8080
const DEV_URL = `http://localhost:${PORT}/`
context('Routing', () => {
  it(`should open the Home screen and display ${
    ROUTES.Home.label
  } screen title and a link to the ${ROUTES.Auth.SignUp.label} screen`, () => {
    cy.visit(DEV_URL)
      .get('h1')
      .should('contain', ROUTES.Home.label)

    cy.contains(ROUTES.Auth.SignUp.label)
      .should('exist')
      .click()

    cy.get('h1').should('contain', ROUTES.Auth.SignUp.label)
  })
})
