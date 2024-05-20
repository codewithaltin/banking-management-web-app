describe('Pre-Paid Services Payments', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })
    beforeEach(() => {
      cy.visit('http://localhost:3000/paymentTypes/PrePaidServices');
      cy.wait(1000);
    });
  
    it('should allow the user to select an Operator', () => {
      cy.get('[name="operator"]').select('Ipko');
      cy.get('[name="operator"]').should('have.value', 'Ipko');
    });
  
    it('should allow the user to select a Product', () => {
      cy.get('[name="product"]').select('TV');
      cy.get('[name="product"]').should('have.value', 'TV');
    });
  
    it('should require the user to enter the payment amount', () => {
      cy.get('[name="amount"]').type('');
      cy.get('[type="submit"]').click();
      cy.contains('Amount is required').should('be.visible');
    });
  
    it('should allow the user to complete the payment', () => {
      cy.get('[name="operator"]').select('Ipko');
      cy.get('[name="product"]').select('TV');
      cy.get('[name="amount"]').type('50');
      cy.get('[type="submit"]').click();
      cy.contains('Payment successful').should('be.visible');
    });
  });
  