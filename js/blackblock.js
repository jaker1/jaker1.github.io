import * as functions from '/js/functions.js';


// Header
$("header .menu-btn")[0].addEventListener("click", () => {
    if ($("header .menu-btn").hasClass("active")) {
        $("header .menu-btn").removeClass("active");
        $("header menu")[0].style.cssText = "visibility: hidden; opacity: 0";
    } else {
        $("header .menu-btn").addClass("active");

        $("header menu")[0].style.cssText = "visibility: visible; opacity: 1";
    }

})



$(".slideto").click(function (e) {
    e.preventDefault();

    let href = $(this.getAttribute("href"));

    var scrollPos = href[0].offsetTop + href[0].clientHeight / 2 - window.innerHeight / 2;

    $('html, body').stop().animate({
        scrollTop: scrollPos + 100
    }, 800, () => {
        $('html, body').stop().animate({
            scrollTop: scrollPos
        }, 200);
    });
});



$("header .fa-search:not(header.type2 .fa-search)").click(() => {
    if (functions.isVisible($(".search")[0])) {
        $(".search").fadeOut(200)
    } else {
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

        // Not active anymore
        active.removeClass("active")
        active[0].style.boxShadow = "none";

        $("header .leftmenu>div.active")[0].style.boxShadow = "0 0 20px #D1D4DF";
    }, 500);

});


// Header type 2
var header2visible = $("header.type2").is(":visible");
if (header2visible) {
    document.body.style.marginTop = "140px"
}

// HINTS
if (header2visible) {
    var hints = $("header.type2 .search .hints");
    var search = $("header.type2 .search input");

    search.keydown(function (e) {

        setTimeout(() => {

            if (search[0].value == "") {
                hints.fadeOut(200)
            } else {
                hints.fadeIn(200)
            }

        }, 10);

    });

}
// HEADER END



// General
//Select box
var selected = $(".select .selected");
var option = $(".select .option");
selected.click(function (e) {

    if (functions.isVisible($(this).next(".options")[0])) {
        $(this).next(".options")[0].style.cssText = "visibility: hidden; opacity: 0; margin-top: 0px";
        $(this).find("i")[0].style.transform = "rotate(0deg)";
    } else {
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
for (var item of checkbox) {
    $(item).find(".tick").click(function (e) {

        $(this).toggleClass("checked")
        $(this).next().val("yes");

    });
}


// Cards
var card = $(".card");
for (var i = 0; i < card.length; i++) {


    if ($(card[i]).data("animation")) {
        $(card[i]).addClass("visible animate__animated animate__" + $(card[i]).data("animation"));
    } else {
        $(card[i]).addClass("visible animate__animated animate__flipInY");
    }

}





// Initializers
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})









// Table (removing listed elements)
if (window.innerWidth <= 992) {
    var table = $(".table");
    for (var item of table) {
        let md = $(item).data("md");
        let mds = md.split(",");

        let trs = $(item).find(".tr");
        for (var tr of trs) {
            var children = []
            mds.forEach(element => {
                children.push(tr.getElementsByTagName("div")[element - 1])
            });
            children.forEach(element => {
                tr.removeChild(element)
            });
        }

        // Changing width
        var children_count = $(trs).eq(0).find("div").length

        for (var tr of trs) {
            var children = $(tr).find("div");
            for (var child of children) {
                child.style.width = 100 / children_count + "%"
            }
        }

    }
}







// Deleting material --> Manual trigger of sitemodal
$(".table .tr .fa-trash").click(function (e) {

    $("#deletematerial").addClass("visible animate__animated animate__fadeIn")
    $("#deletematerial .inner").addClass("visible animate__animated animate__fadeInDown")

    $("#deletematerial").removeClass("animate__fadeOut")
    $("#deletematerial .inner").removeClass("animate__fadeOutUp")


    $("#deletematerial button.btn_yes").click(() => {
        $(this).parent().addClass("slideFade")
    });


    e.preventDefault();
    // slideFade($(this).parent()[0],2000)
    // $(this).parent().addClass("slideFade")
});


// Button trigger (SITEMODAL)
$(".sitemodaltrigger").click(() => {
    $($(this).data("id")).addClass("visible animate__animated animate__fadeIn")
})
// Fadeout sitemodal
$("#deletematerial button").click(() => {
    $("#deletematerial").addClass("animate__animated animate__fadeOut")
    $("#deletematerial .inner").addClass("animate__animated animate__fadeOutUp")

    setTimeout(() => {
        $("#deletematerial").removeClass("visible animate__fadeIn")
        $("#deletematerial .inner").removeClass("visible animate__fadeInDown")
    }, 1000);
})





// File Inputs
var fileinput = $(".fileinput input");

$(fileinput).on("change", function () {
    $(this).parent().siblings("label")[0].textContent = $(this)[0].value

    if ($(this)[0].value == '') {
        $(this).parent().siblings("label")[0].textContent = "Browse..."
    }
});


// Fileinput with asynchronus upload
var fileinput_async = $(".fileinput.async input");

// User selected files
$(fileinput_async).change(function (e) {

    // Showing selected images/files in ImagesBlock (.files_loading)
        var imagesBlock = $($(this).parent().parent().data("imagesblock"))[0];
        // Clearing imagesBlock
        imagesBlock.innerHTML = ""

        // Checking for type of selected file/image -> if it is a file, then fill imagesBlock with standart file icon image
        if(fileinput_async[1].files[0].type == "application/x-zip-compressed"){
            imagesBlock.innerHTML += "<div> \
                                <img src='/img/file_icons/zip.png'> \
                                <svg class='circular_progress_bar'> \
                                    <g style='transform: translate(50%, 50%);'> \
                                        <circle r='40'></circle> \
                                    </g> \
                                </svg> \
                            </div>";
        }
        else{
            // Looping through images of input
            for (var item of $(this)[0].files) {
                var reader = new FileReader();
                reader.readAsDataURL(item);

                reader.onload = function (e) {
                    imagesBlock.innerHTML += "<div> \
                    <img src="+ e.target.result +"> \
                    <svg class='circular_progress_bar'> \
                        <g style='transform: translate(50%, 50%);'> \
                            <circle r='40'></circle> \
                        </g> \
                    </svg> \
                </div>"; 
                };
            }
        }


    // Uploading all the files asynchronously
    setTimeout(() => {
        
        var i = 0;
        for (var file of $(this)[0].files) {
            
            // Declarations
            let imagesBlock = $($(this).parent().parent().data("imagesblock"));
            var circular_progress_bar = imagesBlock.find("div").eq(i).find("circle");
    
            // Ajax query
            var form = new FormData();
            form.append("file", file)
            var ajax = new XMLHttpRequest();
    
            // Sending PHP a TEXTURE_FILE get parameter if type is x-zip
            if(file.type == "application/x-zip-compressed"){
                ajax.open("POST","/upload.php?texture_file", false)
            }
            else{
                i == 0 ? ajax.open("POST","/upload.php?first_request", false) : ajax.open("POST","/upload.php", false);
            }
            
            
            ajax.onprogress = (event) => {
                // Animating progress bar
                var percentaga_loaded = event.loaded/event.total * 100;
                circular_progress_bar[0].style.strokeDashoffset = Math.abs(percentaga_loaded*5 - 500);
            }
            ajax.onload = () => {
                // console.log(ajax.status + " : " + ajax.statusText)
                imagesBlock.find("div").eq(i).addClass("loaded")
                i++;

                // Getting JSON and parsing it to show resolutions and types .zip file contains
                var file_details = $(".file_details");
                var file_details_arr = JSON.parse(ajax.response);

                var resolutions = ["1k","2k","4k","8k"];
                var resolutions_equivalents = { "1k" : "1024x" , "2k" : "2048x", "4k" : "4096x" , "8k" : "8192x"};

                file_details_arr.forEach((element,index) => {
                    if(element[resolutions[index]] == true){

                        // Making resolution active in resolutions section
                        var resolutions_s = $(".resolutions label");

                        for(var resolution of resolutions_s){

                            if(resolution.textContent == resolutions_equivalents[resolutions[index]]){
                                $(resolution).addClass("active");
                            }

                        }


                        file_details.fadeIn();
                        file_details[0].innerHTML+="<h6 class='smallheading my-3 darkblue text-small'><span class='sitecolor'>- --></span> "+ resolutions_equivalents[resolutions[index]] +"</h6>"
                        file_details[0].innerHTML+="<div class='check_tags' id='"+ resolutions[index] +"_check_tag'></div>"

                        for(var map in element){
                            // If element is not resolution
                            if(resolutions.indexOf(map) == -1){
                            
                                if(element[map] == true){
                                    $("#" + resolutions[index] + "_check_tag").append("<label class='active'>"+map+"</label>");
                                }
                                else{
                                    $("#" + resolutions[index] + "_check_tag").append("<label>"+map+"</label>");
                                }

                            }
                            
                        }
                    }
                })

                
            }
        
            ajax.send(form);
        }
    
        // Selecting main photo
        // console.log($(".images_loading div"))
        $(".image_selectable>div").click(function (e) {
            $(".image_selectable>div").removeClass("selected")
            $(this).addClass("selected")
        });

    }, 2000);

});






