// Reinitializing options after adding another one (INNERHTML overrides each element)
function reinit_options(){
    var option = $(".select .option");

    option.click(function (e) {
        $(this).closest(".select").find("label")[0].textContent = this.textContent;
        $(this).closest(".select").find("input").val($(this).data("value"));
        $(this).closest(".options")[0].style.cssText = "visibility: hidden; opacity: 0; margin-top: 0px";
    });
}


$("#addCategory button.add").click(function (e) { 

    
    var addCategory = $("#addCategory");
    var category = addCategory.find("input").val();

    var categories_select = $("#categories_select");
    var options = categories_select.find(".options");
    var options_num = options.find(".option").length

    
    categories_select.find("input").val(options_num+1);

    categories_select.find(".selected").find("label").text(category)
    
    options[0].innerHTML+="<div class='option' data-value="+(options_num+1)+">"+category+"</div>";
    reinit_options()

});


$("#addSubCategory button.add").click(function (e) { 

    
    var addSubCategory = $("#addSubCategory");
    var subCategory = addSubCategory.find("input").val();

    var subcategories_select = $("#subcategories_select");
    var options = subcategories_select.find(".options");
    var options_num = options.find(".option").length

    
    subcategories_select.find("input").val(options_num+1);

    subcategories_select.find(".selected").find("label").text(subCategory)
    
    options[0].innerHTML+="<div class='option' data-value="+(options_num+1)+">"+subCategory+"</div>";
    reinit_options()

});