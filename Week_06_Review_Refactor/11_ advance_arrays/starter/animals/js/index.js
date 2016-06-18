var images= ["images/animal1.jpg", "images/animal2.jpg", "images/animal3.jpg", "images/animal4.jpg", "images/animal5.jpg", "images/animal6.jpg", "images/animal7.jpg"]
var i=0;
var imageSetLength = images.length-1;

function changeImage(index){
	//sets a particular image
	jQuery('#image-to-vote-on').attr('src', images[index]);
}

function nextImage(){
	// Next image in set
	if(i<imageSetLength){
		i++;
	}else{
		i=0;
	}

	changeImage(i);

}

function prevImage(){
	//previous image in set
	if (i == 0)  {
		i = imageSetLength
	} else{
		i--;
	}

	changeImage(i);
}

	jQuery(document).ready(function(){

	jQuery("#buttons-wrapper, #Next").on("click",nextImage);
	jQuery("#buttons-wrapper, #Back").on("click",previousImage);
	});
	
// Bind functions to buttons