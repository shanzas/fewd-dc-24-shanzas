// Click on Grey Button
document.getElementById("grayButton").onclick = changeToGray;
	// call changeToGrey
	
// Click on White Button
	// call change ToWhite

function changeToGray(){
 		// Click on Grey Button
		document.body.style.backgroundColor ="gray";
		// Change text color
		document.body.style.color ="white";
		console.log ("I'm gray");
} // end ChangeToGrey()

document.getElementById("whiteButton").onclick = changeToWhite;

function changeToWhite(){
		// Change background color
		document.body.style.backgroundColor = "white";
		// Change text color
		document.body.style.color = "gray";
		console.log("I'm white")
}