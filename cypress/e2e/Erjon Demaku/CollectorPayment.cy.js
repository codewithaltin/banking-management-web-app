describe('Collector Payments Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })
    beforeEach(() => {
        cy.visit('http://localhost:3000/paymentTypes/CollectorPayments'); // Run this before each test case
    });

    it('Should allow payment when collector is selected', () => {
        cy.get('select[name=collector]').select('Public Organizations');
        cy.get('input[name=serialNo]').type('123456789');
        cy.get('input[name=uniref]').type('UNIREF123');
        cy.get('input[name=amount]').type('100');
        cy.get('input[name=description]').type('Payment for service');
        cy.get('button[type=submit]').click();
        cy.contains('Pagesa mund të bëhet, Valid');
    });

    it('Should allow payment when serial number is entered', () => {
        cy.get('select[name=collector]').select('Public Organizations');
        cy.get('input[name=serialNo]').type('123456789');
        cy.get('input[name=uniref]').type('UNIREF123');
        cy.get('input[name=amount]').type('100');
        cy.get('input[name=description]').type('Payment for service');
        cy.get('button[type=submit]').click();
        cy.contains('Pagesa mund të bëhet, Valid');
    });

    it('Should not allow payment when amount is not entered', () => {
        cy.get('select[name=collector]').select('Public Organizations');
        cy.get('input[name=serialNo]').type('123456789');
        cy.get('input[name=uniref]').type('UNIREF123');
        cy.get('input[name=description]').type('Payment for service');
        cy.get('button[type=submit]').click();
        cy.contains('Pagesa nuk mund të bëhet, Jo valid');
    });

    it('Should allow payment when description is entered', () => {
        cy.get('select[name=collector]').select('Public Organizations');
        cy.get('input[name=serialNo]').type('123456789');
        cy.get('input[name=uniref]').type('UNIREF123');
        cy.get('input[name=amount]').type('100');
        cy.get('input[name=description]').type('Payment for service');
        cy.get('button[type=submit]').click();
        cy.contains('Pagesa mund të bëhet, Valid');
    });
});
