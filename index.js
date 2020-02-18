const imageElements = document.getElementsByClassName("image");
const titleElements = document.getElementsByClassName("title");

const imgElements = document.getElementsByTagName("img");

var btnPrevElement = document.getElementById("prev");
var btnNextElement = document.getElementById("next");

let currentImg = 0;

btnNextElement.addEventListener("click", nextImg);
btnPrevElement.addEventListener("click", prevImg);

function nextImg(){
    if(currentImg < imageElements.length -1) {
        imageElements[currentImg].className = "image positionImgMiddleToTop";
        titleElements[currentImg].className = "title positionTitleFromMiddleToRight";
        currentImg++;
        imageElements[currentImg].className = "image positionImgBottomToMiddle";
        titleElements[currentImg].className = "title positionTitleFromLeftToMiddle";
    }
}

function prevImg() {
    if(currentImg > 0) {
        imageElements[currentImg].className = "image positionImgMiddleToBottom";
        titleElements[currentImg].className = "title positionTitleFromMiddleToLeft";
        currentImg--;
        imageElements[currentImg].className = "image positionImgTopToMiddle"; 
        titleElements[currentImg].className = "title positionTitleFromRightToMiddle"; 
    }
}

function setDefaultLetterSpacing(element) {
    element.className = "defaultLetterSpacing";
}

function onHoverImage(elementposition) {
    imgElements[elementposition].className = "hoverImage";
}

function onHoverImageReset(elementposition) {
    imgElements[elementposition].className = "unHoverImage";
}

