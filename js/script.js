document.addEventListener('DOMContentLoaded', function () {
  toggleMobileMenu();
  toggleCatalog();
  toggleMobileSearch();
  runSlider();
  runCarousel();
});

function toggleMobileMenu() {
  const HEADER = document.querySelector('.header');
  const NAV = document.querySelector('.header__nav');
  const MENU_BUTTON = document.querySelector('.menu-button');
  const LINK = NAV.querySelectorAll('A');

  MENU_BUTTON.addEventListener('click', toggleMenu);
  LINK.forEach(item => {
    item.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    NAV.classList.toggle('header__nav_active');
    MENU_BUTTON.classList.toggle('menu-button_active');
    document.body.classList.toggle('no-scroll');
    toggleOverlay();
  };

  function toggleOverlay() {
    let overlay;
    if (document.querySelector('.overlay')) {
      overlay = document.querySelector('.overlay');
      overlay.remove();
    } else {
      overlay = document.createElement('div');
      overlay.classList.toggle('overlay');
      HEADER.appendChild(overlay);
      overlay.addEventListener('click', toggleMenu);
    }
  }
};

function toggleCatalog() {
  const MAIN_CATALOG = document.getElementById('catalog');
  const CATALOG_BUTTON = document.querySelector('.catalog-button');
  const SUBCATALOGS = MAIN_CATALOG.querySelectorAll('.catalog');
  const SUBCATALOG_BUTTONS = MAIN_CATALOG.querySelectorAll('.catalog__button');
  const RETURN_BUTTONS = MAIN_CATALOG.querySelectorAll('.catalog__return');
  const LINKS = MAIN_CATALOG.querySelectorAll('A');
  const MENU_BUTTON = document.querySelector('.menu-button');
  const OVERLAY = document.querySelector('.overlay');

  CATALOG_BUTTON.addEventListener('click', function () {
    MAIN_CATALOG.classList.add('catalog_active');
  });

  SUBCATALOG_BUTTONS.forEach(item => {
    item.addEventListener('click', function () {
      if (item.nextElementSibling && item.nextElementSibling.classList.contains('catalog')) {
        item.nextElementSibling.classList.add('catalog_active');
      }
    })
  });

  RETURN_BUTTONS.forEach(item =>
    item.addEventListener('click', function () {
      item.parentElement.classList.remove('catalog_active');
    }));

  if (OVERLAY) { OVERLAY.addEventListener('click', closeAllCatalogs); };
  MENU_BUTTON.addEventListener('click', closeAllCatalogs);
  LINKS.forEach(link => link.addEventListener('click', closeAllCatalogs));

  function closeAllCatalogs() {
    SUBCATALOGS.forEach(item => item.classList.remove('catalog_active'));
    MAIN_CATALOG.classList.remove('catalog_active');
  };
};

function toggleMobileSearch() {
  const HEADER = document.querySelector('.header');
  const BUTTON = HEADER.querySelector('.info-list__item_search').querySelector('.info-list__button');
  const SEARCHFIELD = HEADER.querySelector('.search');

  BUTTON.addEventListener('click', toggleSearch);

  function toggleSearch() {
    SEARCHFIELD.classList.toggle('active');
    toggleOverlay();
  };

  function toggleOverlay() {
    let overlay;
    console.log('works');
    if (document.querySelector('.overlay')) {
      overlay = document.querySelector('.overlay');
      overlay.remove();
    } else {
      overlay = document.createElement('div');
      overlay.classList.toggle('overlay');
      HEADER.appendChild(overlay);
      overlay.addEventListener('click', toggleSearch);
    }
  };
};


function runSlider() {
  var slider = tns({
    container: '.slider__list',
    autoplay: true,
    controls: false
  });
  document.querySelector('.slider__button_left').onclick = function () { slider.goTo('prev'); };
  document.querySelector('.slider__button_right').onclick = function () { slider.goTo('next'); };
};

function runCarousel() {
  var slider = tns({
    container: '.carousel__list',
    autoplay: true,
    autoplayHoverPause: true,
    controls: false,
    nav: false,
    items: 2,
    gutter: 16,
    preventScrollOnTouch: 'auto',
    responsive: {
      532: {
        items: 3
      },
      822: {
        gutter: 30
      },
      1086: {
        items: 4
      },
      1350: {
        items: 5
      }
    }
  });
  document.querySelector('.carousel__button').onclick = function () { slider.goTo('next'); };
};