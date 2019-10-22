describe('Check a couple of mousedown events', () => {
    it('Works with a couple of clicks, a mousedown', () => {
        cy.visit('http://localhost:3000/example');
        for (let i = 0; i < 3; i++) {
            cy.get('[data-cy=button]').click();
            cy.wait(10);
            cy.get('[data-cy=button]').trigger('mousedown');
            cy.wait(500);
            cy.get('[data-cy=button]').trigger('mouseleave');
            cy.get('[data-cy=button]').trigger('mousedown');
            cy.wait(1000);
            cy.get('[data-cy=button]').trigger('mouseleave');
            cy.get('[data-cy=button]').trigger('mousedown');
            cy.wait(2000);
            cy.get('[data-cy=button]').trigger('mouseleave');
        }
        for (let i = 0; i < 3; i++) {
            cy.get('[data-cy=div]').click();
            cy.wait(10);
            cy.get('[data-cy=div]').trigger('mousedown');
            cy.wait(500);
            cy.get('[data-cy=div]').trigger('mouseleave');
            cy.get('[data-cy=div]').trigger('mousedown');
            cy.wait(1000);
            cy.get('[data-cy=div]').trigger('mouseleave');
            cy.get('[data-cy=div]').trigger('mousedown');
            cy.wait(2000);
            cy.get('[data-cy=div]').trigger('mouseleave');
        }
    });
});
