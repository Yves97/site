$(document).ready(function () {

    $('.fa-arrow-circle-up').hide()
    //--> NAVBAR TOGGLER ARROW
    $('.navbar-toggler').click(function(e){
        console.log($('.fa-arrow-down'))
        $('.fa-arrow-down').toggleClass('tg-rotate')
    })

    //--> WOW JS
    new WOW().init()

    //--> SPLITTING JS
    Splitting();
    // console.log('zêfpl')

    //-->TIMELINE
    /* Check the location of each element */
    $('.content').each( function(i){
        var bottom_of_object= $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).height();
        
        if( bottom_of_object > bottom_of_window){
            $(this).addClass('hidden');
        }
    });
    //--> Listening Scroll Event
    $(window).scroll(function(){
        if($(window).scrollTop() > 60 ){
            // console.log($(window).scrollTop())
            $('.navbar').addClass('d-none')
            $('.carousel-item').addClass('polnone')
        }
        if($(window).scrollTop() < 61 ){
            $('.navbar').removeClass('d-none')
            $('.carousel-item').removeClass('polnone')
        }
        if($(window).scrollTop() == 0){
            $('.fa-arrow-circle-up').css({display:'none'})
        }
        if($(window).scrollTop() != 0){
            $('.fa-arrow-circle-up').css({display:'block'})
        }

        //->TIMELINE

        /* Check the location of each eleme hidden */
        $('.hidden').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });

    //-> ISOTOPE
    var $portfolioItem = $('.portfolio-item');
    // console.log($portfolioItem)
    $portfolioItem.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-menu button').on('click', function(e){
        e.preventDefault();
        var filter = $(this).attr('data-filter');
        $('.portfolio-menu button').removeClass('active');
        $(this).addClass('active');
        $portfolioItem.isotope({filter: filter});
    });

    //->PROGRESS NAVBAR
    var getMax = function() {
        return $(document).height() - $(window).height();
    }
    var getValue = function() {
        return $(window).scrollTop();
    }
    if ('max' in document.createElement('progress')) {
        var progressBar = $('progress#pg');
        // progressBar.attr('class', 'navbarprogress')
        // console.log(progressBar)
        
        progressBar.attr({
            max: getMax(),
        });
        $(document).on('scroll', function() {
            progressBar.attr({
                value: getValue()
            });
        });
        $(window).resize(function() {
            progressBar.attr({
                max: getMax(),
                value: getValue()
            });
        });
        } else {
        var progressBar = $('.progress-bar'),
            max = getMax(),
            value, width;

        var getWidth = function() {

            value = getValue();
            width = (value / max) * 100;
            width = width + '%';
            return width;
        }

        var setWidth = function() {
            progressBar.css({
                width: getWidth()
            });
        }
        $(document).on('scroll', setWidth);
        $(window).on('resize', function() {
            max = getMax();
            setWidth();
        });
    }
    //-->PARALLAX
    $('.image').parallax({imageSrc: '/ressources/images/reservation_1.jpg'})
});


