jQuery("#grayButton") on("click, switchGray");
jQuery("#whiteButton") on("click, switchWhite");


function switchGray() {

jQuery("body").css({
	"background-color" : "gray",
	"color" : "white"
});


function switchWhite() {
jQuery("body").css({
		"background-color" : "white",
		"color" : "black"
	})
}