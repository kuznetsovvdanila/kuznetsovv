infos = document.getElementsByClassName('info');
headers = document.getElementsByClassName('info_center');
$(window).scroll(function() {
    for (var i = 0; i < infos.length; i++) {
        if (window.pageYOffset >= 50) {
            $('.logo').addClass('hidden');
            $('.logo_bar').removeClass('hidden');
            $('.main').addClass('move');
            for (var j = 0; j < headers.length; j++) {
                if (headers[j].getBoundingClientRect().y < document.documentElement.clientHeight - 170 && headers[j].getBoundingClientRect().y > 150) {
                    $(headers[j]).removeClass('hidden');
                }
                else {
                    $(headers[j]).addClass('hidden');
                }
            }
            
            if (infos[i].getBoundingClientRect().y + infos[i].getBoundingClientRect().height < document.documentElement.clientHeight - 50 && infos[i].getBoundingClientRect().y > 150) {
                $(infos[i]).removeClass('hidden');
            }
            else {
                $(infos[i]).addClass('hidden');
            }
        }
        else {
            $('.main').removeClass('move');
            $('.logo').removeClass('hidden');
            $('.logo_bar').addClass('hidden');
            for (var x = 0; x < infos.length; x++) {
                $(infos[x]).addClass('hidden');
            }
            for (var y = 0; y < headers.length; y++) {
                $(headers[y]).addClass('hidden');
            }
        }
    }
});