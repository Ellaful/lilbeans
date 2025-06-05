document.addEventListener('DOMContentLoaded', function () {
    const checkoutForm = document.querySelector('.checkout--form form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission
            
            // Clear the cart
            localStorage.removeItem('cart');

            window.location.href = '../cart/confirmation.html';
        });
    }
});