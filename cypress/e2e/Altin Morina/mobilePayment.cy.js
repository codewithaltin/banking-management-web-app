describe('Mobile Payments', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })
    beforeEach(() => {
      cy.visit('http://localhost:3000/paymentTypes/MobilePayments');
    });
  
    it('should not process payment if service provider is not selected', () => {
      cy.get('select[name="numberCode"]').select('48');
      cy.get('input[name="phoneNumber"]').type('049123456');
      cy.get('input[name="amount"]').type('10');
      cy.get('input[type="submit"]').click();
      cy.get('.error').should('contain', 'Please select a service provider');
    });
  
    it('should process payment if all required fields are provided', () => {
      cy.get('select[name="serviceProvider"]').select('Ipko');
      cy.get('select[name="numberCode"]').select('48');
      cy.get('input[name="phoneNumber"]').type('049123456');
      cy.get('input[name="amount"]').type('10');
      cy.get('input[type="submit"]').click();
      cy.get('.success').should('contain', 'Payment processed successfully');
    });
  
    // Add other test cases for different scenarios
  
    afterEach(() => {
      cy.reload();
    });
  });
  