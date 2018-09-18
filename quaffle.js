function Quaffle(){
    this.caught = false;
    this.done = false;
}

var myQuaffle = document.getElementById('circle');
var q1 = new Quaffle();
function quaffleStart(){
    addBalls(q1);
    q1.moveDown();
}
//function to randomly generate quaffles and make them move across the page
Quaffle.prototype.moveDown = function(){
    //set initial position of quaffle
    myPlayer.style.top = 551 + "px"
	var pos = 200; 
    var horizontal = 500;
    var count = 0;
    var id = setInterval(frame, 2); 


    function frame() {
    	if(gameOver){      //stop quaffle from moving if game is over
    		clearInterval(id);
    	}
    	else if (pos >= 590) { //if ball has reached the maximum height, send it back to the top
        	var offset = getRandomInt(1000);
        		if(offset >= 500 && offset <= 700){
        			horizontal = offset;
        			pos = 200;
        			myQuaffle.style.left = offset + "px";
        			myQuaffle.style.top = pos;
        			moveOpponent();
        		}
        	count++;
        }
        else {
            pos++;
            myQuaffle.style.top = pos + "px"; 
            count % 2 == 0 ? horizontal++ : horizontal--; 
            myQuaffle.style.left = horizontal + "px";
            	if(isOverlap()){           //determine if ball is in contact with player
            		increasePoints();     //increase points if ball is in contact with player 
            		pos = 200;            //send ball back to the top
            		myQuaffle.style.top = pos;
            		clearInterval(id);
            		q1.moveDown();

            	}
        }
    }
}
//determine if the quaffle position overlaps with the player position
function isOverlap(){   
   return myQuaffle.style.top >= myPlayer.style.top && 
   myQuaffle.style.left >= myPlayer.style.left && 
   myQuaffle.style.left <= myPlayer.style.left + 40 + "px";
}