let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" },
];

// Write a function to display the product information on the webpage dynamically.
function displayProducts() {
    let productsList = document.getElementById("productContainer");

    products.forEach((product) => {
        let productElement = document.createElement("div");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        productsList.appendChild(productElement);
    });
}

document.addEventListener("DOMContentLoaded", displayProducts);
