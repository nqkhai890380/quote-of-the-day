describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io')
    })
})

describe("quote of the day spec", () => {
    it("display a quote", () => {
        cy.visit("http://localhost:3000");
        cy.contains("Any fool can write code that a computer can understand. Good programmers write code that humans can understand.");
        cy.contains("Martin Fowler");
    });
    it("click next button", () => {
        cy.visit("http://localhost:3000");
        cy.contains("button", "Next").click();
        cy.contains("Truth can only be found in one place: the code.");
        cy.contains("Robert C. Martin");
    });
})