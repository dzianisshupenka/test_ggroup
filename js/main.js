{$(document).ready(function(){
    $('.main_carousel').slick({
        arrows: false,
        dots: true
    });

    $('.form_button, .order_button').on('click', function () {
        $('.overlay').fadeIn();
    });

    $('.modal_close').on('click', function () {
        $('.overlay').fadeOut();
    })

    $('ul.calculator_list').on('click', 'li:not(.calc_tab_active)', function() {
        $(this)
            .addClass('calc_tab_active').siblings().removeClass('calc_tab_active')
            .closest('div.container').find('div.item_calculator').removeClass('active')
            .eq($(this).index()).addClass('active');
    });
});}

