
describe('getScore', function() {
  it("is 13 for getScore [A, 2]", function() {
    var deck = ['A', '2'];
    expect(getScore(deck)).to.equal(13);
  });
  it("is 20 for getScore [J, K]", function() {
    var deck = ['J', 'K'];
    expect(getScore(deck)).to.equal(20);
  });

  it("is 20 for getScore [8, 7, 3]", function() {
    var deck = ["8", "7", "3"];
    expect(getScore(deck)).to.equal(18);
  });
  it("is 21 for getScore [A, A, 9]", function() {
    var deck = ["A", "A", "9"];
    expect(getScore(deck)).to.equal(21);
  });
  it("is 12 for getScore [A, A, 10]", function() {
    var deck = ["A", "A", "10"];
    expect(getScore(deck)).to.equal(12);
  });
});


describe('didTheyBust', function() {
  it("is true for didTheyBust 28", function() {
    expect(didTheyBust(28)).to.equal(true);
  });
  it("is false for didTheyBust 20", function() {
    expect(didTheyBust(20)).to.equal(false);
  });
  it("is false for didTheyBust 21", function() {
    expect(didTheyBust(21)).to.equal(false);
  });
});

describe('whoWon', function() {
  it("dealer wins if the player score is equal to dealer score", function() {
    expect(whoWon(20,20)).to.equal("It's a push!");
  });
  it("player score is 28 and dealer score is 20", function() {
    expect(whoWon(28,20)).to.equal("Dealer wins!");
  });
  it("player score is 20 and dealer score is 28", function() {
    expect(whoWon(20,28)).to.equal("Player wins!");
  });
});
