
let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 2;
let currentGuess;
let hits = 0;
let guesses = 0;
let isSink = false;

while (isSink == false) {

	currentGuess = prompt("Ready, aim, fire! (enter a number 0-6):", "");

	if (currentGuess < 0 || currentGuess > 6) {
		alert("Please enter a valid set number!");
		 } else {
		 	guesses = guesses + 1;

		 	if (currentGuess == location1 || currentGuess == location2 || currentGuess == location3) {
		 		alert("Hit!");
		 		hits = hits + 1;
		 		if (hits == 3) {
		 			isSink = true;
		 			alert("You sank my battleship!");
		 		}
		 		
		 	} else {
		 		alert("Miss");
		 	}
		}
	}

 let stats = "You took " + guesses + " guesses to sink the battleship," +
 					"which means your shooting accuracy was " + (3/guesses);
 alert(stats);