function showSection(sectionId) {
  // hide all sections
  const sections = document.querySelectorAll(".page");
  sections.forEach(sec => sec.classList.add("hidden"));

  // show selected section
  document.getElementById(sectionId).classList.remove("hidden");
}

let loaded = false;

function loadCategories() {

  if (loaded) return;

    fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data => 
        showdata(data),
        loaded = true
    )
    .catch(error => console.log(error))
}


function showdata (data) {
    const list = document.getElementById('Catlist')

    for(let cat of data){
        const categoryDiv = document.createElement('li')
        categoryDiv.innerHTML = `
          <button class="btn" onclick="loadproductbycat('${cat}')">${cat}</button>`;
        list.appendChild(categoryDiv)
    }
    
}


function loadallProducts() {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
  console.log(data);
  showallproduct(data);})
  .catch(error => console.log(error))
}

function showallproduct(data){
    const cart = document.getElementById("productscart")

    cart.innerHTML =  ``
    for(let product of data){
        const cartdiv = document.createElement('div')
        cartdiv.innerHTML = `
        <div
              class="flex flex-col rounded-xl bg-white justify-center items-center p-5 gap-5"
            >
              <img
                class="w-80 h-80 rounded-xl bg-gray-400 p-10"
                src=${product.image}
                
              />
              <div>
                <div class="flex items-center justify-between mb-7">
                  <p class="bg-blue-100 text-blue-800 p-1 rounded-xl pl-2 pr-2">
                    ${product.category}
                  </p>
                  <div class="flex">
                    <svg
                      class="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(240,187,64,1)"
                    >
                      <path
                        d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      ></path>
                    </svg>
                    <p>${product.rating.rate} (${product.rating.count})</p>
                  </div>
                </div>
                <p class="text-xl">${product.title}</p>
                <h1 class="text-2xl font-bold">$ ${product.price}</h1>
                <div class="flex justify-between items-center mt-5">
                  <button class="btn p-5 w-40 text-lg">Details</button>
                  <button class="btn btn-primary w-40 text-lg">
                    <svg
                      class="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path
                        d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"
                      ></path>
                    </svg>
                    Add
                  </button>
                </div>
              </div>
            </div>  `;
        cart.appendChild(cartdiv)
    }
}


function loadproductbycat (category) {
  fetch( `https://fakestoreapi.com/products/category/${category}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    showcatproduct(data);})
}

function showcatproduct(data){
    const cart = document.getElementById("productscart")

    cart.innerHTML =  ``
    for(let product of data){
        const cartdiv = document.createElement('div')
        cartdiv.innerHTML = `
        <div
              class="flex flex-col rounded-xl bg-white justify-center items-center p-5 gap-5"
            >
              <img
                class="w-80 h-80 rounded-xl bg-gray-400 p-10"
                src=${product.image}
                
              />
              <div>
                <div class="flex items-center justify-between mb-7">
                  <p class="bg-blue-100 text-blue-800 p-1 rounded-xl pl-2 pr-2">
                    ${product.category}
                  </p>
                  <div class="flex">
                    <svg
                      class="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(240,187,64,1)"
                    >
                      <path
                        d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"
                      ></path>
                    </svg>
                    <p>${product.rating.rate} (${product.rating.count})</p>
                  </div>
                </div>
                <p class="text-xl">${product.title}</p>
                <h1 class="text-2xl font-bold">$ ${product.price}</h1>
                <div class="flex justify-between items-center mt-5">
                  <button class="btn p-5 w-40 text-lg">Details</button>
                  <button class="btn btn-primary w-40 text-lg">
                    <svg
                      class="w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path
                        d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"
                      ></path>
                    </svg>
                    Add
                  </button>
                </div>
              </div>
            </div>  `;
        cart.appendChild(cartdiv)
    }
}