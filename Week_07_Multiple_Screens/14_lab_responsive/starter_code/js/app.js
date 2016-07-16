jQuery("#menuTrigger").on("click", hideMenu);

function hideMenu() {
event.preventDefault();

jQuery(".navigation").slideToggle();

}

