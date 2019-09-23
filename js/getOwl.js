$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.wine-slide .custom-nav'
    });
});