$('a').click(function(){
    var blocks = document.getElementsByClassName('block_a');
    for (var i = 0; i < blocks.length; i++) {
        $(blocks[i]).removeClass('active');
    }
    $(this).addClass('active');

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 300,
    });
});

$('.open_form').click(function(){
    $('.call_me_back_form').addClass('active');
    console.log('done');

})
$('.close').click(function(){
    $('.call_me_back_form').removeClass('active');
})
$('.side_menu_desktop').click(function(){
    if ($(document.getElementsByClassName('call_me_back_form')[0]).hasClass('active')) {
        $('.call_me_back_form').removeClass('active');
    }
})



articles = document.getElementsByClassName('article');
articles_center = document.getElementsByClassName('article_center');
var blocks_a = document.getElementsByClassName('block_a');
$(window).scroll(function() {
    for (var i = 0; i < articles.length; i++) {
        if (window.pageYOffset >= 50) {
            for (var k = 0; k < articles.length; k++) {
                if (articles[k].getBoundingClientRect().y < 300) {
                    for (var l = 0; l < blocks_a.length; l++) {
                        if ($(blocks_a[l]).attr('href') == String('#' + articles[k].id)) {
                            for (var m = 0; m < blocks_a.length; m++) {
                                $(blocks_a[m]).removeClass('active');
                            }
                            $(blocks_a[l]).addClass('active');
                        }
                    }
                }
            }
            for (var j = 0; j < articles_center.length; j++) {
                if (articles_center[j].getBoundingClientRect().y + 100 < document.documentElement.clientHeight && articles_center[j].getBoundingClientRect().y + articles_center[j].getBoundingClientRect().height -100 > 0) {
                    $(articles_center[j]).removeClass('hidden');
                }
                else {
                    $(articles_center[j]).addClass('hidden');
                }
            }
            if (articles[i].getBoundingClientRect().y + 250 < document.documentElement.clientHeight && articles[i].getBoundingClientRect().y + articles[i].getBoundingClientRect().height - 300 > 0) {
//                $(articles[i]).removeClass('hidden');
                articles[i].style.opacity = 1
            }
            else {
                if (articles[i].getBoundingClientRect().y + 250 >= document.documentElement.clientHeight) {
                    articles[i].style.opacity = 1 - (articles[i].getBoundingClientRect().y + 100) * 0.001;
                }
                if (articles[i].getBoundingClientRect().y + articles[i].getBoundingClientRect().height - 300 <= 0) {
                    articles[i].style.opacity = 1 + (articles[i].getBoundingClientRect().y - 200) * 0.001;
                }

//                $(articles[i]).addClass('hidden');
            }
        }
        else {
            for (var u = 0; u < blocks_a.length; u++) {
                $(blocks_a[u]).removeClass('active');
            }
            for (var x = 0; x < articles.length; x++) {
                articles[x].style.opacity = 0;
            }
        }
    }
});


if (document.getElementsByClassName('slider_block').length > 3 && document.documentElement.clientWidth >= 1200) {
    (function() {
        function scrollHorizontally(e) {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            document.getElementById('slider').scrollLeft -= (delta*40); // Multiplied by 40
            e.preventDefault();
        }
        if (document.getElementById('slider').addEventListener) {
            // IE9, Chrome, Safari, Opera
            document.getElementById('slider').addEventListener("mousewheel", scrollHorizontally, false);
            // Firefox
            document.getElementById('slider').addEventListener("DOMMouseScroll", scrollHorizontally, false);
        } else {
            // IE 6/7/8
            document.getElementById('slider').attachEvent("onmousewheel", scrollHorizontally);
        }
    })();
}