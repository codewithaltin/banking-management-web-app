describe('User authentication', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth/login')
  })

  it('should allow login with correct credentials', () => {
    cy.get('input[name="email"]').type('demakuerjon@gmail.com')
    cy.get('input[name="password"]').type('12345')
    cy.get('input[type="submit"]').click()
    cy.url().should('not.include', '/auth/login')
  })

  it('should not allow login with incorrect email', () => {
    cy.get('input[name="email"]').type('incorrect@email.com')
    cy.get('input[name="password"]').type('correctpassword')
    cy.get('input[type="submit"]').click()
    cy.url().should('include', '/auth/login')
  })

  it('should not allow login with incorrect password', () => {
    cy.get('input[name="email"]').type('correct@email.com')
    cy.get('input[name="password"]').type('incorrectpassword')
    cy.get('input[type="submit"]').click()
    cy.url().should('include', '/auth/login')
  })

  it('should not allow login with both incorrect email and password', () => {
    cy.get('input[name="email"]').type('incorrect@email.com')
    cy.get('input[name="password"]').type('incorrectpassword')
    cy.get('input[type="submit"]').click()
    cy.url().should('include', '/auth/login')
  })
})

