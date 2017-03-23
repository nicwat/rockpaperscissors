// user must make a selection
// computer must create random responses
// user should be notified of outcome and given opportunity to play again
// user should be told how they won/lost


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
    } else if(userSelection.toLowerCase() == "exit" || userSelection == 3) {
        exit();
    } else {
      console.log(userMessages.badInput);
      mainMenu();
	}
};


var outcomeMessages = {
	scissorspaper: "Scissors cuts paper!", 
	paperRock: "Paper covers rock!",
	rockLizard: "Rock crushes lizard!",
	lizardSpock: "Lizard poisons Spock!", 
	spockScissors: "Spock smashes scissors!", 
	scissorsLizard: "Scissors decapitates lizard!",
	lizardPaper: "Lizard eats paper!",
	paperSpock: "Paper disproves Spock!",
	spockRock: "Spock vaporizes rock!",
	rockScissors: "Rock crushes scissors!"
};


var initializeGame = function () {};
var viewScore = function () {};



var exit = function() {
  console.log(userMessages.exit);
  sleep(600);
};

run = function() {
    mainMenu();
   
}();

