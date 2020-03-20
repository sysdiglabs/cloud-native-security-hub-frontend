describe('Sitemap', function () {
  it('generates properly', function () {
    cy.request('/sitemap.xml').its('body')
      .should('include', `<url><loc>${Cypress.env('BASE_URL')}/</loc></url>`)
      .and('include', `<url><loc>${Cypress.env('BASE_URL')}/apps/aws-fargate</loc></url>`)
      .and('include', `<url><loc>${Cypress.env('BASE_URL')}/apps/aws-fargate/1.0.1</loc></url>`)
  })
})
