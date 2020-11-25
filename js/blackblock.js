import * as functions from '/js/functions.js';


// Header
$("header .menu-btn")[0].addEventListener("click" , ()=>{
    if($("header .menu-btn").hasClass("active")){
        $("header .menu-btn").removeClass("active");
        $("header menu")[0].style.cssText = "visibility: hidden; opacity: 0";
    }
    else{
        $("header .menu-btn").addClass("active");

        $("header menu")[0].style.cssText = "visibility: visible; opacity: 1";
    }
    
})



$(".slideto").click(function (e) { 
    e.preventDefault();

    let href = $(this.getAttribute("href"));

    var scrollPos = href[0].offsetTop + href[0].clientHeight/2 - window.innerHeight/2;

    $('html, body').stop().animate({
        scrollTop: scrollPos + 100
    }, 800, () => {
        $('html, body').stop().animate({
            scrollTop: scrollPos
        }, 200);
    });        
});



$("header .fa-search:not(header.type2 .fa-search)").click(()=>{
    if(functions.isVisible($(".search")[0])){
        $(".search").fadeOut(200)
    }
    else{
        $(".search").fadeIn(200)
    }
    
})


$("header.type2 .grid_icon").click(element => { 

    $("header .leftmenu>.active")[0].style.transform = "translate(-100%)";

    setTimeout(() => {
        $("header .leftmenu>div:not(.active)")[0].style.transform = "translate(0%)";

            // Changing active classes
            var active = $("header .leftmenu>.active");
            $("header .leftmenu>div:not(.active)").addClass("active");

            active.removeClass("active")
    }, 500);
    




});



// General
//Select box
var selected = $(".select .selected");
var option = $(".select .option");
selected.click(function (e) { 
    
    if(functions.isVisible($(this).next(".options")[0])){
        $(this).next(".options")[0].style.cssText = "visibility: hidden; opacity: 0; margin-top: 0px";
        $(this).find("i")[0].style.transform = "rotate(0deg)";
    }
    else{
        $(this).next(".options")[0].style.cssText = "visibility: visible; opacity: 1; margin-top: 10px";
        $(this).find("i")[0].style.transform = "rotate(180deg)";
    }

});

option.click(function (e) { 
    $(this).closest(".select").find("label")[0].textContent = this.textContent;
    $(this).closest(".select").find("select")[0].setAttribute("value", $(this).data("value"));
    $(this).closest(".options")[0].style.cssText = "visibility: hidden; opacity: 0; margin-top: 0px";
});


// Checkbox
var checkbox = document.getElementsByClassName("checkbox");
for(var item of checkbox){
    $(item).find(".tick").click(function (e) { 
        
        $(this).toggleClass("checked")
        $(this).next().val("yes");

        
    });
}

// Cards
var card = $(".card");
for(var i=0;i<card.length;i++){

    
    if($(card[i]).data("animation")){
        $(card[i]).addClass("visible animate__animated animate__"+$(card[i]).data("animation"));
    }
    else{
        $(card[i]).addClass("visible animate__animated animate__flipInY");
    }
    
}





// Initializers
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})






