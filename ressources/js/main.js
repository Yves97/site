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