describe('Request Money Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })
    beforeEach(() => {
        cy.visit('http://localhost:3000/requestMoney'); 
    });

    it('Should allow request when user is registered', () => {
        cy.get('input[name=payeeEmail]').type('test@example.com');
        cy.get('input[name=amount]').type('100');
        cy.get('input[name=description]').type('Test request');
        cy.get('input[type=submit]').click();
        cy.contains('Kërkesa për para mund të bëhet - Valide');
    });

    it('Should not allow request when there are no other users', () => {
        
        cy.contains('Nuk ka përdorues tjerë në platformë.');
        cy.contains('Kërkesa për para nuk mund të bëhet - Jovalide');
    });

    it('Should allow request when user has sufficient funds', () => {
      
        cy.contains('Përdoruesi ka mjaftueshëm para në llogarinë e tij për të kryer kërkesën.');
        cy.contains('Kërkesa për para mund të bëhet - Valide');
    });

    it('Should not allow request when amount is not specified', () => {
        cy.get('input[name=payeeEmail]').type('test@example.com');
        cy.get('input[name=description]').type('Test request');
        cy.get('input[type=submit]').click();
        cy.contains('Përdoruesi nuk specifikon shumën e parave që dëshiron të kërkojë nga tjerët.');
        cy.contains('Kërkesa për para nuk mund të bëhet - Jovalide');
    });
});
