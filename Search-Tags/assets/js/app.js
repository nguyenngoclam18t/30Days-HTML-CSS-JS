let tags = ["nodejs", "reactjs"];
var content = document.querySelector(".content");
var input_text = document.querySelector(".input-text");
function renderTags() {
  var htmlTags = tags.map(function (element, index) {
    return `<li>
    ${element}
    <i class="fa-solid fa-xmark close-icon "onclick="removetag(this,${index})"></i>
  </li>`;
  });

  var htmltag = htmlTags.join("");
  content.innerHTML = htmltag;
  content.appendChild(input_text);
  input_text.focus();
}
function addtag(e) {
  if (e.key == "Enter") {
    let tag = e.target.value.trim();
    if (tag != "") {
      tags.push(tag);
      e.target.value = "";
      renderTags();
    }
  }
}
function removetag(element, index) {
  element.parentElement.remove();
  tags.splice(index, 1);
}
renderTags();
input_text.addEventListener("keyup", addtag);
document.querySelector(".remove-button").addEventListener("click", () => {
  tags = [];
  renderTags();
});
