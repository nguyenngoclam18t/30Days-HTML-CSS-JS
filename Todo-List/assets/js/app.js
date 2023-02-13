var form = document.querySelector(".form-content");
var textInput = document.querySelector(".input-todo");
var ulList = document.querySelector(".list-todo");
var inputLi = ulList.querySelectorAll("li");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  textInput.value = textInput.value.trim();
  if (textInput.value) {
    createLi({
      text: textInput.value,
    });
  }
  textInput.value = "";
});

function createLi(data) {
  // //{
  //     text
  //     status
  // }
  //    <li>
  //     <span>aaaaaaa</span>
  //     <i class="fa-solid fa-trash"></i>
  //   </li>
  var li = document.createElement("li");
  li.innerHTML = `
  <span>${data.text}</span>
  <i class="fa-solid fa-trash " onclick="remove(this)"></i>
`;
  if (!(data.status == null)) {
    li.querySelector("span").className = "active";
  }
  li.addEventListener("click", () => {
    if (li.querySelector("span").className == "active") {
      li.querySelector("span").className = "";
    } else {
      li.querySelector("span").className = "active";
      console.log(li);
    }
    saveTodoList();
  });

  ulList.appendChild(li);
  saveTodoList();
}
function remove(element) {
  element.parentElement.remove();
}
function saveTodoList() {
  let todoList = ulList.querySelectorAll("li");
  let todoStorage = [];
  todoList.forEach((element) => {
    let text = element.querySelector("span").innerText;
    let status = element.querySelector("span").getAttribute("class");

    todoStorage.push({
      text,
      status,
    });
  });
  localStorage.setItem("todoList", JSON.stringify(todoStorage));
}
function init() {
  let data = JSON.parse(localStorage.getItem("todoList"));
  data.forEach((element) => {
    createLi(element);
  });
}
init();
