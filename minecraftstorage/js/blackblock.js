//Not showing content before entry is loaded
//document.getElementById("tocheckimg").onload=function(){
//    $(".startup").fadeOut();
//};
$(document).ready(function () {
    var tmpImg = new Image();
    tmpImg.src = $('#tocheckimg').attr('src');
    tmpImg.onload = function () {
        $(".startup").fadeOut();
    };
});

//Loading bg-image only if it is not homepage to increase speed
if (!$("body").hasClass("homepage")) {
    $(".entry").css('background-image', 'url(img/background.png)')
}


//Header
$("header nav li .fa").on("click", function () {

    if ($('header nav div form').is(':visible')) {
        $("header nav div form").fadeOut(200);
    } else {
        $("header nav div form").fadeIn(200);
    }

});


//Header for >900 screens
$("header .lang").on("click", function () {

    if ($('header .lang .second').is(':visible')) {
        $("header .lang .second").fadeOut(200);
    } else {
        $("header .lang .second").fadeIn(200);
    }

});

$("header .m900 nav>li>a").on('click', function () {
    //Huge question
    //    $(".dropdown").not($(this).children(".dropdown")).slideUp(200);
    //    $(this).children("div").slideToggle(200);

    $(".dropdown").not($(this).next()).slideUp(200);
    $(this).next().slideToggle(200);

});



//Working with header after scrolling to certain height
window.onscroll = function () {
    var scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    //Determining the height of a document
    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    var hg_par = ((scrollTop + window.innerHeight) * 100) / height;
    $("header .roller")[0].style.width = hg_par + "%";

    var hdr = document.getElementsByTagName("header")[0];
    if (scrollTop >= 400 && window.innerWidth >= 900) {
        $("header .roller").fadeIn();
        if (!hdr.classList.contains('smallheader')) {
            $("header").toggleClass("smallheader");
        }
    } else {
        $("header .roller").fadeOut();
        if (hdr.classList.contains('smallheader')) {
            $("header").toggleClass("smallheader");
        }
    }
}



//Header for <900 screens
$(".h900 .fa-search").on('click', function () {
    $("header input").toggleClass("inpwd");

});
$(".lang900").on('click', function () {
    $(".lanpass").slideToggle(0);
});
$(".btn_toggle").on('click', function () {
    $(".toggle").slideToggle(200);
});
$("header .toggle>li>a").on('click', function () {
    $(this).next().slideToggle(200);
});




//MAIN
//Cards
if ($('.wrapper .cards').length) {
    $('.wrapper .cards').imagesLoaded(function () {

        $(".cardsloading").fadeOut();

        //Appearing effects
        jQuery(document).ready(function () {

            jQuery('.cards .card').viewportChecker({

                classToAdd: 'visible animated fadeInUp',
                offset: 100

            });
        });


        //Changing small sized photos on cards to big ones
        $(".cards .card .imgdiv img").each(function (index) {
            $(".cards .card .imgdiv img")[index].src = $(".cards .card .imgdiv img")[index].src.replace("small", "");
        });


        //Moving the src from data-src in aside
        $("aside a img").attr('src', function () {
            return $(this).attr("data-src");
        });


    });
} else {
    //Moving the src from data-src in aside
    $("aside a img").attr('src', function () {
        return $(this).attr("data-src");
    });
}




//Blog

//Changing small sized photos on cards to big ones in blog
$(".blog>img")[0].src = $(".blog>img")[0].src.replace("small", "");


// Screenshots
$(".blog>.screens>img:not(.screen_active)").on('click', function () {
    var screnatr = $(this).attr('src');
    $(".icon_active").removeClass("icon_active");
    $(this).toggleClass("icon_active");

    $(".screen_active").animate({
        opacity: '0'
    }, {
        duration: 300,
        done: function () {
            $(".screen_active").attr('src', screnatr).animate({
                opacity: '1'
            }, 300);
        }
    });

    //On click end
});


//Log in
$(".login .input input").on("keyup", function () {
    if ($(this).val().length > 0) {
        if (!$(this).prev().hasClass('lb_move_up')) {
            $(this).prev().toggleClass("lb_move_up");
        }
    } else {
        if ($(this).prev().hasClass('lb_move_up')) {
            $(this).prev().toggleClass("lb_move_up");
        }
    }

});







//GENERAL
$(document).click(function (e) {

    // Check if click was triggered on or within
    if ($(e.target).closest(".lang").length > 0) {
        return false;
    }

    $(".fader").fadeOut();
});

//Click on everything exept specific block
$(document).click(function (e) {

    // Check if click was triggered on or within
    if ($(e.target).closest("header .m900 nav>li").length > 0) {
        return false;
    }
    $(".dropdown").slideUp(200);
});


//Directiong to blocks
$('a').click(function () { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
});




// Custom file input
$(document).ready(function () {
    bsCustomFileInput.init()
})

//For bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


$(document).ready(main);
