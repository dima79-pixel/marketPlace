let productsGrid = document.getElementById("products-grid");
let productsArray =   [];

let url = "https://my-json-server.typicode.com/Robo-Ck/firstrepo";


fetch(url + "/products")
   .then(async function (response) {
     let products = await response.json();

     productsGrid.innerHTML = null;

     products.forEach(element => {
        productsArray.push(element);

        let pElem = document.createElement("div");
        pElem.classList.add("product");

        pElem.innerHTML =
        `
        <h2 class="product-name">${element.name}</h2>
        <img
           class="product-photo"
           src="${element.photo_url}"
        >
        <p class"product-price">
            <b>Price:   </b> ${element.price}
        </p>

         <button>Bye</button>
        `
        productsGrid.append(pElem);
     });
   })
   
