export const createImg = async (src) => {
    const img = await loadImg(src);
    console.log(img);
    return img;
}
function loadImg(src) {
    return new Promise(function(reslove, reject) {
        var img = document.createElement("img");
        img.src = src;
        img.onload = function(){
            reslove(img);
        }
    })
    
}