
$(document).ready(function () {
        /*<-scorll navbar js->*/
    $(window).scroll(function(){
        // console.log('yes')
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
    })

    //***********isotope js
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