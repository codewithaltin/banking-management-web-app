describe('Adding users with specific roles', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth/login')
    // Login with admin credentials
    cy.get('input[name="email"]').type('admin@futur.com')
    cy.get('input[name="password"]').type('12345')
    cy.get('input[type="submit"]').click()
    cy.url().should('not.include', '/auth/login') 
  })

  it('should allow adding a user with the Data Manager role', () => {
    cy.visit('http://localhost:3000/admin/roles')

    
    cy.get('input[name="firstName"]').type('John')
    cy.get('input[name="lastName"]').type('Doe')
    cy.get('input[name="email"]').type('altin.doe@example.com')
    cy.get('input[name="phoneNumber"]').type('049-588-814')
    cy.get('input[name="password"]').type('password')
    cy.get('select[name="city"]').select('Prishtine')
    cy.get('select[name="role"]').select('DATA_MANAGER')

    // Submit the form
    cy.get('input[type="submit"]').click()

    // Check if the user was successfully added
    cy.contains('User added successfully').should('be.visible')
  })
})
