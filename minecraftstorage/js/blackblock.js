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

//Header
$("header nav li .fa").on("click", function () {

    if ($('header nav div input').is(':visible')) {
        $("header nav div input").fadeOut(200);
    } else {
        $("header nav div input").fadeIn(200);
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
var imgloaded = 0;

function imgloadedcount() {
    imgloaded++;


    if (imgloaded == 4) {
        $("aside a img").attr('src', function () {
            return $(this).attr("data-src");
        });
        $(".cardsloading").fadeOut();

    }
}


        //Appearing effects
        jQuery(document).ready(function () {
            jQuery('.cards .card').viewportChecker({
                classToAdd: 'visible animated fadeInUp',
                offset: 100
            });
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





//For bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


$(document).ready(main);
