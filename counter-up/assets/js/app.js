const $ = document.querySelectorAll.bind(document);
var Listcounter = $(".counter");
function counter(el) {
  let numberEl = el.querySelector("h2");
  let to = parseInt(numberEl.innerText);
  let count = 0;
  let time = 250;
  let step = to / time;
  let counting = setInterval(() => {
    count += step;
    if (count > to) {
      clearInterval(counting);
      numberEl.innerText = to;
    } else {
      numberEl.innerText = Math.ceil(count);
    }
  }, 1);
}
Listcounter.forEach((element) => {
  console.log(element);
});
