describe("The new form Page", function() {
  it("successfully loads", function() {
    cy.visit("/forms/new"); // change URL to match your dev URL
  });

  it("generates new form fields when buttons are clicked", function() {
    cy.get("#text-input-btn").click();
  });
});
