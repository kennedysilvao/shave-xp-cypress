describe('app', () => {
  it('deve estar online', () => {
    cy.visit('http://localhost:3000')

    const user = {
        name: 'Kennedy',
        email: 'kennedysilva@gmail.com',
        password:'pwd123'
    }
  })
})