

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

var getScore = function(deckArray){
  var score = 0;
  for (var i = 0; i < deckArray.length; i++){
    if(deckArray[i] === "A"){
        score += 1;
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

}


$(document).ready(function() {
  $("form#get-cards").submit(function(event) {
    var playerCards = drawCards(2);
    $(".playerDeck").text(playerCards);
    $('#cardDisplay').show();
    event.preventDefault();
    $("form#hit").submit(function(event) {
    //  var newCard = dra
      playerCards.push(drawCards(1));
      $(".playerDeck").text(playerCards);
      $('#cardDisplay').show();
      event.preventDefault();
    });
    $("form#stay").submit(function(event) {
      $(".playerDeck").text(playerCards);
      $('#cardDisplay').show();
      event.preventDefault();
    });
  });

});