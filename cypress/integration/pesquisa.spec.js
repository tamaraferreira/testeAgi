/// <reference types="cypress" />

describe('Efetuar pesquisas no blog da Agi', () => {
    it('Efetuar pesquisa com termo existente no blog', () => {
        cy.visit('https://blogdoagi.com.br/')
        cy.get('#overlay-open').click()
        cy.get('.mobile-search > .search-form > label > .search-field').type('Finança{enter}')
        cy.get('.archive-title > span').should('have.text', 'Finança')
    })

    it('Efetuar pesquisa com termo inexistente no blog', () => {
        cy.visit('https://blogdoagi.com.br/')
        cy.get('#overlay-open').click()
        cy.get('.mobile-search > .search-form > label > .search-field').type('Pokémon{enter}')
        cy.get('.entry-title').should('have.text', 'Nenhum resultado')
    })
})