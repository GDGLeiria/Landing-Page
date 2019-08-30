(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function scrollEvents() {

    var speed = 600;
    $('html,body').animate({
        scrollTop: $("#events").offset().top-50
    }, speed);
}

function scrollAbout() {

    var speed = 600;
    $('html,body').animate({
        scrollTop: $("#about").offset().top-50
    }, speed);
}
function scrollSocial() {

    var speed = 600;
    $('html,body').animate({
        scrollTop: $("#social").offset().top-50
    }, speed);
}
