describe('Donation Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Run this before each test case
    });

    it('Should not allow donation when amount is 0', () => {
        cy.get('input[name=fullName]').type('Test User');
        cy.get('input[name=phoneNumber]').type('123456789');
        cy.get('input[name=address]').type('123 Test St');
        cy.get('input[name=donationAmount]').type('0');
        cy.get('input[name=cardInformation]').type('1214160204060810');
        cy.get('textarea[name=comment]').type('Test comment');
        cy.get('button[type=submit]').click();
        cy.contains('Donacioni nuk mund të bëhet- jovalide');
    });

    it('Should allow donation when amount is between 1 and 10,000', () => {
        cy.get('input[name=fullName]').type('Test User');
        cy.get('input[name=phoneNumber]').type('123456789');
        cy.get('input[name=address]').type('123 Test St');
        cy.get('input[name=donationAmount]').type('8000');
        cy.get('input[name=cardInformation]').type('1214160204060810');
        cy.get('textarea[name=comment]').type('Test comment');
        cy.get('button[type=submit]').click();
        cy.contains('Donacioni bëhet- valide');
    });

    it('Should not allow donation when amount is above 10,000', () => {
        cy.get('input[name=fullName]').type('Test User');
        cy.get('input[name=phoneNumber]').type('123456789');
        cy.get('input[name=address]').type('123 Test St');
        cy.get('input[name=donationAmount]').type('11000');
        cy.get('input[name=cardInformation]').type('1214160204060810');
        cy.get('textarea[name=comment]').type('Test comment');
        cy.get('button[type=submit]').click();
        cy.contains('Donacioni nuk mund të bëhet- jovalide');
    });
});
