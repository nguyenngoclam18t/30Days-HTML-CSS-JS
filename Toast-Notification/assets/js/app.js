var Btn_show = document.querySelectorAll("button");

Btn_show.forEach((element) => {
  element.addEventListener("click", () => {
    showStatus(element.className);
  });
});

const toats = {
  success: {
    icon: `<i class="fa-solid fa-circle-check"></i>`,
    mess: "This is a success message !",
  },
  warning: {
    icon: `<i class="fa-solid fa-circle-exclamation"></i>`,
    mess: "This is a warning message !",
  },
  error: {
    icon: `<i class="fa-solid fa-triangle-exclamation"></i>`,
    mess: "This is a error  message !",
  },
};

function showStatus(status) {
  let toast = document.createElement("div");

  toast.innerHTML = `${toats[status].icon}
  <p>${toats[status].mess}</p>
  <span class="countdown"></span>`;
  toast.className = `toast ${status}`;
  document.querySelector("#toasts").appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "hideslider ease-out forwards 1s";
  }, 4000);
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
