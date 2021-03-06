var sget = require("sget");

var sleep = function(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
};

var wipeScreen = function () {
  return process.stdout.write('\033c');
};

 var printMenu = function() {
    for (var key in mainMenuPrompts) {
      console.log(mainMenuPrompts[key]);
    }
};

var wins = 0;
var losses = 0;
var ties = 0;


var mainMenuPrompts = { 
                        welcome:            "**************************************************************************\n" + 
                                            "*         Welcome to Rock, Paper, Scissors, Lizard, Spock!!!!            *\n" +
                                            "**************************************************************************\n"  
                                 ,
                                 
                        play: "Enter 'Play' or '1' to play a new round",
                        score: "Enter 'Score' or '2' to see current score ",                    
                        exit: "Enter 'Exit' or '3' to exit the game\n"
                      };


 var userMessages = {
 	handShape: "Enter your choice: Rock, Paper, Scissors, Lizard, Spock",
 	record: "Your current score is:",
	badInput: "Please make a valid selection.",
	exit: "You've logged out of the game. See ya!"
};


var mainMenu = function() {
  wipeScreen();
  sleep(400);
  printMenu();
  sleep(400);
    var userSelection = sget("What would you like to do?").trim();
    
    if(userSelection.toLowerCase() == "play" || userSelection == 1) {
        initializeGame();
    } else if(userSelection.toLowerCase() == "score" || userSelection == 2) {
        viewScore();
        var returnToMenu = sget ("Press any key to return to main menu").trim();
        mainMenu();
    } else if(userSelection.toLowerCase() == "exit" || userSelection == 3) {
        exit();
    } else {
      console.log(userMessages.badInput);
      sleep(2000);
      mainMenu();
	}
};

var outcomeMessages = {
	scissorsPaper: "Scissors cuts paper!", 
	paperRock: "Paper covers rock!",
	rockLizard: "Rock crushes lizard!",
	lizardSpock: "Lizard poisons Spock!", 
	spockScissors: "Spock smashes scissors!", 
	scissorsLizard: "Scissors decapitates lizard!",
	lizardPaper: "Lizard eats paper!",
	paperSpock: "Paper disproves Spock!",
	spockRock: "Spock vaporizes rock!",
	rockScissors: "Rock crushes scissors!",
	tie: "Tie game!",
	win: "You win!",
	lose: "You lose!"
};

var opponentMessages = {
	rock: "Your opponent chooses rock.",
	paper: "Your opponent chooses paper.",
	scissors: "Your opponent chooses scissors.",
	lizard: "Your opponent chooses lizard.",
	spock: "Your opponent chooses Spock."
};

var initializeGame = function () {
	var userHand = sget("Choose a hand to throw (enter name, initial, or number):\n 1. (R)OCK\n 2. (P)APER\n 3. S(C)ISSORS\n 4. (L)IZARD\n 5. SPOC(K)\n\nType (B)ack to return to main menu.\n").trim();
	userHandLC = userHand.toLowerCase();
	if (userHandLC == 1 || userHandLC == "rock" || userHandLC == "r") {
		rockOptions();
	} else if (userHandLC == 2 || userHandLC == "paper" || userHandLC == "p") {
		paperOptions();
	} else if  (userHandLC == 3 || userHandLC == "scissors" || userHandLC == "c"){
		scissorsOptions();
	} else if (userHandLC == 4 || userHandLC == "lizard" || userHandLC == "l") {
		lizardOptions();
	} else if (userHandLC == 5 || userHandLC == "spock" || userHandLC == "k") {
		spockOptions();
	} else if (userHandLC == "back" || userHandLC == "b") {
		mainMenu();
	} else {
		console.log(userMessages.badInput);
		sleep(2000);
		wipeScreen();
		initializeGame();
	}
};

var postGameDisplay = function () {
	sleep(1000);
	viewScore();
	sleep(2000);
	wipeScreen();
	mainMenu();	

};

var rockOptions = function () {
	console.log ("You have chosen rock.");
	var autoHand = Math.floor((Math.random() * 5) + 1);
		if (autoHand == 1) {
			sleep(1000);
			console.log("\n" + opponentMessages.rock);
			sleep(1000);
			console.log("\n" + outcomeMessages.tie);
			ties++;
			postGameDisplay();		
		} else if (autoHand == 2) {
			sleep(1000);
			console.log("\n" + opponentMessages.paper);
			sleep(1000);
			console.log("\n" + outcomeMessages.paperRock);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();			
		} else if (autoHand == 3) {
			sleep(1000);
			console.log("\n" + opponentMessages.scissors);
			sleep(1000);
			console.log("\n" + outcomeMessages.rockScissors);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();		
		} else if (autoHand == 4) {
			sleep(1000);
			console.log("\n" + opponentMessages.lizard);
			sleep(1000);
			console.log("\n" + outcomeMessages.rockLizard);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();	
		} else if (autoHand == 5) {
			sleep(1000);
			console.log("\n" + opponentMessages.spock);
			sleep(1000);
			console.log("\n" + outcomeMessages.spockRock);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();	
		} else {
			console.log(userMessages.badInput);
			initializeGame();
		}
};
var paperOptions = function () {
	console.log ("You have chosen paper.");
	var autoHand = Math.floor((Math.random() * 5) + 1);
		if (autoHand == 1) {
			sleep(1000);
			console.log("\n" + opponentMessages.rock);
			sleep(1000);
			console.log("\n" + outcomeMessages.paperRock);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();			
		} else if (autoHand == 2) {
			sleep(1000);
			console.log("\n" + opponentMessages.paper);
			sleep(1000);
			console.log("\n" + outcomeMessages.tie);
			ties++;
			postGameDisplay();			
		} else if (autoHand == 3) {
			sleep(1000);
			console.log("\n" + opponentMessages.scissors);
			sleep(1000);
			console.log("\n" + outcomeMessages.scissorsPaper);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();		
		} else if (autoHand == 4) {
			sleep(1000);
			console.log("\n" + opponentMessages.lizard);
			sleep(1000);
			console.log("\n" + outcomeMessages.lizardPaper);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();	
		} else if (autoHand == 5) {
			sleep(1000);
			console.log("\n" + opponentMessages.spock);
			sleep(1000);
			console.log("\n" + outcomeMessages.paperSpock);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();	
		} else {
			console.log(userMessages.badInput);
			initializeGame();
		}
};
var scissorsOptions = function () {
	console.log ("You have chosen scissors.");
	var autoHand = Math.floor((Math.random() * 5) + 1);
		if (autoHand == 1) {
			sleep(1000);
			console.log("\n" + opponentMessages.rock);
			sleep(1000);
			console.log("\n" + outcomeMessages.rockScissors);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();			
		} else if (autoHand == 2) {
			sleep(1000);
			console.log("\n" + opponentMessages.paper);
			sleep(1000);
			console.log("\n" + outcomeMessages.scissorsPaper);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();			
		} else if (autoHand == 3) {
			sleep(1000);
			console.log("\n" + opponentMessages.scissors);
			sleep(1000);
			console.log("\n" + outcomeMessages.tie);
			ties++;
			postGameDisplay();		
		} else if (autoHand == 4) {
			sleep(1000);
			console.log("\n" + opponentMessages.lizard);
			sleep(1000);
			console.log("\n" + outcomeMessages.scissorsLizard);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();	
		} else if (autoHand == 5) {
			sleep(1000);
			console.log("\n" + opponentMessages.spock);
			sleep(1000);
			console.log("\n" + outcomeMessages.spockScissors);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();	
		} else {
			console.log(userMessages.badInput);
			initializeGame();
		}
};
var lizardOptions = function () {
	console.log ("You have chosen lizard.");
	var autoHand = Math.floor((Math.random() * 5) + 1);
		if (autoHand == 1) {
			sleep(1000);
			console.log("\n" + opponentMessages.rock);
			sleep(1000);
			console.log("\n" + outcomeMessages.rockLizard);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();			
		} else if (autoHand == 2) {
			sleep(1000);
			console.log("\n" + opponentMessages.paper);
			sleep(1000);
			console.log("\n" + outcomeMessages.lizardPaper);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();			
		} else if (autoHand == 3) {
			sleep(1000);
			console.log("\n" + opponentMessages.scissors);
			sleep(1000);
			console.log("\n" + outcomeMessages.scissorsLizard);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();			
		} else if (autoHand == 4) {
			sleep(1000);
			console.log("\n" + opponentMessages.lizard);
			sleep(1000);
			console.log("\n" + outcomeMessages.tie);
			ties++;
			postGameDisplay();
		} else if (autoHand == 5) {
			sleep(1000);
			console.log("\n" + opponentMessages.spock);
			sleep(1000);
			console.log("\n" + outcomeMessages.lizardSpock);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();	
		} else {
			console.log(userMessages.badInput);
			initializeGame();
		}
};
var spockOptions = function () {
	console.log ("You have chosen Spock.");
	var autoHand = Math.floor((Math.random() * 5) + 1);
		if (autoHand == 1) {
			sleep(1000);
			console.log("\n" + opponentMessages.rock);
			sleep(1000);
			console.log("\n" + outcomeMessages.spockRock);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();				
		} else if (autoHand == 2) {
			sleep(1000);
			console.log("\n" + opponentMessages.paper);
			sleep(1000);
			console.log("\n" + outcomeMessages.paperSpock);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();				
		} else if (autoHand == 3) {
			sleep(1000);
			console.log("\n" + opponentMessages.scissors);
			sleep(1000);
			console.log("\n" + outcomeMessages.spockScissors);
			sleep(1000);
			console.log("\n" + outcomeMessages.win);
			wins++;
			postGameDisplay();			
		} else if (autoHand == 4) {
			sleep(1000);
			console.log("\n" + opponentMessages.lizard);
			sleep(1000);
			console.log("\n" + outcomeMessages.lizardSpock);
			sleep(1000);
			console.log("\n" + outcomeMessages.lose);
			losses++;
			postGameDisplay();	
		} else if (autoHand == 5) {
			sleep(1000);
			console.log("\n" + opponentMessages.spock);
			sleep(1000);
			console.log("\n" + outcomeMessages.tie);
			ties++;
			postGameDisplay();
		} else {
			console.log(userMessages.badInput);
			initializeGame();
		}
};

var viewScore = function () {
	console.log("Current Record: " + wins + "-" + losses + "-" +ties);
};

var exit = function() {
  console.log(userMessages.exit);
  sleep(600);
};

run = function() {
    mainMenu();
   
}();

