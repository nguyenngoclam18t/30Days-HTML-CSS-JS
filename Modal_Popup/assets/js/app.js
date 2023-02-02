var btn_open = document.querySelector(".open_button");
var modal = document.querySelector(".modal");
var close_icon = document.querySelector(".close-icon");
var close_button = document.querySelector(".close-button");

function hideModal() {
  if (modal.classList.contains("active")) {
    modal.classList.remove("active");
  } else {
    modal.classList.add("active");
  }
}
btn_open.addEventListener("click", hideModal);
close_button.addEventListener("click", hideModal);
close_icon.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal);
document.querySelector(".modal__inner").addEventListener("click", (e) => {
  e.preventDefault();
  hideModal();
});
