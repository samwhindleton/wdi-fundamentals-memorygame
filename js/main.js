// Create an array to store all cards
var cards = ["queen", "queen", "king", "king"];

// Create an array to store the cards in play
var cardsInPlay = [];

// Create a function to check for a match
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

// Create a function to represent a user flipping a card
var flipCard = function (cardId) {
  // Display the card the user just flipped in the console.
  console.log("User flipped " + cards[cardId]);
  
  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId]);
  
  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
  }
};

// For now, we are manually calling the flipCard function
// to represent a user's play
// Call the flipCard function, passing in an index as the argument
flipCard(0);
// Call the flipCard function, passing in an index as the argument
flipCard(2);
