$('div a').click(function(){
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





blocks = document.getElementsByClassName('block');
headers = document.getElementsByClassName('block_center');
$(window).scroll(function() {
    for (var i = 0; i < blocks.length; i++) {
        if (window.pageYOffset >= 50) {
            $('.logo_d').addClass('hidden');
            $('.top_menu').removeClass('hidden');
            $('.main').addClass('move');
            for (var j = 0; j < headers.length; j++) {
                if (headers[j].getBoundingClientRect().y < document.documentElement.clientHeight - 170 && headers[j].getBoundingClientRect().y > 150) {
                    $(headers[j]).removeClass('hidden');
                }
                else {
                    $(headers[j]).addClass('hidden');
                }
            }

            if (blocks[i].getBoundingClientRect().y + blocks[i].getBoundingClientRect().height < document.documentElement.clientHeight - 50 && blocks[i].getBoundingClientRect().y > 150) {
                $(blocks[i]).removeClass('hidden');
            }
            else {
                $(blocks[i]).addClass('hidden');
            }
        }
        else {
            $('.main').removeClass('move');
            $('.logo_d').removeClass('hidden');
            $('.top_menu').addClass('hidden');
            for (var x = 0; x < blocks.length; x++) {
                $(blocks[x]).addClass('hidden');
            }
            for (var y = 0; y < headers.length; y++) {
                $(headers[y]).addClass('hidden');
            }
        }
    }
});

$('.open_form').click(function(){
    $('.call_me_back_form').addClass('active');
    console.log('done');

})
$('.close').click(function(){
    $('.call_me_back_form').removeClass('active');
})
$('.top_menu').click(function(){
    $('.call_me_back_form').removeClass('active');
})

if (document.getElementsByClassName('slider_block').length > 3 && document.documentElement.clientWidth >= 1100) {
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
