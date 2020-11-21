// Animating Trending Posts
var trending = $(".trending");
var inner = trending.find(".inner");
var inner_divs_num = inner.find("div").length;
console.log(inner_divs_num)
let left = 0;

// Setting indicator width
var indicator = $(".indicator div .inner");
indicator[0].style.width = (1/Math.ceil(inner_divs_num/4) * 100) + "%";
var indicator_left = 0;
var indicator_num = $(".indicator label")[0];

setInterval(() => {

    left = ( (left + 100) < Math.ceil(inner_divs_num/4)*100) ? left+100 : 0;
    inner[0].style.left = "-" + left + "%";


    if(indicator[0].style.left == (Math.ceil(inner_divs_num/4)-1)/Math.ceil(inner_divs_num/4)*100 + "%"){
        indicator[0].style.left="0%";
        indicator_left = 0;
        indicator_num.textContent = "01";
    }
    else{
        indicator_left += (1/Math.ceil(inner_divs_num/4))*100; 
        indicator[0].style.left=indicator_left+"%";

        indicator_num.textContent = "0" + (Number.parseInt(indicator_num.textContent) + 1);
    }
    
}, 5000);