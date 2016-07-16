jQuery(document).ready(function (){

	jQuery('.readmore').click(function (event){
		event.preventDefault();
		jQuery('#show-this-on-click').slideDown();
		jQuery('.readmore').hide();
		jQuery('.readless').show();
		
});

jQuery('.readless').click(function (event){
		event.preventDefault();
		jQuery('#show-this-on-click').slideUp();
		jQuery('.readless').hide();
		jQuery('.readmore').show();
});

});