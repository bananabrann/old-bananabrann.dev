describe("UI Tests", () => {
  it("Check navbar", () => {
    cy.visit("https://bananabrann-website-git-dev-bananabrann.vercel.app/");

    cy.get(".Navbar").should("be.visible").should("have.css", "background-color");

    cy.get('.Navbar').contains("Service Offerings").click();
    cy.url().should("include", "/#web-services");

    cy.get('.Navbar').contains("Skills & Expertise").click();
    cy.url().should("include", "/skills");

    cy.get('.Navbar').contains("Works & Projects").click();
    cy.url().should("include", "/works");
  })
})