var user_card = $(".users .user_card");

user_card.find(".sitemodaltrigger").click(function (e) { 
    
    var modal = $($(this).data("id"));

    var clicked_user_card = $(this).parents(".user_card")

    modal.find(".btn_yes").click(function(e){
        clicked_user_card.fadeOut(1000)
    })

});