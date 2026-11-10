/**
 * ZEE EATERY — GALLERY FILTER & LIGHTBOX ENGINE
 * Handles interactive menu categories and full-featured luxury modal lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.gallery-filter-bar .filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid .gallery-item');
  const lightbox = document.getElementById('luxuryLightbox');

  if (!galleryItems.length) return;

  let currentVisibleItems = Array.from(galleryItems);
  let currentIndex = 0;

  // --------------------------------------------------------------------------
  // 1. CATEGORY FILTERING
  // --------------------------------------------------------------------------
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Active button toggle
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        currentVisibleItems = [];
        galleryItems.forEach(item => {
          const categories = (item.getAttribute('data-category') || '').split(' ');
          if (filterValue === 'all' || categories.includes(filterValue)) {
            item.classList.remove('hide');
            currentVisibleItems.push(item);
          } else {
            item.classList.add('hide');
          }
        });
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. LIGHTBOX MODAL
  // --------------------------------------------------------------------------
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img-box img');
  const lightboxCategory = lightbox.querySelector('.lightbox-category');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDesc = lightbox.querySelector('.lightbox-desc');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');
  const btnClose = lightbox.querySelector('.lightbox-close');
  const btnPrev = lightbox.querySelector('.lightbox-btn.prev');
  const btnNext = lightbox.querySelector('.lightbox-btn.next');

  function openLightbox(index) {
    if (!currentVisibleItems.length) return;
    currentIndex = (index + currentVisibleItems.length) % currentVisibleItems.length;

    const item = currentVisibleItems[currentIndex];
    const imgEl = item.querySelector('img');
    const titleEl = item.querySelector('.gallery-item-title');
    const descEl = item.querySelector('.gallery-item-desc');
    const tagEl = item.querySelector('.gallery-item-tag');

    lightboxImg.src = imgEl.src;
    lightboxImg.alt = imgEl.alt || 'Zee Eatery fine dining presentation';
    lightboxCategory.textContent = tagEl ? tagEl.textContent : 'Fine Dining';
    lightboxTitle.textContent = titleEl ? titleEl.textContent : 'Culinary Masterpiece';
    lightboxDesc.textContent = descEl ? descEl.textContent : '';
    lightboxCounter.textContent = `${currentIndex + 1} / ${currentVisibleItems.length}`;

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showNext() {
    openLightbox(currentIndex + 1);
  }

  function showPrev() {
    openLightbox(currentIndex - 1);
  }

  // Click on gallery item to open lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = currentVisibleItems.indexOf(item);
      if (idx !== -1) {
        openLightbox(idx);
      }
    });
  });

  if (btnClose) btnClose.addEventListener('click', closeLightbox);
  if (btnNext) btnNext.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
  if (btnPrev) btnPrev.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

  // Click outside image box to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
