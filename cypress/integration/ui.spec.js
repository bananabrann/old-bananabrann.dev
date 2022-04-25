describe("User Interface", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('/');
  })
  it("navigates via the navbar", () => {
    // Navbar should be visible and have background-color.
    cy.get("[data-cy=navbar]").should("be.visible").should("have.css", "background-color");

    // The 'web services' link works.
    cy.get("[data-cy=web-services]").contains("Service Offerings").click();
    cy.url().should("include", "/#web-services");

    // The 'skills' link works.
    cy.get("[data-cy=skills]").contains("Skills & Expertise").click();
    cy.url().should("include", "/skills");

    // The 'home' link works.
    cy.get("[data-cy=home]").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}`)

    // The 'works' link works.
    cy.get("[data-cy=works]").contains("Works & Projects").click();
    cy.url().should("include", "/works");
  });

  it("navigates via the footer", () => {
    // Footer is visible and have a background-color.
    cy.get("[data-cy=footer]").should("be.visible").should("have.css", "background-color");

    // The 'home' link works.
    cy.get("[data-cy=footer-link-home]").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}`);

    // The 'web services' link works.
    cy.get("[data-cy=footer-link-web-services]").click();
    cy.url().should("include", "/#web-services");

    // The 'skills' link works.
    cy.get("[data-cy=skills]").click();
    cy.url().should("include", "/skills");

    // The 'works' link works.
    cy.get("[data-cy=footer-link-works]").click();
    cy.url().should("include", "/works");

  });
});
