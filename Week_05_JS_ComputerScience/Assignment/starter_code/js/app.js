jQuery(document).ready(function (){
	jQuery('#submit-btn').click(function(){
	event.preventDefault();

	var city = jQuery('#city-type').val();
	jQuery('#city-type').val('');
	city = city.toLowerCase().trim();

	if(city == 'new york city' || 'nyc') {
		jQuery('body').attr('class','nyc');
	}

	else if (city == 'sydney' || city == 'syd') {
		jQuery('body').attr('class', 'sydney');
	}

	else if (city == 'austin' || city == 'atx') {
		jQuery('body').attr('class','austin');
	}

	else if (city == 'sf' || city == 'san fransisco') {
		jQuery('body').attr('class','sf');
	}
	else if (city == 'los angeles' || city == 'la') {
		Jquery('body').attr('class','la');
	}
	});
});


