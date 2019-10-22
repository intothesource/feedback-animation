describe('Check if both example elements exist.', () => {
    it('Can confirm existence', () => {
        cy.visit('http://localhost:3000/example');
        cy.get('[data-cy=button]').click();
        cy.get('[data-cy=div]').click();
    });
});
