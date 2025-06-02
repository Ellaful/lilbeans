console.log('qty-btn.js loaded');

/* -------------------- Qty Btn ------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const qtyBox = document.querySelector('.product-quantity .quantity-controls');
    if (!qtyBox) return;
    const leftBtn = qtyBox.querySelector('.qty-btn.left');
    const rightBtn = qtyBox.querySelector('.qty-btn.right');
    const value = qtyBox.querySelector('.qty-value');
    let qty = parseInt(value.textContent);

    leftBtn.addEventListener('click', () => {
        if (qty > 1) {
            qty -= 1;
            value.textContent = qty;
        }
    });
    rightBtn.addEventListener('click', () => {
        qty += 1;
        value.textContent = qty;
    });
});