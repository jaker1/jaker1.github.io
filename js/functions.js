export function isVisible(el){
    if(window.getComputedStyle(el).display === "none" || window.getComputedStyle(el).visibility === "hidden"){
        return false;
    }
    return true;
}

// Object.isVisible = () => {
//     if(window.getComputedStyle(this).display === "none" || window.getComputedStyle(this).visibility === "hidden"){
//         return false;
//     }
//     return true;
// }