const products = document.querySelector(".products");
var mockData = fetch("http://fakestoreapi.com/products")
  .then(res => {
    return res.json();
  })
  .then(data => {
    products.innerHTML = "";
    data.forEach(item => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
          <img
            src="${item.image}"
            alt=""
            class="product__img"
          />
          <div class="product__info">
            <div class="product__name">${item.title}</div>
            <div class="product__price">${item.price}</div>
          </div>
    `;
      products.appendChild(newProduct);
    });
  });

var searchInput = document.querySelector(".search__input");
searchInput.addEventListener("input", event => {
  let txtSearch = event.target.value.trim().toLowerCase();
  let listProductDom = document.querySelectorAll(".product");
  listProductDom.forEach(item => {
    if (item.innerText.toLowerCase().includes(txtSearch)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
