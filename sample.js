//initialization
function Snitch(){
	this.numCaught = 0;
}

var mySnitch = document.getElementById('snitch');
var s = new Snitch();
addBalls(s);  //allow the player to have possession of the ball as well to determine winning in later levels

//getters
function getNumCaught(){
	return s.numCaught;
}
//movement
function start(){
	s.startMove();
}

Snitch.prototype.startMove = function(){
	this.numCaught++;
	increasePoints();							//players points should be increased when catch snitch
	mySnitch.style.left = getRandomInt(600) + "px";
	mySnitch.style.top =  getRandomInt(500) + "px";
}