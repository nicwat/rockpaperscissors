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

