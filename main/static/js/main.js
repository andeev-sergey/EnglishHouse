$(function() {



    // скрол со слайдера
    $('.main-image .main-image-text').click(function() {
        $('html, body').animate({ scrollTop: $('section').height() }, 600);
    });
    // меню мобильное
    $(".menu").on('click', function() {
        $(this).find(".hambergerIcon").toggleClass("open");
        $('.nav-mobile').toggleClass('active');
        setTimeout(() => {
            $('.switch_lang').toggleClass('mobile');
        }, 500);
        $('body').toggleClass('freeze');
    });
});


$('.switch_lang .lang').click(function() {
    $(this).addClass('active');
    let lang_id = this.id;
    if (lang_id == "eng") {
        window.location.href = '/' + lang_id + window.location.pathname;
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



$('.portfolio-item .cover').click(function() {
    window.location.href = $(this).parent('.portfolio-item').children('a.more-button').prop('href');
});

$('.assortiment-item').click(function() {
    window.location.href =
        $(this).children('.lay').children('a').prop('href');
});
$('.brand-item .img-background').click(function() {
    window.location.href =
        $(this).parent('.brand-item').children('a').prop('href');

});




window.onload = function() {
    if (window.innerWidth >= 767) {
        frozen_window();
        $('.load.active').css('opacity', '0');
        setTimeout(function() {
            defrozen_window();
            $('.load.active').hide();
        }, 1000);
    } else {
        if ((window.location.pathname == '/') || (window.location.pathname == '/eng/')) {
            frozen_window();
            $('.mobilepre').css('left', '0px'); //.css('background', '#fff');
            setTimeout(function() {
                $('.mobilepre img').css('transform', 'translateY(1px)').css('opacity', '1');
            }, 1000);
            setTimeout(function() {
                setTimeout(function() {
                    defrozen_window();

                    $('.mobilepre img').css('opacity', '0');
                }, 2000);
                setTimeout(function() {
                    defrozen_window();
                    $('.mobilepre').css('left', '-100vw');
                    $('.load.active').hide();
                }, 3000);

            }, 500);
        } else {
            frozen_window();
            $('.load.active').css('opacity', '0');
            setTimeout(function() {
                defrozen_window();
                $('.load.active').hide();
            }, 1000);
        }
    }
};