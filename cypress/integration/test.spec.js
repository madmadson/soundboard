describe("Load app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("go to home ", () => {
    cy.get('[data-testid="content"]').should("be.visible");
  });
});
