// Fetch all products and display them on the homepage
fetch('pr/all_products.php')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.product_image_url}" alt="${product.product_name}">
                <h2>${product.product_name}</h2>
                <p>$${product.product_price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
                <button onclick="viewProduct(${product.id})">View More</button>
            `;
            productList.appendChild(productCard);
        });
    });



if (window.location.pathname.includes('product.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    fetch(`http://localhost/products/pr/product_by_id.php?id=${productId}`)
        .then(response => response.json())
        .then(product => {
            const productDetails = document.getElementById('product-details');
            productDetails.innerHTML = `
                    <div class="product-card">
                        <img src="${product.product_image_url}" alt="${product.product_name}">
                        <h2>${product.product_name}</h2>
                        <p>Price: $${product.product_price}</p>
                        ${product.product_discount_price ? `<p>Discount Price: $${product.product_discount_price}</p>` : ''}
                        <p>Description: ${product.product_description}</p>
                        <button onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                `;
        });
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
function showCart(){
    window.location.href = `cart.html`;
}
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
    // Product details logic


    // Other existing functions...

}

updateCartCount();

// Product details logic
if (window.location.pathname.includes('product.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(`http://localhost/products/pr/product_by_id.php?id=${productId}`)
        .then(response => response.json())
        .then(product => {
            const productDetails = document.getElementById('product-details');
            productDetails.innerHTML = `
                <img src="${product.product_image_url}" alt="${product.product_name}">
                <h2>${product.product_name}</h2>
                <p>$${product.product_price}</p>
                <p>${product.product_description}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
        });
}

