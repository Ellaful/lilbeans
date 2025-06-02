document.addEventListener('DOMContentLoaded', function () {
    const summaryItems = document.querySelector('.summary-items');
    const summaryShipping = document.querySelector('.summary-shipping');
    const summaryTotal = document.querySelector('.summary-total');
    const countrySelect = document.querySelector('select[name="country"]');

    function getShipping(country) {
        if (country === 'au') return 10;
        if (country === 'us') return 2;
        if (country === 'jp') return 5;
        return 0;
    }

    function renderSummary() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let country = countrySelect ? countrySelect.value : '';
        let shipping = getShipping(country);

        // Render items
        summaryItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" width="48" height="48">
                <div class="cart-item-details">
                    <h3>${item.name} x${item.quantity}</h3>
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
        `).join('');

        // Calculate subtotal
        let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        // Show subtotal
        let subtotalRow = `
            <div class="summary-row subtotal">
                <p>Subtotal</p>
                <p>$${subtotal.toFixed(2)}</p>
            </div>
        `;

        // Show shipping
        let shippingRow = '';
        if (!country || country === 'placeholder') {
            shippingRow = `
                <div class="summary-row shipping">
                    <p>Shipping</p>
                    <p>Enter shipping address</p>
                </div>
            `;
        } else {
            shippingRow = `
                <div class="summary-row shipping">
                    <p>Shipping</p>
                    <p>$${shipping.toFixed(2)}</p>
                </div>
            `;
        }
        summaryShipping.innerHTML = subtotalRow + shippingRow;

        // Show total
        let total = (!country || country === 'placeholder') ? subtotal : subtotal + shipping;
        summaryTotal.innerHTML = `
            <div class="summary-row total">
                <p>Total</p>
                <p>$${total.toFixed(2)}</p>
            </div>
        `;
    }

    // Initial render
    renderSummary();

    // Update summary when country changes
    if (countrySelect) {
        countrySelect.addEventListener('change', renderSummary);
    }
});