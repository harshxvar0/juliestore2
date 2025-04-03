// Shopping Cart Functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add to cart function
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Animation feedback
    button.textContent = 'Added!';
    button.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
      button.textContent = 'ADD TO CART';
      button.style.backgroundColor = '';
    }, 2000);
  });
});

// Mobile menu toggle (for future enhancement)
const mobileMenuToggle = () => {
  // Can be expanded for mobile responsiveness
  console.log('Mobile menu toggle ready for implementation');
};