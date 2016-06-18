function selectPet(petType){

    // Get the specific pet data set
    var thispetType  = petData[petType];

    // Set the title
    jQuery(".displayName").text(thispetType.petDisplayName);

    // Empty the specification data
    jQuery(".petsDataSpecs").empty("");

    // Add the space required, size, weight
    jQuery(".petsDataSpecs").append('<dt>Size</dt><dd>'+thispetType["size"]+'<dt>Space Required</dt><dd>'+thispetType["spaceRequired"]+'<dt>Weight</dt><dd>'+thispetType["weight"]);

    // Add logic to add the trainability and lap size images
    if (thispetType.trainability == true) {
        jQuery(".petsDataSpecs").append('<dt>Trainability</dt><dd><img src="img/200px-Gnome-emblem-default.svg.png"></dd>')
    
    }

    else{

        jQuery(".petsDataSpecs").append('<dt>Trainability</dt><dd><img src="img/200px-Gnome-emblem-unreadable.svg.png"></dd>')
    }


    if  (thispetType.fitsOnLap == true) {
        jQuery(".petsDataSpecs").append('<dt>fits On Lap</dt><dd><img src="img/200px-Gnome-emblem-default.svg.png"></dd>')
    }

    // Add the foods (may require loop)



    // Update the images

        // Set the main image


        // Empty the thumbnails

        // Add the thumbnails



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for

    // Insert the ideal for


    // Empty the Adoption Groups

    // Add the adoption groups


}// end selectPet



jQuery(document).ready(function(){
selectPet("dog");

jQuery("#petType").on("")

    // Initial run

    //Update whenever a new value is picked

});


