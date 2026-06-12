/* =============================================
   BERNARDO FLORES - Alternate Premium Portfolio
   Interactive & UI Logic (Cursor, Menu, Filters, Lightbox)
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initMobileMenu();
  initHeaderScroll();
  initScrollSpy();
  initLightbox();
  preventActionBubbling();
});

/* 防止 Action Buttons propagación hacia la tarjeta */
function preventActionBubbling() {
  document.querySelectorAll('.bento-actions a').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}

/* ── 1. Custom Cursor ── */
function initCustomCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  
  if (!dot || !ring) return;
  
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let isMoving = false;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isMoving = true;
    
    // Position dot immediately
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
    dot.style.opacity = '1';
  });
  
  // Animate the ring with smooth delay
  function animateRing() {
    const easing = 0.15;
    ringX += (mouseX - ringX) * easing;
    ringY += (mouseY - ringY) * easing;
    
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    
    if (isMoving) {
      ring.style.opacity = '1';
    }
    
    requestAnimationFrame(animateRing);
  }
  animateRing();
  
  // Hover effect on interactive elements
  function updateCursorTriggers() {
    const triggers = 'a, button, input, textarea, select, .wsite-social-item, .bento-item, .filter-btn, .lightbox-close-btn, .lightbox-nav-btn';
    document.querySelectorAll(triggers).forEach(el => {
      // Remove to prevent double binding
      el.removeEventListener('mouseenter', addHoverClass);
      el.removeEventListener('mouseleave', removeHoverClass);
      
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });
  }
  
  function addHoverClass() {
    document.body.classList.add('cursor-hovering');
  }
  
  function removeHoverClass() {
    document.body.classList.remove('cursor-hovering');
  }
  
  updateCursorTriggers();
  window.addEventListener('update-cursor-triggers', updateCursorTriggers);
}

/* ── 2. Mobile Menu & Backdrop ── */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const navBackdrop = document.getElementById('nav-backdrop');
  
  if (!hamburger || !mobileNav || !navBackdrop) return;
  
  function toggleMenu() {
    mobileNav.classList.toggle('open');
    navBackdrop.classList.toggle('active');
    document.body.classList.toggle('nav-open');
    
    // Toggle active state of hamburger lines
    const spans = hamburger.querySelectorAll('span');
    if (mobileNav.classList.contains('open')) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }
  
  hamburger.addEventListener('click', toggleMenu);
  navBackdrop.addEventListener('click', toggleMenu);
  
  // Close menu when clicking mobile links
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      navBackdrop.classList.remove('active');
      document.body.classList.remove('nav-open');
      hamburger.querySelectorAll('span').forEach(s => s.style.transform = 'none');
      hamburger.querySelectorAll('span')[1].style.opacity = '1';
    });
  });
}

/* ── 3. Float Header Scroll class ── */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ── 4. Bento Grid Portfolio Filters ── */
/* ── 4. ScrollSpy for Category Navigation ── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const filterLinks = document.querySelectorAll('.gallery-filters a');
  
  if (!sections.length || !filterLinks.length) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '-120px 0px -40% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    if (window.scrollY < 150) {
      filterLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#work-title');
      });
      return;
    }
    
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        filterLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => observer.observe(section));
  
  window.addEventListener('scroll', () => {
    if (window.scrollY < 150) {
      filterLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#work-title');
      });
    }
  });
}

/* ── 5. Lightbox Modal using HTML5 <dialog> ── */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  
  const modalImg = document.getElementById('lightbox-img');
  const modalTitle = document.getElementById('lightbox-title');
  const modalDesc = document.getElementById('lightbox-desc');
  const actionContainer = modal.querySelector('.lightbox-action-container');
  const closeBtn = modal.querySelector('.lightbox-close-btn');
  const prevBtn = modal.querySelector('.lightbox-nav-prev');
  const nextBtn = modal.querySelector('.lightbox-nav-next');
  
  let currentItems = [];
  let currentIndex = 0;
  
  // Close modal logic
  const closeModal = () => {
    modal.classList.remove('open');
    setTimeout(() => {
      modal.close();
    }, 200); // match transition speed
  };
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // Close when clicking outside content (on the backdrop)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Hook click events on gallery items
  function attachGalleryClicks() {
    const galleryItems = document.querySelectorAll('.bento-item[data-full], .gitem[data-full]');
    
    galleryItems.forEach(item => {
      item.style.cursor = 'pointer';
      
      // Remove old listener if re-attaching
      item.removeEventListener('click', openItemLightbox);
      item.addEventListener('click', openItemLightbox);
    });
  }
  
  function openItemLightbox(e) {
    // Avoid triggering if clicking direct links like "Case Study" or "Behance" buttons inside card
    if (e.target.closest('.bento-actions') || e.target.closest('a')) {
      return;
    }

    // Safeguard: if modal is already open or closing, force close it first
    if (modal.open) {
      modal.close();
      modal.classList.remove('open');
    }
    
    const clickedItem = e.currentTarget;
    const parentSection = clickedItem.closest('section');
    
    if (!parentSection) {
      currentItems = [clickedItem];
      currentIndex = 0;
    } else {
      // Scope navigation to items in the same section
      currentItems = Array.from(parentSection.querySelectorAll('.bento-item[data-full]'));
      currentIndex = currentItems.indexOf(clickedItem);
    }
    
    if (currentIndex === -1) {
      currentIndex = 0;
      currentItems = [clickedItem];
    }
    
    showLightboxItem();
    modal.showModal();
    // Add open class after showing to trigger CSS opacity transitions
    setTimeout(() => {
      modal.classList.add('open');
    }, 10);
  }
  
  function showLightboxItem() {
    if (currentIndex < 0 || currentIndex >= currentItems.length) return;
    
    const item = currentItems[currentIndex];
    const fullImgSrc = item.dataset.full;
    const captionText = item.dataset.caption || '';
    
    modalImg.style.opacity = '0';
    
    setTimeout(() => {
      modalImg.src = fullImgSrc;
      modalImg.onload = () => {
        modalImg.style.opacity = '1';
      };
      
      // Parse caption "Title|Description"
      if (captionText.includes('|')) {
        const parts = captionText.split('|');
        modalTitle.textContent = parts[0];
        modalDesc.textContent = parts[1];
      } else {
        modalTitle.textContent = captionText;
        modalDesc.textContent = '';
      }
      
      // Render action link if available
      const actionLink = item.dataset.link;
      const actionText = item.dataset.linkText || 'Ver proyecto';
      
      if (actionContainer) {
        if (actionLink) {
          const lang = localStorage.getItem('bf_lang') || 'es';
          const isEn = lang === 'en';
          let btnText = actionText;
          if (btnText.toLowerCase().includes('behance')) {
            btnText = isEn ? 'View on Behance' : 'Ver en Behance';
          } else if (btnText.toLowerCase().includes('case study')) {
            btnText = isEn ? 'View Case Study' : 'Ver Case Study';
          }
          
          actionContainer.innerHTML = `
            <a href="${actionLink}" target="_blank" rel="noopener" class="bento-btn btn-primary" style="margin-top: 16px; display: inline-flex;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              ${btnText}
            </a>`;
        } else {
          actionContainer.innerHTML = '';
        }
      }
    }, 150);
  }
  
  // Nav buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentItems.length <= 1) return;
      currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
      showLightboxItem();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (currentItems.length <= 1) return;
      currentIndex = (currentIndex + 1) % currentItems.length;
      showLightboxItem();
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.open) return;
    
    if (e.key === 'ArrowLeft' && currentItems.length > 1) {
      currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
      showLightboxItem();
    } else if (e.key === 'ArrowRight' && currentItems.length > 1) {
      currentIndex = (currentIndex + 1) % currentItems.length;
      showLightboxItem();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
    }
  });
  
  attachGalleryClicks();
  // Listen for language changes to update captions
  window.addEventListener('lang-changed', () => {
    // Re-read data-caption of active items
    setTimeout(attachGalleryClicks, 100);
  });
}
