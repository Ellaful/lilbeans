console.log('gallery.js loaded');

const imageUrls = window.productGalleryImages || [];
if (!imageUrls.length) {
    console.warn('No gallery images found for this product.');
}

let currentMainIndex = 0;
let thumbStart = 0;

const mainImage = document.querySelector('.main-image');
const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
const upArrow = document.querySelector('.gallery-arrow.left');
const downArrow = document.querySelector('.gallery-arrow.right');

function renderThumbnails() {
    thumbnailsContainer.innerHTML = '';
    for (let i = thumbStart; i < Math.min(thumbStart + 4, imageUrls.length); i++) {
        const img = document.createElement('img');
        img.src = imageUrls[i];
        img.alt = `Product image ${i+1}`;
        img.className = 'thumb' + (i === currentMainIndex ? ' active' : '');
        img.addEventListener('click', () => {
            currentMainIndex = i;
            mainImage.src = imageUrls[i];
            renderThumbnails();
        });
        thumbnailsContainer.appendChild(img);
    }
}

if (mainImage && thumbnailsContainer && upArrow && downArrow && imageUrls.length) {
    mainImage.src = imageUrls[currentMainIndex];
    renderThumbnails();

    upArrow.addEventListener('click', () => {
        if (currentMainIndex > 0) {
            currentMainIndex--;
            if (currentMainIndex < thumbStart) {
                thumbStart = currentMainIndex;
            }
            mainImage.src = imageUrls[currentMainIndex];
            renderThumbnails();
        }
    });

    downArrow.addEventListener('click', () => {
        if (currentMainIndex < imageUrls.length - 1) {
            currentMainIndex++;
            if (currentMainIndex > thumbStart + 3) {
                thumbStart = currentMainIndex - 3;
            }
            mainImage.src = imageUrls[currentMainIndex];
            renderThumbnails();
        }
    });
}