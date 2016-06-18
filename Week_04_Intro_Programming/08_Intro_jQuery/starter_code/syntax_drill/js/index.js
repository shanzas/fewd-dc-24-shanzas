jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple

function changepurple() {

	jQuery("p").css({
		color:"purple"
	});
}
	
function changebluebox() {
	jQuery("p").css({
		"color":"black"
	})

	jQuery("p.hipsterSpeak").css({
		"color":"white",
		"background":"blue"
	});
}
	
function solidBorder() {

	jQuery(".boxes").css({
		"border-bottom":"6px solid black"
	})
}

	jQuery(".boxes").on("click", solidBorder);
	jQuery("#blueBox").on("click", changebluebox);
	jQuery("#purpleBox").on("click", changepurple); 

function red(){

		jQuery("li").toggleClass("redForm");

	}

	jQuery("#redBox").on("click", red);

    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black


    // When the red box is clicked set the list items toggle red background and white text on and off

    

    // When any of the boxes are clicked, add a 6px solid black bottom border

/*    .toogleClass(".boxes");
    .on("click",function(){});
    .css("propertyName","propertyVale"); */



});
