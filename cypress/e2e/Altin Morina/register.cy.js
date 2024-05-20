describe('User Registration', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/auth/register');
    });
  
    it('should not register user if name is not provided', () => {
      cy.get('input[name="accountNumber"]').type('5534567890123456');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.get('input[name="phoneNumber"]').type('049-588-814');
      cy.get('select[name="city"]').select('Prishtine');
      cy.get('input[type="submit"]').click();
      cy.get('.error').should('contain', 'Name is required');
    });
  
    it('should register user if all required fields are provided', () => {
      cy.get('input[name="firstName"]').type('John');
      cy.get('input[name="lastName"]').type('Doe');
      cy.get('input[name="accountNumber"]').type('5534567890123456');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.get('input[name="phoneNumber"]').type('049-588-814');
      cy.get('select[name="city"]').select('Prishtine');
      cy.get('input[type="submit"]').click();
      cy.get('.success').should('contain', 'User registered successfully');
    });
  
    
  

  });
  