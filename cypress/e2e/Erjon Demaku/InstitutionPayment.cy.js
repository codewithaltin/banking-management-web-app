describe('Institutional Payments Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })
    beforeEach(() => {
        cy.visit('http://localhost:3000/paymentTypes/InstitutionPayments'); // Run this before each test case
    });

    it('Should allow payment when institution is selected', () => {
        cy.get('select[name=institution]').select('Electricity');
        cy.get('input[name=company]').type('Company X');
        cy.get('input[name=amount]').type('100');
        cy.get('input[name=referenceNumber]').type('123456789');
        cy.get('button[type=submit]').click();
        cy.contains('Pagesa mund të bëhet, Valid');
    });

    it('Should not allow payment when company is not selected', () => {
        cy.get('select[name=institution]').select('Electricity');
        cy.get('input[name=amount]').type('100');
        cy.get('input[name=referenceNumber]').type('123456789');
        cy.get('button[type=submit]').click();
        cy.contains('Pagesa nuk mund të bëhet, Jo valid');
    });

    it('Should allow payment when amount is entered', () => {
        cy.get('select[name=institution]').select('Electricity');
        cy.get('input[name=company]').type('Company X');
        cy.get('input[name=amount]').type('100');
        cy.get('input[name=referenceNumber]').type('123456789');
        cy.get('button[type=submit]').click();
        cy.contains('Pagesa mund të bëhet, Valid');
    });

    it('Should allow payment when reference number is entered', () => {
        cy.get('select[name=institution]').select('Electricity');
        cy.get('input[name=company]').type('Company X');
        cy.get('input[name=amount]').type('100');
        cy.get('input[name=referenceNumber]').type('123456789');
        cy.get('button[type=submit]').click();
        cy.contains('Pagesa mund të bëhet, Valid');
    });
});
