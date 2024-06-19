// Function to update the cart count in the header (optional)
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Function to load cart items and display them
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';

    let totalValue = 0;

    cart.forEach(item => {
        fetch(`http://localhost/products/pr/product_by_id.php?id=${item.id}`)
            .then(response => response.json())
            .then(product => {
                const cartCard = document.createElement('div');
                cartCard.classList.add('cart-item');
                cartCard.innerHTML = `
                    <img src="${product.product_image_url}" alt="${product.product_name}">
                    <div class="cart-item-details">
                        <h2>${product.product_name}</h2>
                        <p>250ml</p>
                        <p class="remove-all-link"><a onclick="removeFromCart(${item.id})">Remove</a></p>
                    </div>
                    <div class="cart-item-price">
                        <p>$${product.product_price}</p>
                        <div class="quantity-controls">
                            <button onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <p>Total: $<span>${(product.product_price * item.quantity).toFixed(2)}</span></p>
                    </div>
                `;
                cartList.appendChild(cartCard);
                totalValue += product.product_price * item.quantity;
                document.getElementById('total-value').textContent = totalValue.toFixed(2);
            });
    });
}

// Function to update the quantity of an item in the cart
function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex > -1) {
        cart[productIndex].quantity += change;
        if (cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
    updateCartCount();
}

// Event listener for the checkout button
document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout process started!');
    // Here you can add your checkout logic
});

// Load the cart and update the cart count on page load
loadCart();
updateCartCount();
