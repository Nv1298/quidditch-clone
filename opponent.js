var oHead = document.getElementById('ohead');
var oHair = document.getElementById('ohair');
var oBody = document.getElementById('obody');
var oBroom = document.getElementById('obroom');
var oTail = document.getElementById('otail');
var oLeg1 = document.getElementById('oleg1');
var oLeg2 = document.getElementById('oleg2');

function moveOpponent(){
	let reference = parseInt(myQuaffle.style.left.replace(/px/,""));
	oHead.style.left = reference + "px";
	oHair.style.left = reference - 2 + "px";
	oBody.style.left = reference - 2 + "px";
	oBroom.style.left = reference - 5 + "px";
	otail.style.left = reference + 15 + "px";
	oleg1.style.left = reference + 8 + "px";
	oleg2.style.left = reference + "px";
}