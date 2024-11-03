let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert(`${productName} has been added to your cart!`);
}

function openPaymentPopup() {
    document.getElementById('payment-popup').style.display = 'flex';
}

function closePaymentPopup() {
    document.getElementById('payment-popup').style.display = 'none';
}

function submitPayment(event) {
    event.preventDefault();
    alert('Payment submitted successfully!');
    closePaymentPopup();
}

function openLoginForm() {
    document.getElementById('login-popup').style.display = 'flex';
}

function closeLoginPopup() {
    document.getElementById('login-popup').style.display = 'none';
}

function openRegisterForm() {
    document.getElementById('register-popup').style.display = 'flex';
}

function closeRegisterPopup() {
    document.getElementById('register-popup').style.display = 'none';
}

function submitLogin(event) {
    event.preventDefault();
    alert('Login successful!');
    closeLoginPopup();
}

function submitRegister(event) {
    event.preventDefault();
    alert('Registration successful!');
    closeRegisterPopup();
}

function filterProducts() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
