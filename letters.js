//letter function to produce either the correctly guessed letter or the incorrectly guessed letter as "_"
 var Letter = function(letter) {
	this.letter = letter;
	this.guessed = false;

	this.letterGuess = function() {
		//checks to see if letter appears in word
		if(this.letter == " ") {

			this.guessed = true;
			//letter will populate if correct
			return ""; 

		} else if(this.guess == false) {
			//if letter guess is incorrect an underscore will appear
			return "_";

		}

};
};




module.exports = letters;

