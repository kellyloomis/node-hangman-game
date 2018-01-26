//link letters constructor to word constructor
var letters = require("./letters.js");

//word function
 var Word = function(word) {
	this.word = word;
	this.guessed = false;

	//inserts correctly guessed letters into field
	this.insertLetters = function() {
		//runs loop to determine if letter is included in word
		for(var i =0; i < word.length; i++) {
			//
			var addLetter = new Letter;
			//pushes correct letter into word field
			this.guessed.push();

		};

	};

};

module.exports = word;