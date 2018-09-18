//variables for game
var gameStart = false;
var gameOver = false;
var requiredPoints = 10;
var snitchPoints = 10;
window.setTimeout(endGame,100000);

//start the game
function openModal(){
	gameStart = true;
	gameOver = false;
	quaffleStart();
}

//update the score board
function updateBoard(){
	document.getElementById('points').innerHTML = getPoints();
	document.getElementById('snitchCaught').innerHTML = getNumCaught();
}

//called at end of game to determine winning/losing
function endGame(){
	gameOver = true;
	if(getPoints() >= requiredPoints){
		alert("you won");
	}
	else if(getNumCaught() == snitchPoints){
		alert("you won");
	}
	else{
		alert("you lost");
	}	
}


