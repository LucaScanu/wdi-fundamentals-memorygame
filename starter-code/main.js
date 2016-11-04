console.log("JS file is connected to HTML! Woo!")

/* created cards for the memory game */

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/* Game logic */

/* if (cardTwo === cardFour) {
	alert("You have found a match!");
} else {
	alert("Sorry, try again!");
}
document.createElement('div'); */

//creating cards with JavaScript

var createCards = function() {

var mainBoard = document.getElementById('game-board');

for (var i = 0; i < 4; i++) {
	var playingCards = document.createElement('div'); //created a new div
	playingCards.className = 'card'; //given a class to the new div

	mainBoard.appendChild(playingCards); //added new div to game board

}
};

createCards(); //calling the function

