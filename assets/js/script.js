$(document).ready(function() {
    $('[data-nav-btn]').on('click', function () {
        $('[data-nav-btn-span-1]').toggleClass('move-right');
        $('[data-nav-btn-span-2]').toggleClass('rotate-right');
        $('[data-nav-btn-span-3]').toggleClass('rotate-left');
        $('[data-nav-btn-span-4]').toggleClass('move-left');
        $('[data-nav]').toggleClass('is-collapsed');
    });

    $(window).on('resize', function () {
        if ($(window).width() > 768) {
            $('nav').removeAttr('style');
        }
    });
 });