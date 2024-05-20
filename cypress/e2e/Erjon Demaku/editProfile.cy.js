describe('Profile Data Change Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/login')
        cy.get('input[name="email"]').type('demakuerjon@gmail.com')
        cy.get('input[name="password"]').type('12345')
        cy.get('input[type="submit"]').click()
        cy.url().should('not.include', '/auth/login')
      })

    beforeEach(() => {
        cy.visit('http://localhost:3000/auth/profile');
    });

    it('Should allow changing profile name', () => {
        cy.get('input[name=firstName]').clear().type('NewFirstName');
        cy.get('input[name=lastName]').clear().type('NewLastName');
        cy.get('button[type=submit]').click();
        cy.contains('Ndryshimi profilit mund të bëhet, Valid');
    });

    it('Should allow changing profile email', () => {
        cy.get('input[name=email]').clear().type('');
        cy.get('input[name=email]').clear().type('newemail@example.com');
        cy.get('button[type=submit]').click();
        cy.contains('Ndryshimi profilit mund të bëhet, Valid');
    });

    it('Should not allow changing profile phone number', () => {
        cy.get('input[name=phoneNumber]').clear();
        cy.get('button[type=submit]').click();
        cy.contains('Ndryshimi profilit nuk mund të bëhet, Jo valid');
    });

    it('Should not allow changing profile city without selection', () => {
        cy.get('select[name=city]').select('');
        cy.get('button[type=submit]').click();
        cy.contains('Ndryshimi profilit nuk mund të bëhet, Jo valid');
    });

    it('Should not allow changing profile account number', () => {
        cy.get('input[name=accountNumber]').clear();
        cy.get('button[type=submit]').click();
        cy.contains('Ndryshimi profilit nuk mund të bëhet, Jo valid');
    });
});

