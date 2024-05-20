describe('Payment System Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })

    beforeEach(() => {
        cy.visit('http://localhost:3000/paymentTypes/InstitutionPayments'); 
    });

    it('Should not accept 0 monetary units', () => {
        cy.get('select[name=institution]').select('Electricity');
        cy.get('input[name=company]').type('Test Company');
        cy.get('input[name=referenceNumber]').type('123456');
        cy.get('input[name=amount]').type('0');
        cy.get('input[type=submit]').click();
        cy.contains('Sistemi nuk duhet ta pranojë, Jo valid');
    });

    it('Should accept 2000 monetary units', () => {
        cy.get('select[name=institution]').select('Electricity');
        cy.get('input[name=company]').type('Test Company');
        cy.get('input[name=referenceNumber]').type('123456');
        cy.get('input[name=amount]').type('2000');
        cy.get('input[type=submit]').click();
        cy.contains('Sistemi duhet ta pranojë, Valid');
    });

    it('Should not accept 8000 monetary units', () => {
        cy.get('select[name=institution]').select('Electricity');
        cy.get('input[name=company]').type('Test Company');
        cy.get('input[name=referenceNumber]').type('123456');
        cy.get('input[name=amount]').type('8000');
        cy.get('input[type=submit]').click();
        cy.contains('Sistemi nuk duhet ta pranojë, Jo valid');
    });
});
