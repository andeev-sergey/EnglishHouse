

    $(".mobile-header .menu").on('click', function() {
       $(".hambergerIcon").toggleClass("open");
       $('.nav-mobile').toggleClass('active');
        // setTimeout(() => {
        //     $('.switch_lang').toggleClass('mobile');
        // }, 500);
        // $('body').toggleClass('freeze');
    });


    $('.switch_lang .lang').click(function () {

        let lang_id = this.id;
        if (lang_id == "eng") {
            if ($(this).hasClass('active')) {
            } else {
                window.location.href = '/' + lang_id + window.location.pathname + window.location.search;
            }
        } else if (lang_id == "ru") {
            if ($(this).hasClass('active')) {
            } else {
                window.location.href = window.location.href.replace('eng/', '');
            }
        }
        $(this).siblings('.lang').removeClass('active');

    });


function frozen_window() {
    $('body').css('overflow-y', 'hidden');
};

function defrozen_window() {
    $('body').css('overflow-y', 'auto');
};


    $('#ru-version').click(function (e) {
        e.preventDefault();
        $('#ru').trigger("click");
    });
    $('#eng-version').click(function (e) {
        e.preventDefault();
        $('#eng').trigger("click");
    });

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



$('nav img.search').click(function () {
    $('#search input').addClass('search-active');

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
            $('#search').prependTo('.nav-mobile');
        } else {
            $('#search').prependTo('.nav-mobile');
            frozen_window();
            $('.load.active').css('opacity', '0');
            setTimeout(function() {
                defrozen_window();
                $('.load.active').hide();
            }, 1000);
        }
    }



};

$(document).on('click', '.next-event form button', function(e) {
    e.preventDefault();
    let email = $('input#email').val();
    //alert(email);
    $.ajax({
        type: 'POST',
        url: 'event-request',
        data: {
            email: email,
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(data) {
                if (data == 'ok') {
                $('.next-event form *').hide();
                if ($('.lang.active').attr('id') == 'ru'){
                $('.next-event form').append('<span style="color: #798DA3">\t<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                    '\t\tviewBox="0 0 100 100" style="enable-background:new 0 0 100 100; margin-right: 10px; transform: translateY(5px)" xml:space="preserve" preserveAspectRatio="xMidYMid meet" width="20" height="20">\n' +
                    '\t\t\t\n' +
                    '\t\t\t<style type="text/css">\n' +
                    '\n' +
                    '\t\t\t\t.circle{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.circle-dash{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.check{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.check-dash{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
                    '\n' +
                    '\t\t\t\t.check {\n' +
                    '\t\t\t\t\tstroke-dasharray: 60 100;\n' +
                    '\t\t\t\t\tanimation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-webkit-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-moz-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-o-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.check-dash {\n' +
                    '\t\t\t\t\tstroke-dasharray: 10 100;\n' +
                    '\t\t\t\t\tanimation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-webkit-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-moz-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-o-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.circle {\n' +
                    '\t\t\t\t\tstroke-dasharray: 300 300;\n' +
                    '\t\t\t\t\tanimation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-webkit-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-moz-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-o-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.circle-dash {\n' +
                    '\t\t\t\t\tstroke-dasharray: 10 300;\n' +
                    '\t\t\t\t\tanimation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-webkit-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-moz-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-o-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\n' +
                    '\t\t\t</style>\n' +
                    '\t\t<g>\n' +
                    '\t\t\t<circle class="circle" cx="50" cy="49.9999657" r="47.5"/>\n' +
                    '\t\t\t<circle class="circle-dash" cx="50" cy="49.9999657" r="47.5"/>\n' +
                    '\t\t\t<polyline class="check" points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 \t"/>\n' +
                    '\t\t\t<polyline class="check-dash" points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 \t"/>\n' +
                    '\t\t</g>\n' +
                    '\t\t</svg> Заявка отправлена</span>');
                } else{
                     $('.next-event form').append('<span style="color: #798DA3">\t<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                    '\t\tviewBox="0 0 100 100" style="enable-background:new 0 0 100 100; margin-right: 10px; transform: translateY(5px)" xml:space="preserve" preserveAspectRatio="xMidYMid meet" width="20" height="20">\n' +
                    '\t\t\t\n' +
                    '\t\t\t<style type="text/css">\n' +
                    '\n' +
                    '\t\t\t\t.circle{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.circle-dash{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.check{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.check-dash{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
                    '\n' +
                    '\t\t\t\t.check {\n' +
                    '\t\t\t\t\tstroke-dasharray: 60 100;\n' +
                    '\t\t\t\t\tanimation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-webkit-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-moz-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-o-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.check-dash {\n' +
                    '\t\t\t\t\tstroke-dasharray: 10 100;\n' +
                    '\t\t\t\t\tanimation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-webkit-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-moz-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-o-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.circle {\n' +
                    '\t\t\t\t\tstroke-dasharray: 300 300;\n' +
                    '\t\t\t\t\tanimation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-webkit-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-moz-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-o-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.circle-dash {\n' +
                    '\t\t\t\t\tstroke-dasharray: 10 300;\n' +
                    '\t\t\t\t\tanimation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-webkit-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-moz-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-o-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\n' +
                    '\t\t\t</style>\n' +
                    '\t\t<g>\n' +
                    '\t\t\t<circle class="circle" cx="50" cy="49.9999657" r="47.5"/>\n' +
                    '\t\t\t<circle class="circle-dash" cx="50" cy="49.9999657" r="47.5"/>\n' +
                    '\t\t\t<polyline class="check" points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 \t"/>\n' +
                    '\t\t\t<polyline class="check-dash" points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 \t"/>\n' +
                    '\t\t</g>\n' +
                    '\t\t</svg> Sended</span>');
                }
            } else if (data == 'no') {
                alert(data);
            }
        },
        error: function(xhr, errmsg, err) {
            console.log(xhr.status + ": " + xhr.responseText);
            alert('error');
        }
    });
});





$(document).on('click', 'footer .mailing form button', function(e) {
    e.preventDefault();
    let email = $('input#email-sub').val();

    $.ajax({
        type: 'POST',
        url: 'sub-request',
        data: {
            email: email,
            csrfmiddlewaretoken: $('footer input[name=csrfmiddlewaretoken]').val()
        },
        success: function(data) {
            if (data == 'ok') {
                $('.mail #email-sub').hide();
                $(' form.mail button').hide();
                if ($('.lang.active').attr('id') == 'ru'){
                $('footer form').append('<span style="color: #798DA3">\t<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                    '\t\tviewBox="0 0 100 100" style="enable-background:new 0 0 100 100; margin-right: 10px; transform: translateY(5px)" xml:space="preserve" preserveAspectRatio="xMidYMid meet" width="20" height="20">\n' +
                    '\t\t\t\n' +
                    '\t\t\t<style type="text/css">\n' +
                    '\n' +
                    '\t\t\t\t.circle{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.circle-dash{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.check{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.check-dash{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
                    '\n' +
                    '\t\t\t\t.check {\n' +
                    '\t\t\t\t\tstroke-dasharray: 60 100;\n' +
                    '\t\t\t\t\tanimation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-webkit-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-moz-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-o-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.check-dash {\n' +
                    '\t\t\t\t\tstroke-dasharray: 10 100;\n' +
                    '\t\t\t\t\tanimation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-webkit-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-moz-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-o-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.circle {\n' +
                    '\t\t\t\t\tstroke-dasharray: 300 300;\n' +
                    '\t\t\t\t\tanimation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-webkit-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-moz-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-o-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.circle-dash {\n' +
                    '\t\t\t\t\tstroke-dasharray: 10 300;\n' +
                    '\t\t\t\t\tanimation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-webkit-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-moz-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-o-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\n' +
                    '\t\t\t</style>\n' +
                    '\t\t<g>\n' +
                    '\t\t\t<circle class="circle" cx="50" cy="49.9999657" r="47.5"/>\n' +
                    '\t\t\t<circle class="circle-dash" cx="50" cy="49.9999657" r="47.5"/>\n' +
                    '\t\t\t<polyline class="check" points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 \t"/>\n' +
                    '\t\t\t<polyline class="check-dash" points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 \t"/>\n' +
                    '\t\t</g>\n' +
                    '\t\t</svg> Заявка отправлена</span>');
                } else{
                     $('footer form').append('<span style="color: #798DA3">\t<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                    '\t\tviewBox="0 0 100 100" style="enable-background:new 0 0 100 100; margin-right: 10px; transform: translateY(5px)" xml:space="preserve" preserveAspectRatio="xMidYMid meet" width="20" height="20">\n' +
                    '\t\t\t\n' +
                    '\t\t\t<style type="text/css">\n' +
                    '\n' +
                    '\t\t\t\t.circle{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.circle-dash{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.check{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
                    '\t\t\t\t.check-dash{fill:none;stroke:#1E4164;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n' +
                    '\n' +
                    '\t\t\t\t.check {\n' +
                    '\t\t\t\t\tstroke-dasharray: 60 100;\n' +
                    '\t\t\t\t\tanimation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-webkit-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-moz-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-o-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes check {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 60;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 00;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.check-dash {\n' +
                    '\t\t\t\t\tstroke-dasharray: 10 100;\n' +
                    '\t\t\t\t\tanimation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-webkit-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-moz-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t\t-o-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards; \n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes check-dash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset: 120;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 45;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.circle {\n' +
                    '\t\t\t\t\tstroke-dasharray: 300 300;\n' +
                    '\t\t\t\t\tanimation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-webkit-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-moz-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\t-o-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s; \n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes circle {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:300;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset:0;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t.circle-dash {\n' +
                    '\t\t\t\t\tstroke-dasharray: 10 300;\n' +
                    '\t\t\t\t\tanimation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-webkit-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-moz-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\t-o-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;\n' +
                    '\t\t\t\t\topacity: 0;\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-webkit-keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@-moz-keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\t\t\t\t@keyframes circledash {\n' +
                    '\t\t\t\t\tfrom {stroke-dashoffset:320;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t\tto {stroke-dashoffset: 20;\n' +
                    '\t\t\t\t\topacity: 1;}\n' +
                    '\t\t\t\t}\n' +
                    '\n' +
                    '\n' +
                    '\t\t\t</style>\n' +
                    '\t\t<g>\n' +
                    '\t\t\t<circle class="circle" cx="50" cy="49.9999657" r="47.5"/>\n' +
                    '\t\t\t<circle class="circle-dash" cx="50" cy="49.9999657" r="47.5"/>\n' +
                    '\t\t\t<polyline class="check" points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 \t"/>\n' +
                    '\t\t\t<polyline class="check-dash" points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 \t"/>\n' +
                    '\t\t</g>\n' +
                    '\t\t</svg> Sended</span>');
                }
            } else if (data == 'no') {
                alert(data);
            }
        },
        error: function(xhr, errmsg, err) {
            console.log(xhr.status + ": " + xhr.responseText);
            alert('error');
        }
    });
});




