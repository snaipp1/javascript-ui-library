import $ from './lib/lib';

$('button').on('click', function () {
    $('div').eq(2).toggleClasses('active');
});

$('div').click(function () {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'))
// console.log($('.some').closest('.findme1').addClasses('test'))
// console.log($('.more').eq(0).siblings())

$('.findme').fadeOut(1800);
$('button').fadeIn(1800);

