describe('Rapidly click the buttons to check if we can break the span adding and removing', () => {
    it('Can be clicked alot', () => {
        cy.visit('http://localhost:3000/example');
        for (let i = 0; i < 500; i++) {
            cy.get('[data-cy=button]').click();
            cy.wait(5);
            cy.get('[data-cy=div]').click();
            cy.wait(5);
        }
    });
});
