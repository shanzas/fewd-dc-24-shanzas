// jQuery(document).ready(function(){



//     $(".js_fixedcontent").fixedcontent({
//       marginTop: 24,
//       minWidth: 767,
//       zIndex: 500
//     });
// })

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 900);
    }

});

