describe('Search functionality', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('admin@futur.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })

    beforeEach(() => {
      cy.visit('http://localhost:3000/admin/userlist');
    });
    afterEach(() => {
        cy.reload();
      });
  
    it('should not display results when user does not search', () => {
      cy.get('.results').should('not.exist');
    });
  
    it('should display results when user enters keywords', () => {
      cy.get('#default-search').type('example@gmail.com');
      cy.get('.results').should('exist');
    });
  
    it('should clear the search value before each test case', () => {
      cy.get('#default-search').type('example@gmail.com');
      cy.get('#default-search').should('have.value', 'example@gmail.com');
    });
  
    it('should not display results when user clears search value', () => {
      cy.get('#default-search').type('example@gmail.com');
      cy.get('#default-search').clear();
      cy.get('.results').should('not.exist');
    });
  
    it('should display results matching the search keywords', () => {
      cy.get('#default-search').type('example@gmail.com');
      cy.get('.result-item').each((result) => {
        cy.wrap(result).should('contain', 'example@gmail.com');
      });
    });
  });
  