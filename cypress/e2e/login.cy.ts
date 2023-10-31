describe('Login Page', () => {
  it('Login', () => {
    cy.visit('/login')
    cy.get('input[type="email"]').type("doan@gmail.com")
    cy.get('input[type="password"]').type("123456789")
    cy.get('button').click()
  })
})