var body = document.querySelector("body");
var range = document.querySelector(".range");
var rangeBar = document.querySelector(".range-bar");
function setRangeBar(precent) {
  rangeBar.style.width = `${precent}%`;
  range.querySelector("span").innerText = `${precent}%`;
  body.style.backgroundColor = `rgba(0,0,0,${precent / 100})`;
}
range.addEventListener("mousemove", function (e) {
  const process = e.pageX - this.offsetLeft;
  let precent = (process / this.offsetWidth) * 100;
  precent = Math.ceil(precent);
  setRangeBar(precent);
});
