document.addEventListener('DOMContentLoaded', function () {
  toggleMobileMenu();
  toggleCatalog();
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
    createOverlay();
  };

  function createOverlay() {
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
  }
};