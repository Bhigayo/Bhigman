function calculateTotal() {
    var products = document.querySelectorAll('.product');
    var totalPrice = 0;

    products.forEach(function(product) {
        var priceText = product.querySelector('.product-price').textContent;
        var price = parseFloat(priceText.replace('$', ''));
        totalPrice += price;
    });

    document.getElementById('total-price').textContent = '$' + totalPrice.toFixed(2);
}
