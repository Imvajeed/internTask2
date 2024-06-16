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
                cartCard.classList.add('cart-card');
                cartCard.innerHTML = `
                    <img src="${product.product_image_url}" alt="${product.product_name}">
                    <h2>${product.product_name}</h2>
                    <p>$${product.product_price}</p>
                    <div>
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <p>Total: $${(product.product_price * item.quantity).toFixed(2)}</p>
                `;
                cartList.appendChild(cartCard);
                totalValue += product.product_price * item.quantity;
                document.getElementById('total-value').textContent = totalValue.toFixed(2);
            });
    });
}



loadCart();
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
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Checkout process started!');
});
