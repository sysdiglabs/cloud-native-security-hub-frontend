describe('Home', function () {
  it('links each app', function () {
    cy.visit('/')

    cy.get('.app').contains('AWS').click()

    cy.get('h1').should('contain', 'AWS')
  })

  it('allows to search', function () {
    cy.visit('/')

    cy.get('#inputSearch').type('aws')
    cy.get('.resultList').should('contain', 'AWS')

    cy.get('.resultList .result').contains('AWS').click()
    cy.get('h1').should('contain', 'AWS')
  })

  it('allows to filter', function () {
    cy.visit('/')

    cy.get('.app').should('contain', 'AWS').and('contain', 'analytics')
    cy.get('.filter').contains('aws').click()

    cy.get('.app').should('contain', 'AWS')
  })
})
