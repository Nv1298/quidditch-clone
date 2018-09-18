//initialization
function Player(){	
	this.saved = false;
	this.lost = false;
	this.points = 0;
	this.balls = [];
}

//get html elements to allow player to move
var myPlayer = document.getElementById('head');
var myBack = document.getElementById('back');
var myCape = document.getElementById('cape');
var myStrand1 = document.getElementById('strand1');
var myStrand2 = document.getElementById('strand2');

var p1 = new Player();

//variable to keep track of latest position of the player
var count2 = 0;

//start movements once player hits a key
document.onkeydown = function start(event){
	startMove(event);
}

//move player across the screen
function startMove(event){
	if(event.keyCode == 37){
		count2 += 30;
		if(in_range(count2)){
	    	myPlayer.style.left = count2 + "px";
	    	myBack.style.left = count2  - 10 + "px";
	    	myCape.style.left = count2 - 55 + "px";
	    	myStrand1.style.left = count2 - 2 + "px";
	    	myStrand2.style.left = count2 + 20 + "px";
		}
	}
	else if(event.keyCode == 39){
		count2 -= 30;
		if(in_range(count2)){
			myPlayer.style.left = count2 + "px";
			myBack.style.left = count2 - 10 + "px";
			myCape.style.left = count2 - 55 + "px";
			myStrand1.style.left = count2 - 2 + "px";
	    	myStrand2.style.left = count2 + 20 + "px";
		}
	}
	else{
		alert("invalid");
	}
}

//setters
function addBalls(ball){
	p1.balls.push(ball);
}
function increasePoints(){
	p1.points++;
	updateBoard();
}

//getters
function getPoints(){
	return p1.points;
}
function getX(){
	return myPlayer.style.left;
}
function getY(){
	return myPlayer.style.top;
}

//check that the position the player is trying to move in is within the desired range
function in_range(count){
	return count2 > 0 && count2 < 11360;
}