document.addEventListener("keydown", (e) => {
  document.querySelector(".key p:last-child").innerText =
    e.keyCode == 32 ? e.code : e.key.toUpperCase();
  document.querySelector(".location p:last-child").innerText = e.location;
  document.querySelector(".which p:last-child").innerText = e.which;
  document.querySelector(".code p:last-child").innerText = e.code;
  document.querySelector(".result").innerText = e.which;
  document.querySelector(".alert").classList.add("hide");
  document.querySelector(".box").classList.remove("hide");
});
