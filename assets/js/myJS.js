//#region ===================|> variables
var model = document.querySelector(".my-modal");
var allImages = Array.from(document.querySelectorAll("figure img"));
console.log(allImages);
alert()
var closeBtn = document.querySelector(".closeBtn");
var nextBtn = document.querySelector(".nextBtn");
var previousBtn = document.querySelector(".previousBtn");
var currentIndex;
//#endregion
//#region =================|> functions
function showModel(params) {
    model.classList.replace("d-none", "d-flex");
}
function hiedModel(params) {
    model.classList.replace("d-flex", "d-none");
}

for (let i = 0; i < allImages.length; i++) {
   allImages[i].addEventListener('click', function (e) {
       showModel()
       //    ^ get selected image src
       getCurrentImage(e)
   })
    
}

function getCurrentImage(e) {
    var currentImageSrc = e.target.getAttribute("src");
    model.querySelector("img").setAttribute("src", currentImageSrc);
    currentIndex = allImages.indexOf(e.target);

}

function getNextImage() {
    currentIndex>=allImages.length?currentIndex=0:currentIndex
    model.querySelector("img").setAttribute("src", allImages[++currentIndex].getAttribute("src"));
}
function getPreviousImage() {
    currentIndex<=0?currentIndex=allImages.length:currentIndex
    model.querySelector("img").setAttribute("src", allImages[--currentIndex].getAttribute("src"));
}

//#endregion

closeBtn.addEventListener("click", hiedModel);
nextBtn.addEventListener("click", getNextImage);
previousBtn.addEventListener("click", getPreviousImage);
document.addEventListener("keydown", function (e) {
    console.log(e.code);
    switch (e.code) {
        case "ArrowRight":
            getNextImage();
            break;
        case "ArrowLeft":
            getPreviousImage();
            break;
        case "Escape":
            hiedModel();
            break;
    }
})
model.addEventListener("click", function (e) {
    if (e.target === model) hiedModel();
})