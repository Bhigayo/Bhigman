//   --﷽--

// selecting all necessary dom element

//select for menu
const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");

//select for menu image
const catagory = document.querySelectorAll(".catagory input");
const cataImg = document.querySelector("#c-img");

// select for connect section with nav item
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

// event listener for toggle menu
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("fa-times");
  menuBar.classList.toggle("active");
  navbar.classList.toggle("active");
});

// scroll event
document.addEventListener("scroll", () => {
  menuBar.classList.remove("fa-times");
  menuBar.classList.remove("active");
  navbar.classList.remove("active");

  // conect With nav link
  connectSecWithNavLink();
});

// controlling menu image
catagory.forEach((element) => {
  element.addEventListener("click", () => {
    catagory.forEach((ele) => {
      ele.classList.remove("active");
    });

    let values = element.value;
    element.classList.add("active");
    cataImg.src = `./images/menu-${values}.jpg`;
  });
});

// handeling scroll event and mar nav item
const connectSecWithNavLink = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    let linkAttribute = link.attributes.href.value;
    link.classList.remove("active");

    if (linkAttribute === `#${current}`) {
      link.classList.add("active");
    }
  });
};
let cartItems = []; // Initialize an empty array to store cart items

function addToCartClicked(event) {
    const button = event.target;
    const product = button.parentElement;
    const productName = product.querySelector('h4').innerText;
    const productPrice = parseFloat(product.querySelector('.price').innerText.replace('$', ''));

    addToCart(productName, productPrice);
}

function addToCart(name, price) {
    const cartItem = {
        name: name,
        price: price
    };
    cartItems.push(cartItem); // Add the cart item to the array
    updateCartCount(); // Update the cart count in the navbar
    renderCart(); // Render the cart items on the cart page
}

function renderCart() {
    const cartContainer = document.querySelector('.cart');
    cartContainer.innerHTML = ''; // Clear the cart container

    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('product');
        cartItemElement.innerHTML = `
            <img src="images/${item.name}.png" alt="${item.name}">
            <div class="product-details">
                <p class="product-name">${item.name}</p>
                <p class="product-price">$${item.price.toFixed(2)}</p>
            </div>
        `;
        cartContainer.appendChild(cartItemElement);
    });

    updateTotal();
}

function updateTotal() {
    const totalContainer = document.querySelector('.total span');
    let total = 0;
    cartItems.forEach(item => {
        total += item.price;
    });
    totalContainer.innerText = '$' + total.toFixed(2);
}

function updateCartCount() {
    const cartCountElement = document.querySelector('#cart-count');
    cartCountElement.innerText = cartItems.length; // Update the cart count with the number of items in the cart
}





// happy coding!!!!
// this project made by Fahad at 27th April, 2022.
