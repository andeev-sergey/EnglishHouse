$(function() {
    // Поиск
    $('header nav .center-links img.search').click(function() {
        $('.center-links input').toggleClass('search-active');
        $('.center-links input').focusout(function() {
            $('.center-links input').removeClass('search-active');
        });
    });
    // скрол со слайдера
    $('.main-image .main-image-text').click(function() {
        $('html, body').animate({ scrollTop: $('section').height() }, 600);
    });
    // меню мобильное
    $(".menu").on('click', function() {
        $(this).find(".hambergerIcon").toggleClass("open");
        $('.nav-mobile').toggleClass('active');
        $('body').toggleClass('freeze');
    });
});


$('.switch_lang .lang').click(function() {
    $(this).addClass('active');
    let lang_id = this.id;
    if (lang_id == "eng") {
        window.location.href = '/' + lang_id +

    } else if (lang_id == "ru") {
        window.location.href = window.location.href.replace('eng/', '');
    }
    $(this).siblings('.lang').removeClass('active');

});

function frozen_window() {
    $('body').css('overflow-y', 'hidden');
};

function defrozen_window() {
    $('body').css('overflow-y', 'auto');
};

window.onload = function() {
    frozen_window();
    $('.load.active').css('opacity', '0');
    setTimeout(function() {
        defrozen_window();
        $('.load.active').hide();
    }, 1000);
};


$('.portfolio-item .cover').click(function () {
   alert(1);
});
