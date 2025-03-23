document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});

// Function to display products dynamically
function displayProducts(productList) {
    const container = document.getElementById("product-list");
    container.innerHTML = ""; // Clear previous results

    productList.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "p-4 border rounded-lg shadow-lg";

        productCard.innerHTML = `
            <img src="${product.image}" class="w-full h-45 object-cover rounded">
            <h3 class="text-lg font-bold mt-2">${product.name}</h3>
            <p><strong>Crop:</strong> ${product.crop}</p>
            <p><strong>Pest:</strong> ${product.pest}</p>
            <p><strong>Price:</strong> Rs. ${product.price}</p>
        `;

        container.appendChild(productCard);
    });
}

// Function to filter products based on user input
function filterProducts() {
    const cropFilter = document.getElementById("crop-filter").value.toLowerCase();
    const pestFilter = document.getElementById("pest-filter").value.toLowerCase();
    const maxPrice = document.getElementById("price-filter").value;

    let filtered = products.filter(product =>
        (cropFilter === "" || product.crop.toLowerCase().includes(cropFilter)) &&
        (pestFilter === "" || product.pest.toLowerCase().includes(pestFilter)) &&
        (maxPrice === "" || product.price <= maxPrice)
    );

    displayProducts(filtered);
}

// Function to sort products by price
function sortProducts(order) {
    let sorted = [...products];
    sorted.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    displayProducts(sorted);
}
