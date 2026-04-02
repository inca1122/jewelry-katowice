// ===========================
// KETA GOLD — Main JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll behavior ---
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // --- Hero image load animation ---
  const heroBg = document.querySelector('.hero__bg');
  const hero = document.querySelector('.hero');
  if (heroBg) {
    if (heroBg.complete) {
      hero.classList.add('loaded');
    } else {
      heroBg.addEventListener('load', () => hero.classList.add('loaded'));
    }
  }

  // --- Mobile menu ---
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  const mobileLinks = document.querySelectorAll('.nav__mobile a');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // --- Active nav link on scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
        activeLink?.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observerNav.observe(section));

  // --- Scroll reveal ---
  const revealElements = document.querySelectorAll('.reveal');

  const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observerReveal.observe(el));

  // --- Gallery Lightbox ---
  const galleryItems = document.querySelectorAll('.gallery__item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox__img');
  const lightboxClose = document.querySelector('.lightbox__close');
  const lightboxPrev = document.querySelector('.lightbox__prev');
  const lightboxNext = document.querySelector('.lightbox__next');

  let currentIndex = 0;
  const galleryImages = [];

  galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    if (img) galleryImages.push(img.src);

    item.addEventListener('click', () => {
      currentIndex = index;
      openLightbox(currentIndex);
    });
  });

  function openLightbox(index) {
    lightboxImg.src = galleryImages[index];
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose?.addEventListener('click', closeLightbox);

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  lightboxPrev?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex];
  });

  lightboxNext?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex];
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev?.click();
    if (e.key === 'ArrowRight') lightboxNext?.click();
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Parallax on hero ---
  const heroBgEl = document.querySelector('.hero__bg');
  if (heroBgEl) {
    window.addEventListener('scroll', () => {
      const offset = window.scrollY;
      heroBgEl.style.transform = `translateY(${offset * 0.3}px)`;
    }, { passive: true });
  }

  // --- Form Modal ---
  const formModal   = document.getElementById('formModal');
  const formBackdrop = document.getElementById('formBackdrop');
  const formClose   = document.getElementById('formClose');
  const formServiceTag = document.getElementById('formServiceTag');
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const formContent = document.getElementById('formContent');

  function openForm(serviceName) {
    if (formServiceTag && serviceName) formServiceTag.textContent = serviceName;
    formModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeForm() {
    formModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open on service card click
  document.querySelectorAll('.service-card[data-service]').forEach(card => {
    card.addEventListener('click', () => openForm(card.dataset.service));
  });

  formClose?.addEventListener('click', closeForm);
  formBackdrop?.addEventListener('click', closeForm);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && formModal.classList.contains('open')) closeForm();
  });

  // Form submit → show success
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name  = document.getElementById('fieldName').value.trim();
    const phone = document.getElementById('fieldPhone').value.trim();
    if (!name || !phone) {
      alert('Proszę podać imię i numer telefonu.');
      return;
    }
    formContent.style.display = 'none';
    formSuccess.style.display = 'block';
    // Auto-close after 4 seconds
    setTimeout(closeForm, 4000);
    // Reset form after close
    setTimeout(() => {
      contactForm.reset();
      formContent.style.display = 'block';
      formSuccess.style.display = 'none';
    }, 4500);
  });

});
