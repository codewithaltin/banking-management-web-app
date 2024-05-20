describe('Loan Application Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })
    beforeEach(() => {
        cy.visit('http://localhost:3000/loan-application'); 
    });

    it('Should not allow application when user is not registered', () => {
        cy.get('input[name=fullName]').type('Test User');
        cy.get('input[name=phoneNumber]').type('123456789');
        cy.get('input[name=address]').type('123 Test St');
        cy.get('input[name=loanAmount]').type('10000');
        cy.get('input[name=monthlyIncome]').type('500');
        cy.get('textarea[name=purpouse]').type('Test purpose');
        cy.get('button[type=submit]').click();
        cy.contains('Aplikimi për kredi nuk mund të bëhet - Jovalide');
    });

    it('Should allow application when user has all necessary information', () => {
        
        cy.contains('Aplikimi për kredi mund të bëhet - Valide');
    });

    it('Should allow application when user completes the loan application form', () => {
        cy.get('input[name=fullName]').type('Test User');
        cy.get('input[name=phoneNumber]').type('123456789');
        cy.get('input[name=address]').type('123 Test St');
        cy.get('input[name=loanAmount]').type('10000');
        cy.get('input[name=monthlyIncome]').type('500');
        cy.get('textarea[name=purpouse]').type('Test purpose');
        cy.get('button[type=submit]').click();
        cy.contains('Aplikimi për kredi mund të bëhet - Valide');
    });

    it('Should not allow application when user does not submit the form', () => {
        cy.get('input[name=fullName]').type('Test User');
        cy.get('input[name=phoneNumber]').type('123456789');
        cy.get('input[name=address]').type('123 Test St');
        cy.get('input[name=loanAmount]').type('10000');
        cy.get('input[name=monthlyIncome]').type('500');
        cy.get('textarea[name=purpouse]').type('Test purpose');
        cy.contains('Aplikimi për kredi nuk mund të bëhet - Jovalide');
    });
});
