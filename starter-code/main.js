console.log("JS file is connected to HTML! Woo!")

/*  cards available for the memory game */
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


//creating board and individual cards with JavaScript

var createCards = function () {

var board = document.getElementById('game-board');

for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div'); //created a new div for each card
		cardElement.className = 'card'; //given a class to each card's div
			board.appendChild(cardElement); //added new div to game board
			 cardElement.setAttribute('data-card', cards[i]);
			 	cardElement.addEventListener('click', isTwoCards); //calling the function isTwoCards after a click
}
}

var isTwoCards = function() {  
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === "king") {  //This if statement will show which 														
		this.innerHTML = '<img src="img/kingofclubs.png">'; //card we clicked.
	} else {
		this.innerHTML = '<img src="img/queenofclubs.png">';
	}
 	if (cardsInPlay.length === 2) {
 	isMatch(cardsInPlay); //calling function isMatch
 	cardsInPlay = [];
	}
 };


 /* Game logic */

var isMatch = function(cardsInPlay) { 

	setTimeout(function() {		//This function will delayed the alert message. Reference: stackoverflow.
if (cardsInPlay[0] === cardsInPlay[1]) {
	 alert("You have found a match!");

} else {
	alert("Sorry, try again!");
}
}, 200);
};

createCards(); //calling the function to create the game board and its cards


