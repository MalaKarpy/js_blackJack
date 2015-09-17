

 var drawCards = function(numberCards) {
   //array of cards goes here
   var userCards = new Array();
   for(var i = 0; i < numberCards; i++){
     var deck = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
     var randomNum = Math.floor(Math.random() * 12);
     userCards.push(deck[randomNum]);
   }
   return userCards;

};

var drawSingleCard = function(numberCards) {
  //array of cards goes here
  var userCard;
    var deck = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var randomNum = Math.floor(Math.random() * 12);
  //  userCards.push(deck[randomNum]);
  return userCard;

};

var getScore = function(deckArray){
  var score = 0;
  var numAces = 0;

  for (var i = 0; i < deckArray.length; i++){
    if(deckArray[i] === "A"){
        numAces++;
    }
    else if(deckArray[i] === "2"){
      score += 2;
    }
    else if(deckArray[i] === "3"){
      score += 3;
    }
    else if(deckArray[i] === "4"){
      score += 4;
    }
    else if(deckArray[i] === "5"){
      score += 5;
    }
    else if(deckArray[i] === "6"){
      score += 6;
    }
    else if(deckArray[i] === "7"){
      score += 7;
    }
    else if(deckArray[i] === "8"){
      score += 8;
    }
    else if(deckArray[i] === "9"){
      score += 9;
    }
    else if((deckArray[i] === "10") || (deckArray[i] === "J") || (deckArray[i] === "K") || (deckArray[i] === "Q")){
      score += 10;
    }

  }//end of for loop
  //if (number aces - 1) + score + 11 <= 21, go  ahead and amke 1 ace
  // worth 11 and the others worth 1
  //but if they go over that, then make them all worth 1

  if((score + (numAces - 1) + 11) <= 21){
    for(i = 0; i < (numAces - 1); i++){
      score += 1;
    }
    score += 11;
  }
  else{
    for(i = 0; i < (numAces); i++){
      score += 1;
    }
  }
  return score;
};

var didTheyBust = function(score){
  if(score > 21){
    return true;
  }
  if(score <= 21){
    return false;
  }

}

var whoWon = function(playerScore, dealerScore){
  if(didTheyBust(playerScore) === false && playerScore > dealerScore){
    return "Player wins!";
  }
  //add code for when player gets a "blackjack"

  if(playerScore === dealerScore){
    return "It's a push!"
  }

  if(didTheyBust(playerScore) === true){
    return "Dealer wins!";
  }

  if(didTheyBust(dealerScore) === true){
    return "Player wins!";
  }

  if(playerScore > dealerScore){
    return "Player wins!";
  }
  if(dealerScore > playerScore){
    return "Dealer wins!"
  }

};

var doesDealerHit = function(dealerDeck){
  var dealerScore = getScore(dealerDeck);
  if(dealerScore >= 17){
    return false;
  }
  else if(dealerScore < 17){
    return true;
  }
};

$(document).ready(function() {
  $("form#get-cards").submit(function(event) {
    var playerCards = drawCards(2);
    var dealerCards = drawCards(2);
    var playerScore;
    var dealerScore;
    var thisArray;
    $(".playerDeck").text(playerCards);
    $('#cardDisplay').show();
    event.preventDefault();

      $("form#hit").submit(function(event) {


      //  playerCards.push(drawCards(1));
      thisArray = drawCards(1);
      playerCards.push(thisArray[0]);


        if(doesDealerHit(dealerCards) === true){
          thisArray = drawCards(1);

          dealerCards.push(thisArray[0]);
        }

        if(doesDealerHit(dealerCards) === false){
          debugger;
          playerScore = getScore(playerCards);
          dealerScore = getScore(dealerCards);
          var winner = whoWon(playerScore, dealerScore);
          $(".winner").text(winner);
          $('#game-over').show();
        }
        playerScore = getScore(playerCards);
        dealerScore = getScore(dealerCards);
        $(".playerDeck").text(playerCards);
        $(".dealerDeck").text(dealerCards);
        $(".playerScore").text(playerScore);
        $(".dealerScore").text(dealerScore);
        $('#cardDisplay').show();

        event.preventDefault();
      });

      $("form#stay").submit(function(event) {
        if(doesDealerHit(dealerCards) === true){
          thisArray = drawCards(1);
          dealerCards.push(thisArray[0]);
        }
        if(doesDealerHit(dealerCards) === false){
          debugger;
          playerScore = getScore(playerCards);
          dealerScore = getScore(dealerCards);
          var winner = whoWon(playerScore, dealerScore);
          $(".winner").text(winner);
          $('#game-over').show();
        }

        playerScore = getScore(playerCards);
        dealerScore = getScore(dealerCards);
        $(".playerDeck").text(playerCards);
        $(".dealerDeck").text(dealerCards);
        $(".playerScore").text(playerScore);
        $(".dealerScore").text(dealerScore);
        $('#cardDisplay').show();
        event.preventDefault();
      });
  });

});
