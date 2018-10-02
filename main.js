$(document).ready(function () {

    // Add smooth scrolling on all links inside the navbar
    $("#logo, #myNavbar a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 50, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});

// Collapse Navbar
var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
        $("#logo").addClass("navbar-newBrand");
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#logo").removeClass("navbar-newBrand");
        $("#mainNav").removeClass("navbar-shrink");
    }
};


// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);
