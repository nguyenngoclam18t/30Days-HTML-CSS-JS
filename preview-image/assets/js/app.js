var upload = document.querySelector("#input-img");
var preview = document.querySelector(".preview");
var err = document.querySelector(".err");
upload.addEventListener("change", (e) => {
  let file = upload.files[0];
  if (!file) return;
  if (!file.name.endsWith(".jpg")) {
    err.innerText = "vui lòng đặt đúng định dạng ảnh";
    return;
  } else {
    err.innerText = "";
  }
  if (file.size / (1024 * 1024) > 5) {
    err.innerText = "vui lòng đặt ảnh dưới 5mb";
    return;
  } else {
    err.innerText = "";
  }
  let img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  preview.appendChild(img);
});
