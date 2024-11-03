// Handle search functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
});

// Handle add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.parentElement;
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = parseFloat(productCard.getAttribute('data-price'));

        // Add item to local storage or cart logic here
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push({ name: productName, price: productPrice });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        alert(`${productName} has been added to your cart.`);
    });
});
