describe('Savings Goal Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })
    beforeEach(() => {
        cy.visit('http://localhost:3000/SavingGoal'); 
    });

    it('Should not allow goal with less than 1 year', () => {
        cy.get('select[name=savingReason]').select('Vacation');
        cy.get('input[name=amount]').type('500');
        cy.get('input[name=date]').type('2023-05-21');
        cy.get('input[name=goalName]').type('Vacation Goal');
        cy.get('textarea[name=goalDescription]').type('Save for a vacation');
        cy.get('input[type=submit]').click();
        cy.contains('Qëllimi nuk mund të realizohet, jovalide');
    });

    it('Should allow goal for 1 year', () => {
        cy.get('select[name=savingReason]').select('Vacation');
        cy.get('input[name=amount]').type('1000');
        cy.get('input[name=date]').type('2025-05-21');
        cy.get('input[name=goalName]').type('Vacation Goal');
        cy.get('textarea[name=goalDescription]').type('Save for a vacation');
        cy.get('input[type=submit]').click();
        cy.contains('Qëllimi mund të realizohet, valide');
    });

    it('Should allow goal for 2-10 years', () => {
        cy.get('select[name=savingReason]').select('Vacation');
        cy.get('input[name=amount]').type('2000');
        cy.get('input[name=date]').type('2034-05-21');
        cy.get('input[name=goalName]').type('Vacation Goal');
        cy.get('textarea[name=goalDescription]').type('Save for a vacation');
        cy.get('input[type=submit]').click();
        cy.contains('Qëllimi mund të realizohet, valide');
    });

    it('Should allow goal for 10-20 years', () => {
        cy.get('select[name=savingReason]').select('Vacation');
        cy.get('input[name=amount]').type('5000');
        cy.get('input[name=date]').type('2044-05-21');
        cy.get('input[name=goalName]').type('Vacation Goal');
        cy.get('textarea[name=goalDescription]').type('Save for a vacation');
        cy.get('input[type=submit]').click();
        cy.contains('Qëllimi mund të realizohet, valide');
    });

    it('Should not allow goal for more than 20 years', () => {
        cy.get('select[name=savingReason]').select('Vacation');
        cy.get('input[name=amount]').type('10000');
        cy.get('input[name=date]').type('2045-05-21');
        cy.get('input[name=goalName]').type('Vacation Goal');
        cy.get('textarea[name=goalDescription]').type('Save for a vacation');
        cy.get('input[type=submit]').click();
        cy.contains('Qëllimi nuk mund të realizohet, jovalide');
    });
});
