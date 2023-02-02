var images = document.querySelectorAll(".image img");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var closeBtn = document.querySelector(".close-icon");
var slideImg = document.querySelector(".gallery-inner img");
var gallery = document.querySelector(".gallery");
var curretIndex = 0;
function nextCheck() {
  curretIndex == images.length - 1
    ? nextBtn.classList.add("hide")
    : nextBtn.classList.remove("hide");
}
function prevCheck() {
  curretIndex == 0
    ? prevBtn.classList.add("hide")
    : prevBtn.classList.remove("hide");
}
images.forEach((element, index) => {
  element.addEventListener("click", () => {
    curretIndex = index;
    showGallery();
  });
});
function showGallery() {
  nextCheck();
  prevCheck();
  gallery.classList.add("show");
  slideImg.src = images[curretIndex].src;
}
nextBtn.addEventListener("click", () => {
  curretIndex == images.length - 1 ? images.length - 1 : curretIndex++;
  showGallery();
});
prevBtn.addEventListener("click", () => {
  curretIndex == 0 ? 0 : curretIndex--;
  showGallery();
});
closeBtn.addEventListener("click", () => {
  gallery.classList.remove("show");
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) gallery.classList.remove("show");
});
