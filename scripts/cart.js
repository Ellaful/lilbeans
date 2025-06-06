console.log('cart script loaded');

let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartIcon(cart.length > 0);

document.addEventListener('DOMContentLoaded', function () {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                alert("Your cart is empty. Add items before checking out.");
            } else {
                window.location.href = '../cart/checkout.html';
            }
        });
    }
});


if (document.querySelector('.cart--items')) {
    document.addEventListener('DOMContentLoaded', renderCart);

    function renderCart() {
        const cartTable = document.querySelector('.cart--items');
        const checkoutTotal = document.querySelector('.checkout-total');
        const cartIcon = document.querySelector('.shopping-cart-icon');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Remove old cart rows (except header)
        cartTable.querySelectorAll('tr.cart-row').forEach(row => row.remove());

        if (cart.length === 0) {
            // Show empty message
            const emptyRow = document.createElement('tr');
            emptyRow.className = 'cart-row';
            emptyRow.innerHTML = `<td colspan="3" style="text-align:center; padding:2em;">There are currently no items in cart</td>`;
            cartTable.appendChild(emptyRow);
            checkoutTotal.textContent = '$0.00';
            return;
        }

        let total = 0;
        cart.forEach((item, idx) => {
            total += item.price * item.quantity;
            const row = document.createElement('tr');
            row.className = 'cart-row';
            row.innerHTML = `
            <td class="cart-product">
                <a href="../products/${item.id}.html">
                    <img src="${item.image}" alt="${item.name}" class="cart-product-img">
                </a>
                <div class="cart-product-details desktop-only">
                    <h3 class="cart-product-desc desktop-only">${item.name}</h3>
                    <p class="cart-product-desc desktop-only">$${item.price.toFixed(2)}</p>
                </div>
                
            </td>
            <td>
                <div class="cart-product-details mobile-only">
                    <h3 class="cart-product-desc mobile-only">${item.name}</h3>
                    <p class="cart-product-desc mobile-only">$${item.price.toFixed(2)}</p>
                </div>

                <div class="cart-qty-col">
                    <div class="quantity-controls">
                        <button class="qty-btn left" aria-label="Decrease quantity"><svg width="18" height="29"
                                viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.0898 12.3737C17.6726 12.9428 18 13.7142 18 14.5185C18 15.3228 17.6726 16.0942 17.0898 16.6633L5.35414 28.1115C4.77028 28.6806 3.97849 29.0002 3.15298 29C2.74422 28.9999 2.33949 28.9213 1.96189 28.7687C1.58428 28.6161 1.24121 28.3924 0.952242 28.1105C0.663277 27.8286 0.434084 27.4939 0.277748 27.1256C0.121414 26.7573 0.0409987 26.3626 0.0410941 25.964C0.0411914 25.5654 0.121798 25.1707 0.278311 24.8025C0.434824 24.4342 0.664177 24.0997 0.953278 23.8179L10.4874 14.5185L0.951204 5.21911C0.653811 4.93927 0.416546 4.60448 0.253254 4.23426C0.0899623 3.86405 0.00391611 3.46583 0.000131967 3.06284C-0.00365218 2.65986 0.074902 2.26017 0.231213 1.8871C0.387526 1.51403 0.61846 1.17506 0.91055 0.889958C1.20264 0.604855 1.55003 0.379334 1.93245 0.226553C2.31487 0.073773 2.72466 -0.00320759 3.13792 0.000103605C3.55117 0.0034148 3.95962 0.0869472 4.33941 0.245835C4.71921 0.404721 5.06275 0.635777 5.35 0.925521L17.0939 12.3737L17.0898 12.3737Z"
                                    fill="currentColor" />
                            </svg></button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn right" aria-label="Increase quantity"><svg width="18" height="29"
                                viewBox="0 0 18 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M17.0898 12.3737C17.6726 12.9428 18 13.7142 18 14.5185C18 15.3228 17.6726 16.0942 17.0898 16.6633L5.35414 28.1115C4.77028 28.6806 3.97849 29.0002 3.15298 29C2.74422 28.9999 2.33949 28.9213 1.96189 28.7687C1.58428 28.6161 1.24121 28.3924 0.952242 28.1105C0.663277 27.8286 0.434084 27.4939 0.277748 27.1256C0.121414 26.7573 0.0409987 26.3626 0.0410941 25.964C0.0411914 25.5654 0.121798 25.1707 0.278311 24.8025C0.434824 24.4342 0.664177 24.0997 0.953278 23.8179L10.4874 14.5185L0.951204 5.21911C0.653811 4.93927 0.416546 4.60448 0.253254 4.23426C0.0899623 3.86405 0.00391611 3.46583 0.000131967 3.06284C-0.00365218 2.65986 0.074902 2.26017 0.231213 1.8871C0.387526 1.51403 0.61846 1.17506 0.91055 0.889958C1.20264 0.604855 1.55003 0.379334 1.93245 0.226553C2.31487 0.073773 2.72466 -0.00320759 3.13792 0.000103605C3.55117 0.0034148 3.95962 0.0869472 4.33941 0.245835C4.71921 0.404721 5.06275 0.635777 5.35 0.925521L17.0939 12.3737L17.0898 12.3737Z"
                                    fill="currentColor"/>
                            </svg></button>
                    </div>
                    <div class="cart-remove" data-id="${item.id}">
                        <svg width="40" height="44" aria-label="remove from cart" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8946 4.55172H16.7886C16.3837 4.55172 15.9955 4.71158 15.7092 4.99611C15.4229 5.28065 15.2621 5.66657 15.2621 6.06897V7.58621H24.4211V6.06897C24.4211 5.66657 24.2603 5.28065 23.974 4.99611C23.6878 4.71158 23.2995 4.55172 22.8946 4.55172ZM29.0007 7.58621V6.06897C29.0007 4.45938 28.3574 2.91571 27.2123 1.77756C26.0672 0.639407 24.5141 0 22.8946 0H16.7886C15.1692 0 13.6161 0.639407 12.471 1.77756C11.3258 2.91571 10.6825 4.45938 10.6825 6.06897V7.58621H2.28977C1.68248 7.58621 1.10007 7.82598 0.670658 8.25279C0.241243 8.6796 0 9.25847 0 9.86207C0 10.4657 0.241243 11.0445 0.670658 11.4713C1.10007 11.8982 1.68248 12.1379 2.28977 12.1379H3.24231L4.21012 35.2759C4.3086 37.6229 5.31604 39.8412 7.02183 41.467C8.72762 43.0929 10.9997 44.0005 13.3631 44H26.3232C28.686 43.9997 30.9574 43.0918 32.6625 41.466C34.3676 39.8402 35.3746 37.6223 35.4731 35.2759L36.444 12.1379H37.3965C38.0038 12.1379 38.5862 11.8982 39.0156 11.4713C39.445 11.0445 39.6863 10.4657 39.6863 9.86207C39.6863 9.25847 39.445 8.6796 39.0156 8.25279C38.5862 7.82598 38.0038 7.58621 37.3965 7.58621H29.0007ZM31.8583 12.1379H7.8249L8.78661 35.0847C8.83546 36.2585 9.33901 37.368 10.1919 38.1812C11.0449 38.9945 12.1811 39.4485 13.3631 39.4483H26.3232C27.5046 39.4477 28.6401 38.9934 29.4924 38.1802C30.3447 37.367 30.8478 36.2579 30.8966 35.0847L31.8583 12.1379ZM12.9723 18.2069V33.3793C12.9723 33.9829 13.2135 34.5618 13.643 34.9886C14.0724 35.4154 14.6548 35.6552 15.2621 35.6552C15.8694 35.6552 16.4518 35.4154 16.8812 34.9886C17.3106 34.5618 17.5518 33.9829 17.5518 33.3793V18.2069C17.5518 17.6033 17.3106 17.0244 16.8812 16.5976C16.4518 16.1708 15.8694 15.931 15.2621 15.931C14.6548 15.931 14.0724 16.1708 13.643 16.5976C13.2135 17.0244 12.9723 17.6033 12.9723 18.2069ZM24.4211 15.931C25.0284 15.931 25.6108 16.1708 26.0403 16.5976C26.4697 17.0244 26.7109 17.6033 26.7109 18.2069V33.3793C26.7109 33.9829 26.4697 34.5618 26.0403 34.9886C25.6108 35.4154 25.0284 35.6552 24.4211 35.6552C23.8139 35.6552 23.2315 35.4154 22.802 34.9886C22.3726 34.5618 22.1314 33.9829 22.1314 33.3793V18.2069C22.1314 17.6033 22.3726 17.0244 22.802 16.5976C23.2315 16.1708 23.8139 15.931 24.4211 15.931Z" 
                            fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </td>
            <td class="cart-total desktop-only">$${(item.price * item.quantity).toFixed(2)}</td>
        `;
            cartTable.appendChild(row);
        });
        checkoutTotal.textContent = `$${total.toFixed(2)}`;
        if (cartIcon) cartIcon.classList.add('cart-has-item');

        // Add remove event listeners
        cartTable.querySelectorAll('.cart-remove').forEach(removeBtn => {
            removeBtn.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                cart = cart.filter(item => item.id !== id);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartIcon(cart.length > 0);
                renderCart();
            });
        });

        attachCartQtyListeners();
    }
}

// Function to attach quantity button listeners
function attachCartQtyListeners() {
    document.querySelectorAll('.cart-row').forEach(row => {
        const leftBtn = row.querySelector('.qty-btn.left');
        const rightBtn = row.querySelector('.qty-btn.right');
        const value = row.querySelector('.qty-value');
        const id = row.querySelector('.cart-remove').getAttribute('data-id');
        if (leftBtn && rightBtn && value) {
            leftBtn.addEventListener('click', () => {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                let item = cart.find(i => i.id === id);
                if (item && item.quantity > 1) {
                    item.quantity -= 1;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                }
            });
            rightBtn.addEventListener('click', () => {
                let cart = JSON.parse(localStorage.getItem('cart')) || [];
                let item = cart.find(i => i.id === id);
                if (item) {
                    item.quantity += 1;
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                }
            });
        }
    });
}

