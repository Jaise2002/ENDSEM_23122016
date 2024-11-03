document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Here you can add authentication logic (e.g., checking credentials)

    // For this example, simply redirect to index.html
    window.location.href = 'index.html';
});
