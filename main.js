//link word constructor to main game
var word = require("./word.js");
var prompt = require("prompt");
//inquirer npm package
var inquirer = require("inquirer");

//load game
var startHangman = function() {

  var guessesRemaining = 9;
  var lettersGuessed = [];

};

//ask user if they want to play the game and choose a letter via inquirer
inquirer.prompt([
  	{
  		type: "list",
  		name: "start",
  		message: "Would you like to play 60s Rock Bands Hangman?",
  		choices: ["yes", "no"]
  	},

  	{
   		type: "input",
   		name: "ltr",
   		message: "Please enter a letter from a - z."
   	}
])

	.then(function(inquirerResponse){

		//if user selects "no" to the first question return the following to the command line 
		 if (inquirerResponse.start === "no") {
		 	return("Too bad, maybe next time?!");

		//if the user selects "yes" to the first question return the following to the command line and start game
		 } else { 

		 	return("Good Luck");

      startHangman();
		 }

	});

//select random band to use in the game 
var bands = ["Creedence Clearwater Revival", "Jefferson Airplane", "The Animals", "The Band", "The Doors", "The Rolling Stones"];

//randomly select a band from the array to be the chosen band for a single round of hangman
var getRandomBand = function() {
	return bands[Math.floor(Math.random() * bands.length)];
};

//call function to produce the random band
console.log(getRandomBand());