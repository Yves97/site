
$(document).ready(function () {

    //------------------------>TimeLines Search
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
        }
        if($(window).scrollTop() < 61 ){
            $('.navbar').removeClass('d-none')
        }
        if($(window).scrollTop() > 101){
            // console.log('yes')
            $('.carousel-item').addClass('clP')
        }
        if($(window).scrollTop() < 102){
            $('.carousel-item').removeClass('clP')
        }

        //------------------------>TimeLine
        /* Check the location of each element hidden */
        $('.hidden').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });

    //-----------> isotope js
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

});