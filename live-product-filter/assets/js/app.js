var products = document.querySelector(".products");
var filter = document.querySelector("#filter");
var listItem = [];
async function getData() {
  const api = "https://fakestoreapi.com/products";
  let res = await fetch(api);
  const data = await res.json();
  products.innerHTML = "";
  data.forEach((element) => {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML += `<img src="${element.image}" alt=""/>
    <div class="product-detail">
        <h4>${element.title}</h4>
        <p>${element.price}$</p>
    </div>`;
    listItem.push(div);
    products.appendChild(div);
  });
  console.log(listItem);
}
getData();
filter.addEventListener("input", (e) => {
  filtData(e.target.value);
});
function filtData(search) {
  listItem.forEach((e) => {
    let titel = e.querySelector(".product-detail h4").innerText;
    if (titel.toLowerCase().includes(search.toLowerCase())) {
      e.classList.remove("hide");
    } else {
      e.classList.add("hide");
    }
  });
}
