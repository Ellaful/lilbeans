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

document.addEventListener('DOMContentLoaded', function () {

  // Search popup
  const searchIcon = document.querySelector('.search-icon');
  const searchPopup = document.getElementById('search-popup');
  const searchCloseBtn = searchPopup?.querySelector('.close-btn');

  if (searchIcon && searchPopup && searchCloseBtn) {
    searchIcon.addEventListener('click', () => {
      searchPopup.classList.add('active');
    });
    searchCloseBtn.addEventListener('click', () => {
      searchPopup.classList.remove('active');
    });
  }

  // Mobile menu
  const navBtn = document.querySelector('.nav-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileCloseBtn = mobileMenu?.querySelector('.close-btn');

  if (navBtn && mobileMenu && mobileCloseBtn) {
    navBtn.addEventListener('click', () => {
      mobileMenu.classList.add('open');
    });

    mobileCloseBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });

    document.addEventListener('click', function (event) {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(event.target) &&
        !navBtn.contains(event.target)
      ) {
        mobileMenu.classList.remove('open');
      }
    });

    // Mobile search link inside menu
    const mobileSearchLink = mobileMenu.querySelector('a[href="#"]');
    const mobileSearchPopup = document.getElementById('mobile-search-popup');

    if (mobileSearchLink && mobileSearchPopup) {
      mobileSearchLink.addEventListener('click', function (e) {
        e.preventDefault();
        mobileMenu.classList.remove('open');
        mobileSearchPopup.classList.add('active');
      });
    }
  }

  // Mobile search popup
  const mobileSearchPopup = document.getElementById('mobile-search-popup');
  const mobileSearchCloseBtn = mobileSearchPopup?.querySelector('.close-btn');

  if (mobileSearchPopup && mobileSearchCloseBtn) {
    mobileSearchCloseBtn.addEventListener('click', () => {
      mobileSearchPopup.classList.remove('active');
    });

    document.addEventListener('click', function (event) {
      if (
        mobileSearchPopup.classList.contains('active') &&
        !mobileSearchPopup.contains(event.target) &&
        !(event.target.closest('.mobile-menu a[href="#"]'))
      ) {
        mobileSearchPopup.classList.remove('active');
      }
    });
  }
});
