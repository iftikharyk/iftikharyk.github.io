$(document).ready(function () {
    console.log("Website Loaded!");

    addToCartQuantity();


    var num = 100; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.header-main').addClass('fixed');
        } else {
            $('.header-main').removeClass('fixed');
        }
    });

    function counter() {
        const counters = document.getElementsByClassName('counter');
        const speed = 200;

        console.log(counters);

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counters.getAttribute('data-target');
                const count = +counters.innerText;

                // Lower inc to slow or higher to slow
                const inc = target / speed;

                console.log("inc", inc);
                console.log("count", count);

                // Check if target is reached
                if (count < target) {
                    // Add inc to count and output in counter
                    counter.innerText = count + inc;

                    // Call function every ms
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            }

            updateCount();
        });
    }

    // counter();

    $('.related-products').owlCarousel({
        loop: false,
        margin: 20,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

    $('.category-cards').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });

    $('.blog-cards').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    });

    $('.client-logos').owlCarousel({
        loop: false,
        margin: 10,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 6,
            }
        }
    });

    $('.home-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots: false,
        nav: false,
        items: 1,
        margin: 0,
        smartSpeed: 450
    });

});


function addToCartQuantity() {
    let quantity = 0;
    $('.quantity-right-plus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();

        // Get the field name
        let quantity = parseInt($('#quantity').val());

        // If is not undefined
        $('#quantity').val(quantity + 1);

        // Increment

    });

    $('.quantity-left-minus').click(function (e) {

        // Stop acting like a button
        e.preventDefault();
        // Get the field name

        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        // Increment
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });
}