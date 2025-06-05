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

document.addEventListener('DOMContentLoaded', function() {
  // Load search popup HTML
  fetch('../search-popup.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('search-popup-container').innerHTML = html;

      // Add open/close logic
      const searchIcon = document.querySelector('.search-icon');
      const searchPopup = document.getElementById('search-popup');
      const closeBtn = document.querySelector('.close-btn');

      if (searchIcon && searchPopup) {
        searchIcon.addEventListener('click', () => {
          searchPopup.classList.add('active');
        });
      }
      if (closeBtn && searchPopup) {
        closeBtn.addEventListener('click', () => {
          searchPopup.classList.remove('active');
        });
      }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Load mobile menu HTML
  fetch('../mobile-menu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('mobile-menu-container').innerHTML = html;

      const navBtn = document.querySelector('.nav-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const closeBtn = document.querySelector('.mobile-menu .close-btn');

      if (navBtn && mobileMenu && closeBtn) {
        navBtn.addEventListener('click', () => {
          mobileMenu.classList.add('open');
        });
        closeBtn.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
          if (
            mobileMenu.classList.contains('open') &&
            !mobileMenu.contains(event.target) &&
            !navBtn.contains(event.target)
          ) {
            mobileMenu.classList.remove('open');
          }
        });
      }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Load mobile search popup HTML
  fetch('../mobile-search-popup.html')
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML('beforeend', html);

      const mobileSearchPopup = document.getElementById('mobile-search-popup');
      const closeBtn = mobileSearchPopup.querySelector('.close-btn');

      // Close popup on close button
      closeBtn.addEventListener('click', () => {
        mobileSearchPopup.classList.remove('active');
      });

      // Close popup when clicking outside
      document.addEventListener('click', function(event) {
        if (
          mobileSearchPopup.classList.contains('active') &&
          !mobileSearchPopup.contains(event.target) &&
          !(event.target.closest('.mobile-menu a[href="#"]')) // allow search link to open it
        ) {
          mobileSearchPopup.classList.remove('active');
        }
      });
    });

  // Load mobile menu HTML
  fetch('../mobile-menu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('mobile-menu-container').innerHTML = html;

      const navBtn = document.querySelector('.nav-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const closeBtn = document.querySelector('.mobile-menu .close-btn');

      if (navBtn && mobileMenu && closeBtn) {
        navBtn.addEventListener('click', () => {
          mobileMenu.classList.add('open');
        });
        closeBtn.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
          if (
            mobileMenu.classList.contains('open') &&
            !mobileMenu.contains(event.target) &&
            !navBtn.contains(event.target)
          ) {
            mobileMenu.classList.remove('open');
          }
        });

        // Open mobile search popup when "Search" is clicked
        const searchLink = mobileMenu.querySelector('a[href="#"]');
        if (searchLink) {
          searchLink.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.remove('open');
            const mobileSearchPopup = document.getElementById('mobile-search-popup');
            if (mobileSearchPopup) {
              mobileSearchPopup.classList.add('active');
            }
          });
        }
      }
    });
});