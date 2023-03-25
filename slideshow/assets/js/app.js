var list_img = document.querySelectorAll(".list-img div");
var preview = document.querySelector(".main .img-wrap img");
var controlNext = document.querySelector(".control.next");
var controlPrev = document.querySelector(".control.prev");
function setImg(curret) {
  list_img.forEach((element) => {
    element.classList.remove("active");
  });
  preview.src = curret.querySelector("img").src;
  curret.classList.add("active");
}
list_img.forEach((element) => {
  element.addEventListener("click", () => {
    setImg(element);
  });
});
function getIndex() {
  let curretIndex;
  list_img.forEach((element, index) => {
    if (element.className == "active") {
      curretIndex = index;
    }
  });
  return curretIndex;
}
controlNext.addEventListener("click", () => {
  let index = getIndex();
  index = index == list_img.length - 1 ? 0 : ++index;
  setImg(list_img[index]);
});
controlPrev.addEventListener("click", () => {
  let index = getIndex();
  index = index == 0 ? list_img.length - 1 : --index;
  setImg(list_img[index]);
});
