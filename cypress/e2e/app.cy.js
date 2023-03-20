describe('Navigation', () => {
  it('should navigate to the home page', () => {
    cy.visit('/paths/pet');
    cy.get('a').contains('Back').click();
    cy.url().should('include', '/');
    cy.get('title').contains('Swagger Petstore');
  });
  it('should navigate to the pet page', () => {
    cy.visit('/');
    cy.get('a[href="/paths/pet"]').click();
    cy.url().should('include', '/paths/pet');
    cy.get('a').contains('Back');
  });
});
