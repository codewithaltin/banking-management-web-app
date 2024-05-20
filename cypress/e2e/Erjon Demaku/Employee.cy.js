describe('Employee Addition Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('admin@futur.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })
    beforeEach(() => {
        cy.visit('http://localhost:3000/admin/addemployee'); // Run this before each test case
    });

    it('Should allow adding an employee with all required fields filled', () => {
        cy.get('input[name=firstName]').type('John');
        cy.get('input[name=lastName]').type('Doe');
        cy.get('input[name=email]').type('johndoe@example.com');
        cy.get('input[name=phoneNumber]').type('049-123-456');
        cy.get('input[name=address]').type('123 Main St');
        cy.get('select[name=departament]').select('IT');
        cy.get('select[name=jobTitle]').select('Banking IT Manager');
        cy.get('input[name=salary]').type('500');
        cy.get('input[name=startDate]').type('2024-06-01');
        cy.get('input[name=endDate]').type('2024-12-31');
        cy.get('button[type=submit]').click();
        cy.contains('Employee shtohet, Valid');
    });

    it('Should not allow adding an employee without selecting a department', () => {
        cy.get('input[name=firstName]').type('Jane');
        cy.get('input[name=lastName]').type('Smith');
        cy.get('input[name=email]').type('janesmith@example.com');
        cy.get('input[name=phoneNumber]').type('049-654-321');
        cy.get('input[name=address]').type('456 Oak St');
        cy.get('select[name=jobTitle]').select('Banking Customer Service Representative');
        cy.get('input[name=salary]').type('600');
        cy.get('input[name=startDate]').type('2024-06-01');
        cy.get('input[name=endDate]').type('2024-12-31');
        cy.get('button[type=submit]').click();
        cy.contains('Employee nuk shtohet, Jo valid');
    });

    // Add more test cases for other scenarios as needed
});
