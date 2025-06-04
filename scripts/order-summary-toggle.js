document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.order-summary-toggle');
  const content = document.getElementById('order-summary-content');
  const totalElem = document.querySelector('.order-summary-total');
  const countrySelect = document.querySelector('select[name="country"]');

  function getShipping(country) {
    if (country === 'au') return 10;
    if (country === 'us') return 2;
    if (country === 'jp') return 5;
    return 0;
  }

  function updateOrderSummaryTotal() {
    if (!totalElem) return;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let country = countrySelect ? countrySelect.value : '';
    let shipping = getShipping(country);
    let total = subtotal + shipping;
    totalElem.textContent = `$${total.toFixed(2)}`;
  }

  if (toggle && content) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      content.hidden = expanded;
    });
  }

  // Update on page load
  updateOrderSummaryTotal();

  // Update when country changes
  if (countrySelect) {
    countrySelect.addEventListener('change', updateOrderSummaryTotal);
  }
});