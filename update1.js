// Shopping Cart
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        button.textContent = 'ADDED!';
        setTimeout(() => {
            button.textContent = 'ADD TO CART';
        }, 2000);
    });
});

// Category Filtering
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        if (category === 'all') {
            product.style.display = 'block';
        } else {
            product.style.display = product.dataset.category === category ? 'block' : 'none';
        }
    });
}