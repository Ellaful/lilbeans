console.log('Add to cart script loaded');

const images = {
    ludbud: '../assets/images/ludwig-real.webp',
    toast: '../assets/images/toast-real.webp',
    sprout: '../assets/images/sprout-real.webp',
    mr: '../assets/images/mr-real.webp',
    lily: '../assets/images/lily-real.webp',
}

document.addEventListener('DOMContentLoaded', function () {
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (!addToCartBtn) return;

    addToCartBtn.addEventListener('click', function () {
        // Get product info from the DOM
        const name = document.querySelector('.product-title').textContent.trim();
        const price = parseFloat(document.querySelector('.product-price').textContent.replace('$', ''));
        const quantity = parseInt(document.querySelector('.qty-value').textContent);

        // Use a unique id for each product (e.g. from the filename)
        const id = window.location.pathname.split('/').pop().replace('.html', '');

        // Get or create cart array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Get image from images object
        const image = images[id];

        // Check if product already in cart
        let existing = cart.find(item => item.id === id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            cart.push({ id, name, price, image, quantity });
        }

        // Save back to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Change cart icon if present
        updateCartIcon(true);

        // Optional: feedback
        alert(`${name} added to cart!`);
    });
});