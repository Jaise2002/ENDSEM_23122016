// Load cart items from local storage and display them
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    
    let totalAmount = 0;
    
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button class="remove-item" data-index="${index}">Remove</button> <!-- Remove button added here -->
        `;
        cartItemsContainer.appendChild(cartItem);
        totalAmount += item.price;
    });
    
    totalAmountElement.innerText = totalAmount.toFixed(2);

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            removeItemFromCart(index);
        });
    });
});

// Function to remove item from cart
function removeItemFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1); // Remove item at the specified index
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update local storage
    location.reload(); // Reload the page to refresh the cart display
}

// Show payment popup
function showPaymentPopup() {
    document.getElementById('payment-popup').style.display = 'flex';
}

// Close payment popup
function closePaymentPopup() {
    document.getElementById('payment-popup').style.display = 'none';
}

// Confirm payment
function confirmPayment() {
    alert('Payment confirmed! Thank you for your purchase.');
    closePaymentPopup();
    localStorage.removeItem('cartItems'); // Clear cart after payment
    location.reload(); // Reload the page to update the cart
}
