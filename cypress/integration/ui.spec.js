describe("UI Tests", () => {
  it("Navbar navigation links", () => {
    cy.visit("/");

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
})