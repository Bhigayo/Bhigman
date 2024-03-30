document.addEventListener('DOMContentLoaded', function () {
    // Function to handle add to cart button click
    function handleAddToCartClick(event) {
        const productName = event.target.dataset.name;
        const productPrice = parseFloat(event.target.dataset.price);
        addToCart(productName, productPrice); // Add product to cart
        displayMessage(productName); // Display message
    }

    // Add event listener to all add to cart buttons
    const addToCartButtons = document.querySelectorAll('.p-card input[type="button"]');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCartClick);
    });
});
