document.querySelector(".Search-btn").addEventListener("click", function () {
  if (this.parentElement.classList.contains("open")) {
    this.parentElement.classList.remove("open");
  } else {
    this.parentElement.classList.add("open");
    document.querySelector(".search-input").focus();
  }
});
