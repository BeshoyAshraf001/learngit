// ^ HTML Elements
var allImages = Array.from(document.querySelectorAll("figure img"));
var modal = document.querySelector(".my-modal");
var closeBtn = document.querySelector(".closeBtn");
var nextBtn = document.querySelector(".nextBtn");
var previousBtn = document.querySelector(".previousBtn");

// & app variables
var currentIndex = 0;

// * functions
function showModal() {
  modal.classList.remove("d-none");
}

function getCurrentImage(eventInfo) {
  var imageSrc = eventInfo.target.getAttribute("src");
  modal.querySelector("img").setAttribute("src", imageSrc);
  currentIndex = allImages.indexOf(eventInfo.target);
}

function hideModal() {
  modal.classList.add("d-none");
}

function nextSlide() {
  currentIndex++;
  if (currentIndex === allImages.length) currentIndex = 0;
  var imageSrc = allImages[currentIndex].getAttribute("src");
  modal.querySelector("img").setAttribute("src", imageSrc);
}

function previousSlide() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = allImages.length - 1;
  var imageSrc = allImages[currentIndex].getAttribute("src");
  modal.querySelector("img").setAttribute("src", imageSrc);
}

// ~ events
for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener("click", function (e) {
    getCurrentImage(e);
    showModal();
  });
}

nextBtn.addEventListener("click", nextSlide);
previousBtn.addEventListener("click", previousSlide);
closeBtn.addEventListener("click", hideModal);
modal.addEventListener("click", function (e) {
  if (e.target === modal) hideModal();
});
document.addEventListener("keydown", function (e) {
  console.log(e.code);
  switch (e.code) {
    case "ArrowRight":
      nextSlide();
      break;
    case "ArrowLeft":
      previousSlide();
      break;
    case "Escape":
      hideModal();
      break;
  }
});
