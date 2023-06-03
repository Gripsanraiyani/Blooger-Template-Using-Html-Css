const responsive = {
    0: {
        items:1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collpase');

    // Click  event on toggale mrnu

    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // Owl-crousel for Blog

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // Click to scroll up
    $('.moov-up span').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })

    // ASO Instance

    AOS.init(); 
})