describe('Money Transfer', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/auth/login')
    cy.get('input[name="email"]').type('demakuerjon@gmail.com')
    cy.get('input[name="password"]').type('12345')
    cy.get('input[type="submit"]').click()
    cy.url().should('not.include', '/auth/login')
  })

  beforeEach(() => {
    cy.visit('http://localhost:3000/transfer')
    
  })

  it('should not allow transfer of 0 monetary units', () => {
    cy.get('input[name="amount"]').type('0')
    cy.get('input[type="submit"]').click()
    cy.url().should('include', '/transfer')
  })

  it('should allow transfer of 1 to 10,000 monetary units', () => {
    cy.get('input[name="amount"]').type('5000')
    cy.get('input[type="submit"]').click()
    cy.url().should('not.include', '/transfer')
  })

  it('should not allow transfer of more than 10,000 monetary units', () => {
    cy.get('input[name="amount"]').type('15000')
    cy.get('input[type="submit"]').click()
    cy.url().should('include', '/transfer')
  })
})
