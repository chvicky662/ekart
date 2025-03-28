// Product Data with Online Images
const products = [
    { name: "Laptop", price: 799, image: "https://m.media-amazon.com/images/I/81N2OKwpX0L._AC_UY218_.jpg" },
    { name: "Earbuds", price: 99, image: "https://m.media-amazon.com/images/I/71xkMAwtaHL._AC_UY218_.jpg" },
    { name: "Smartphone", price: 499, image: "https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_UY218_.jpg" },
    { name: "Smartwatch", price: 199, image: "https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_UY218_.jpg" },
    { name: "Bluetooth Speaker", price: 129, image: "https://m.media-amazon.com/images/I/71JW8xWXshL._AC_UY218_.jpg" },
    { name: "Gaming Headset", price: 149, image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg" },
    { name: "Wireless Keyboard", price: 59, image: "https://m.media-amazon.com/images/I/71cNGqM9dWL._AC_UY218_.jpg" },
    { name: "Wireless Mouse", price: 39, image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY218_.jpg" },
    { name: "Smart TV", price: 899, image: "https://m.media-amazon.com/images/I/81J9gP9R1JL._AC_UY218_.jpg" },
    { name: "Portable Hard Drive", price: 79, image: "https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_UY218_.jpg" }
];

// Load Products
function loadProducts() {
    const productSection = document.getElementById("electronics-section");
    productSection.innerHTML = "";
    
    products.forEach((product) => {
        productSection.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name} - $${product.price}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            </div>
        `;
    });
}

// Cart Functionality
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("total");
    cartItems.innerHTML = "";
    
    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice += item.price;
        cartItems.innerHTML += `<li>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">❌</button></li>`;
    });

    total.innerText = totalPrice;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Search Function
function searchProducts() {
    let query = document.getElementById("search").value.toLowerCase();
    const productSection = document.getElementById("electronics-section");
    productSection.innerHTML = "";

    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
    
    filteredProducts.forEach((product) => {
        productSection.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name} - $${product.price}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            </div>
        `;
    });
}

// Checkout Function
function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
}

// Load Products on Page Load
document.addEventListener("DOMContentLoaded", loadProducts);
