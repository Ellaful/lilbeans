console.log('main.js loaded');

function updateCartIcon(hasItem) {
    // updates the cart icon based on whether there are items in the cart
    console.log('updateCartIcon called, hasItem:', hasItem);
    const emptyIcon = document.querySelector('.shopping-cart-icon.cart-empty');
    const fullIcon = document.querySelector('.shopping-cart-icon.cart-full');
    if (emptyIcon && fullIcon) {
        if (hasItem) {
            emptyIcon.style.display = "none";
            fullIcon.style.display = "inline";
        } else {
            emptyIcon.style.display = "inline";
            fullIcon.style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartIcon(cart.length > 0);
});