// ===========================
// KETA GOLD — Main JavaScript
// ===========================

// --- Product catalog data ---
const PRODUCTS = {
  // Łańcuszki
  'lancuszki-kubanie': {
    service: 'Łańcuszki',
    title: 'Łańcuszki kubańskie',
    desc: 'Ręcznie wykonane łańcuszki w splocie kubańskim ze złota i srebra. Każde ogniwo formowane precyzyjnie przez naszych mistrzów złotniczych — idealne jako samodzielna ozdoba lub baza pod wisiorek.',
    photos: [
      'images/464922204_18045934484076803_7547638130621449087_n.jpg',
      'images/652132724_18089830217159542_1958357042268693419_n.jpg',
    ]
  },
  'lancuszki-zlote': {
    service: 'Łańcuszki',
    title: 'Łańcuszki złote',
    desc: 'Klasyczne łańcuszki złote w splotach bismarck, figaro i ankier. Dostępne w złocie żółtym, białym i różowym próby 585 lub 750. Każdy łańcuszek wykańczamy ręcznie.',
    photos: [
      'images/652132724_18089830217159542_1958357042268693419_n.jpg',
      'images/649218822_18013255367672607_7876714700084012522_n.jpg',
    ]
  },
  'lancuszki-zawieszki': {
    service: 'Łańcuszki',
    title: 'Zawieszki i wisiorki',
    desc: 'Unikalne zawieszki tworzone ręcznie lub w technologii 3D. Od delikatnych kwiatowych motywów, przez artystyczne rzeźbiarskie formy, aż po personalizowane inicjały i symbole.',
    photos: [
      'images/652395713_1790529945561917_4396226358533787911_n.jpg',
      'images/518396244_1574531230495124_3612413421979046424_n.jpg',
      'images/620499730_18100132564867793_5886379338599602004_n.jpg',
    ]
  },
  'lancuszki-zamow': {
    service: 'Łańcuszki',
    title: 'Łańcuszki na zamówienie',
    desc: 'Twój projekt — nasza realizacja. Wykonujemy łańcuszki według indywidualnych zamówień: dowolne wymiary, grubość, splot i materiał. Umów się na bezpłatną konsultację.',
    photos: [
      'images/464922204_18045934484076803_7547638130621449087_n.jpg',
      'images/649218822_18013255367672607_7876714700084012522_n.jpg',
    ]
  },

  // Projektowanie 3D
  '3d-modelowanie': {
    service: 'Projektowanie 3D',
    title: 'Modelowanie cyfrowe',
    desc: 'Każdy projekt zaczyna się od precyzyjnego modelu 3D, który pozwala zobaczyć gotowe dzieło jeszcze przed jego wykonaniem. Możemy wprowadzać dowolne zmiany na etapie projektu — bez dodatkowych kosztów.',
    photos: [
      'images/518396244_1574531230495124_3612413421979046424_n.jpg',
      'images/650050125_18054573950478557_5416347952047204648_n.jpg',
    ]
  },
  '3d-odlew': {
    service: 'Projektowanie 3D',
    title: 'Odlew jubilerski',
    desc: 'Po zatwierdzeniu projektu drukujemy model w żywicy jubilerskiej i wykonujemy precyzyjny odlew w wybranym metalu szlachetnym. Technologia ta umożliwia realizację nawet najbardziej złożonych kształtów.',
    photos: [
      'images/641659559_1768763944405184_631486704320821933_n.jpg',
      'images/654788367_1788681645746747_1018519775686216154_n.jpg',
    ]
  },
  '3d-grawerowanie': {
    service: 'Projektowanie 3D',
    title: 'Grawerowanie',
    desc: 'Ręczne grawerowanie na kamieniach szlachetnych i metalach — od prostych inicjałów po skomplikowane kompozycje artystyczne wewnątrz kryształów. Każdy grawerunek to absolutnie unikalne dzieło.',
    photos: [
      'images/518396244_1574531230495124_3612413421979046424_n.jpg',
      'images/652395713_1790529945561917_4396226358533787911_n.jpg',
    ]
  },
  '3d-personalizowane': {
    service: 'Projektowanie 3D',
    title: 'Projekty personalizowane',
    desc: 'Tworzymy biżuterię z inicjałami, ważnymi datami, symbolami osobistymi lub motywami inspirowanymi naturą. Każdy projekt to efekt bliskiej współpracy mistrza złotniczego z klientem.',
    photos: [
      'images/650050125_18054573950478557_5416347952047204648_n.jpg',
      'images/641659559_1768763944405184_631486704320821933_n.jpg',
      'images/518396244_1574531230495124_3612413421979046424_n.jpg',
    ]
  },

  // Obrączki ślubne
  'obr-zloto': {
    service: 'Obrączki ślubne',
    title: 'Złoto żółte',
    desc: 'Klasyczne obrączki ze złota żółtego próby 585 lub 750. Gładkie lub zdobione subtelną teksturą, proste lub z kamieniami. Każda para wykonana ręcznie, na miarę Waszej miłości.',
    photos: [
      'images/654788367_1788681645746747_1018519775686216154_n.jpg',
      'images/634878974_1764106574870921_2426332589946437043_n.jpg',
    ]
  },
  'obr-biale': {
    service: 'Obrączki ślubne',
    title: 'Białe złoto',
    desc: 'Eleganckie obrączki z białego złota o delikatnym platynowym połysku. Nowoczesna klasyka — idealny wybór dla par ceniących stonowaną, ponadczasową estetykę.',
    photos: [
      'images/654788367_1788681645746747_1018519775686216154_n.jpg',
      'images/262644615_3094327710856281_8707637242066880330_n.jpg',
    ]
  },
  'obr-rozowe': {
    service: 'Obrączki ślubne',
    title: 'Różowe złoto',
    desc: 'Romantyczne obrączki z różowego złota — ciepły odcień miedzi nadaje biżuterii wyjątkowy, kobiecy charakter. Doskonale komponują się z brylantami i kamieniami kolorowymi.',
    photos: [
      'images/634878974_1764106574870921_2426332589946437043_n.jpg',
      'images/654788367_1788681645746747_1018519775686216154_n.jpg',
    ]
  },
  'obr-kamienie': {
    service: 'Obrączki ślubne',
    title: 'Z kamieniami szlachetnymi',
    desc: 'Obrączki zdobione brylantami, szafirami, szmaragdami lub innymi kamieniami szlachetnymi. Każdy kamień dobieramy indywidualnie — pod kątem koloru, czystości i blasku.',
    photos: [
      'images/569841268_1662579705023609_8967797265269609106_n.jpg',
      'images/651488846_18115564864638773_6812737187463907599_n.jpg',
      'images/634878974_1764106574870921_2426332589946437043_n.jpg',
    ]
  },

  // Pierścionki zaręczynowe
  'pier-soliter': {
    service: 'Pierścionki zaręczynowe',
    title: 'Soliter',
    desc: 'Ponadczasowy klasyk — jeden brylant w oprawie z żółtego, białego lub różowego złota. Prostota formy i doskonałość wykonania sprawiają, że soliter pozostaje symbolem miłości od pokoleń.',
    photos: [
      'images/634878974_1764106574870921_2426332589946437043_n.jpg',
      'images/654788367_1788681645746747_1018519775686216154_n.jpg',
    ]
  },
  'pier-kolorowe': {
    service: 'Pierścionki zaręczynowe',
    title: 'Z kamieniami kolorowymi',
    desc: 'Szafiry, szmaragdy, turmaliny, granaty — kolorowe kamienie szlachetne jako wyjątkowa alternatywa dla klasycznego brylantu. Każdy pierścionek opowiada swoją własną historię.',
    photos: [
      'images/569841268_1662579705023609_8967797265269609106_n.jpg',
      'images/651488846_18115564864638773_6812737187463907599_n.jpg',
      'images/262644615_3094327710856281_8707637242066880330_n.jpg',
    ]
  },
  'pier-autorskie': {
    service: 'Pierścionki zaręczynowe',
    title: 'Projekty autorskie',
    desc: 'Niepowtarzalne pierścionki inspirowane naturą, architekturą lub Waszą wspólną historią. Każdy projekt tworzony jest we współpracy z mistrzem złotniczym od pierwszego szkicu do gotowego wyrobu.',
    photos: [
      'images/569841268_1662579705023609_8967797265269609106_n.jpg',
      'images/641659559_1768763944405184_631486704320821933_n.jpg',
      'images/597835627_1710280080253571_3839120242951906880_n.jpg',
    ]
  },
  'pier-zamow': {
    service: 'Pierścionki zaręczynowe',
    title: 'Na zamówienie',
    desc: 'Masz wizję wymarzonego pierścionka? Przyjedź do nas lub zadzwoń — stworzymy razem coś absolutnie wyjątkowego. Bezpłatna konsultacja, projekt 3D i realizacja w terminie.',
    photos: [
      'images/634878974_1764106574870921_2426332589946437043_n.jpg',
      'images/569841268_1662579705023609_8967797265269609106_n.jpg',
    ]
  },
};

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll behavior ---
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

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

  // --- Scroll reveal ---
  const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observerReveal.observe(el));

  // --- Gallery Lightbox ---
  const lightbox     = document.querySelector('.lightbox');
  const lightboxImg  = document.querySelector('.lightbox__img');
  const lightboxClose = document.querySelector('.lightbox__close');
  const lightboxPrev = document.querySelector('.lightbox__prev');
  const lightboxNext = document.querySelector('.lightbox__next');

  let currentIndex = 0;
  const galleryImages = [];

  document.querySelectorAll('.gallery__item').forEach((item, index) => {
    const img = item.querySelector('img');
    if (img) galleryImages.push(img.src);
    item.addEventListener('click', () => { currentIndex = index; openLightbox(index); });
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
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  lightboxPrev?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex];
  });
  lightboxNext?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex];
  });

  // --- Smooth scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }
    });
  });

  // --- Parallax on hero ---
  const heroBgEl = document.querySelector('.hero__bg');
  if (heroBgEl) {
    window.addEventListener('scroll', () => {
      heroBgEl.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }, { passive: true });
  }

  // ===========================
  // PRODUCT DRAWER
  // ===========================
  const drawer         = document.getElementById('productDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerClose    = document.getElementById('drawerClose');
  const drawerService  = document.getElementById('drawerService');
  const drawerTitle    = document.getElementById('drawerTitle');
  const drawerPhotos   = document.getElementById('drawerPhotos');
  const drawerDesc     = document.getElementById('drawerDesc');
  const drawerCta      = document.getElementById('drawerCta');

  function openDrawer(productKey) {
    const p = PRODUCTS[productKey];
    if (!p) return;

    drawerService.textContent = p.service;
    drawerTitle.textContent   = p.title;
    drawerDesc.textContent    = p.desc;

    drawerPhotos.innerHTML = '';
    p.photos.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = p.title;
      img.loading = 'lazy';
      drawerPhotos.appendChild(img);
    });

    drawerCta.dataset.service = p.title;
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    drawerCta.scrollIntoView && drawer.querySelector('.product-drawer__panel').scrollTo(0, 0);
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Click on dropdown links
  document.querySelectorAll('.nav__dropdown a[data-product]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer(link.dataset.product);
    });
  });

  // Click on mobile menu product links
  document.querySelectorAll('.mobile-product-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // close mobile menu first
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      setTimeout(() => openDrawer(link.dataset.product), 200);
    });
  });

  // Click on old service cards (still on page)
  document.querySelectorAll('.service-card[data-service]').forEach(card => {
    card.addEventListener('click', () => openForm(card.dataset.service));
  });

  drawerClose?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  // Drawer CTA → open form
  drawerCta?.addEventListener('click', () => {
    const serviceName = drawerCta.dataset.service || '';
    closeDrawer();
    setTimeout(() => openForm(serviceName), 300);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (drawer.classList.contains('open')) closeDrawer();
      if (document.getElementById('formModal')?.classList.contains('open')) closeForm();
      if (lightbox.classList.contains('open')) closeLightbox();
    }
    if (lightbox.classList.contains('open')) {
      if (e.key === 'ArrowLeft') lightboxPrev?.click();
      if (e.key === 'ArrowRight') lightboxNext?.click();
    }
  });

  // ===========================
  // CONTACT FORM MODAL
  // ===========================
  const formModal      = document.getElementById('formModal');
  const formBackdrop   = document.getElementById('formBackdrop');
  const formClose      = document.getElementById('formClose');
  const formServiceTag = document.getElementById('formServiceTag');
  const contactForm    = document.getElementById('contactForm');
  const formSuccess    = document.getElementById('formSuccess');
  const formContent    = document.getElementById('formContent');

  function openForm(serviceName) {
    if (formServiceTag && serviceName) formServiceTag.textContent = serviceName;
    formModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeForm() {
    formModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  formClose?.addEventListener('click', closeForm);
  formBackdrop?.addEventListener('click', closeForm);

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
    setTimeout(closeForm, 4000);
    setTimeout(() => {
      contactForm.reset();
      formContent.style.display = 'block';
      formSuccess.style.display = 'none';
    }, 4500);
  });

});
