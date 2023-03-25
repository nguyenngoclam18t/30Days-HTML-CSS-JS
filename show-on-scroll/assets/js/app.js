var listShow = document.querySelectorAll(".show-to-scroll");
function isShowScroll(item) {
  let client = item.getClientRects()[0];
  let screenHeigh = window.innerHeight;
  return (
    (client.top <= 0 && client.bottom >= 0) ||
    (client.top <= screenHeigh && client.bottom >= screenHeigh) ||
    (client.top >= 0 && client.bottom <= screenHeigh)
  );
}
function loop() {
  listShow.forEach((element) => {
    if (isShowScroll(element)) {
      element.classList.add("start");
    } else {
      element.classList.remove("start");
    }
  });
}
window.onscroll = loop;
