export function isVisible(el){
    if(window.getComputedStyle(el).display === "none" || window.getComputedStyle(el).visibility === "hidden"){
        return false;
    }
    return true;
}