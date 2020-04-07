$(document).ready(function () {

    $('.fa-arrow-circle-up').hide()
    //--> NAVBAR TOGGLER ARROW-DOWN
    $('.navbar-toggler').click(function(e){
        $('.fa-arrow-down').toggleClass('tg-rotate')
    })

    //--> TYPED
    var anotherString = '<span class="span-bg"> MON SITE CV </span>'
    let typed = new Typed('.type',{
        strings: 
        ['BIENVENU(E) SUR' + ' ' + anotherString],
        typeSpeed:100,
        backSpeed:200,
        smartBackspace: true,
        loop:true,
        shuffle: true,
        showCursor: false,
        });

    //--> WOW JS
    new WOW().init()

    //--> SPLITTING JS
    Splitting();

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
            $('.navbar').addClass('d-none')
        }
        if($(window).scrollTop() < 61 ){
            $('.navbar').removeClass('d-none')
        }
        if($(window).scrollTop() == 0){
            $('.fa-arrow-circle-o-up').css({display:'none'})
        }
        if($(window).scrollTop() != 0){
            $('.fa-arrow-circle-o-up').css({display:'block'})
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
});


