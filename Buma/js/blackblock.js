//Header
$("header nav ul li:nth-child(2)").on("click",function(){
    $(this).find(".dropdown").slideToggle(200)
});

//Entry
$(".entry .inner>img").toggleClass("");

jQuery(document).ready(function () {
    jQuery('.aboutimg').viewportChecker({
        
        classToAdd: 'visible animated fadeIn',
        offset: 200
        
    });
});
//if(window.innerWidth<700){
//   $(".entry>img").attr("src","img/enter.png") 
//}







//General
//Directiong to blocks
$('a').click(function () { // ловим клик по ссылке с классом go_to
    
    if( $(this).attr('href').search("#")==0 ){
    
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 800); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
    }
    
});


//PROS
//Bluring other cards than hovered
$(".pros .row>div>div").hover(function(){
    $(this).parent().siblings().toggleClass("blur")
})


//News
$(".news .chev").on("click", function(){
    if( $(this).find(".fal").hasClass("chev_rotated") ){
       $(this).next().removeClass("fadeInDown").toggleClass("fadeOutUp")
    }
    else{
        $(this).next().removeClass().toggleClass("inner visible animated fadeInDown")
    }
    $(this).find(".fal").toggleClass("chev_rotated");
})





// Contacts
$(".contact>i").on("click", function(){
    $(".contacts .back").fadeIn();
    $(".contacts .back").css({"display": "flex"});
    $(".contact").css({"max-width": "150px", "height": "50px", "top": "10px", "left": "50%", "transform": "translate(0,0)"})
    $(".contacts .map").css({"filter": "none"})
});
$(".contact>.back").on("click", function(){
    $(".contact").css({"max-width": "", "height": "", "top": "", "left": "", "transform": ""})
    $(".contacts .back").delay(500).fadeOut();
    $(".contacts .map").css({"filter": ""})
});






























$( document ).ready()