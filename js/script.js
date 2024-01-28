document.addEventListener('DOMContentLoaded', function () {
  toggleMobileMenu();
  toggleCatalog();
  toggleMobileSearch();
  runSlider();
  runSaleCarousel();
  runBrandsCarousel();
  showMore();
  toggleSortBy();
  toggleSpoiler();
  runRangeSlider();
  toggleFilter();
  runProdectGallery();
  showMoreDescription();
});

function toggleMobileMenu() {
  const HEADER = document.querySelector('.header');
  const NAV = document.querySelector('.header__nav');
  const MENU_BUTTON = document.querySelector('.menu-button');
  const LINK = NAV?.querySelectorAll('A');

  if (HEADER && NAV && MENU_BUTTON && LINK) {

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
  }
};

function toggleCatalog() {
  const MAIN_CATALOG = document.getElementById('catalog');
  const CATALOG_BUTTON = document.querySelector('.catalog-button');
  const SUBCATALOGS = MAIN_CATALOG?.querySelectorAll('.catalog');
  const SUBCATALOG_BUTTONS = MAIN_CATALOG?.querySelectorAll('.catalog__button');
  const RETURN_BUTTONS = MAIN_CATALOG?.querySelectorAll('.catalog__return');
  const LINKS = MAIN_CATALOG?.querySelectorAll('A');
  const MENU_BUTTON = document.querySelector('.menu-button');
  const OVERLAY = document.querySelector('.overlay');

  if (MAIN_CATALOG && CATALOG_BUTTON && SUBCATALOGS && SUBCATALOG_BUTTONS && RETURN_BUTTONS && LINKS && MENU_BUTTON) {

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
  }
};

function toggleMobileSearch() {
  const HEADER = document.querySelector('.header');
  const BUTTON = HEADER?.querySelector('.info-list__item_search').querySelector('.info-list__button');
  const SEARCHFIELD = HEADER?.querySelector('.search');

  if (HEADER && BUTTON && SEARCHFIELD) {

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
  }
};


function runSlider() {
  if (document.querySelector('.slider__list')) {
    var slider = tns({
      container: '.slider__list',
      autoplay: true,
      controls: false
    });
    document.querySelector('.slider__button_left').onclick = function () { slider.goTo('prev'); };
    document.querySelector('.slider__button_right').onclick = function () { slider.goTo('next'); };
  }
};

function runSaleCarousel() {
  if (document.querySelector('.carousel__list_sale')) {
    var slider = tns({
      container: '.carousel__list_sale',
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
    document.querySelector('.carousel_sale').querySelector('.carousel__button').onclick = function () { slider.goTo('next'); };
  }
};

function runBrandsCarousel() {
  if (document.querySelector('.carousel__list_brands')) {
    var slider = tns({
      container: '.carousel__list_brands',
      autoplay: true,
      autoplayHoverPause: true,
      controls: false,
      nav: false,
      items: 3,
      gutter: 16,
      preventScrollOnTouch: 'auto',
      responsive: {
        480: {
          items: 4
        },
        561: {
          items: 5
        },
        670: {
          items: 6
        },
        782: {
          gutter: 30,
          items: 4
        },
        1000: {
          items: 5
        },
        1158: {
          items: 6
        },
        1346: {
          items: 7
        }
      }
    });
    document.querySelector('.carousel_brands').querySelector('.carousel__button').onclick = function () { slider.goTo('next'); };
  }
};

function showMore() {
  const TEXT_BLOCK = document.querySelector('.text-block');
  const BUTTON = document.querySelector('.text-block__button');

  if (TEXT_BLOCK && BUTTON) {

    BUTTON.onclick = function () {
      TEXT_BLOCK.classList.add('text-block_active');
    }
  }
};

function toggleSortBy() {
  const SORT_BY = document.querySelector('.sort-by');
  const OPTIONS = SORT_BY?.querySelectorAll('.sort-by__button');

  if (SORT_BY && OPTIONS) {
    OPTIONS.forEach(option => {
      option.addEventListener('click', function () {
        SORT_BY.classList.toggle('sort-by_active');
      })
    })
  }
};

function toggleSpoiler() {
  const SPOILERS = document.querySelectorAll('.spoiler');
  if (SPOILERS) {
    SPOILERS.forEach(spoiler => {
      let trigger = spoiler.querySelector('.spoiler__trigger');
      trigger.addEventListener('click', function () {
        spoiler.classList.toggle('spoiler_active');
      })
    })
  }
};
function runRangeSlider() {
  const RANGE_LINE = document.querySelector('.range__line');
  const RANGE_MIN = document.getElementById('range-min');
  const RANGE_MAX = document.getElementById('range-max');
  const PRICE_MIN = document.getElementById('price-min');
  const PRICE_MAX = document.getElementById('price-max');


  if (RANGE_LINE && RANGE_MIN && RANGE_MAX && PRICE_MIN && PRICE_MAX) {
    let min = +RANGE_MIN.getAttribute('value');
    let max = +RANGE_MAX.getAttribute('value');
    changRangeLineWidth(min, max);
    transferRangeValue(min, max);
  }

  function transferRangeValue(min, max) {
    PRICE_MIN.setAttribute('value', RANGE_MIN.value);
    PRICE_MAX.setAttribute('value', RANGE_MAX.value);
    RANGE_MIN.oninput = function () {
      if (+this.value <= max) {
        PRICE_MIN.setAttribute('value', +this.value);
        PRICE_MAX.setAttribute('min', +this.value + 1);
      } else {
        PRICE_MAX.setAttribute('value', +this.value);
        PRICE_MIN.setAttribute('max', +this.value - 1);
      }
      min = +this.value;
      changRangeLineWidth(min, max);
    }
    RANGE_MAX.oninput = function () {
      if (+this.value > min) {
        PRICE_MAX.setAttribute('value', +this.value);
        PRICE_MIN.setAttribute('max', +this.value - 1);
      } else {
        PRICE_MIN.setAttribute('value', +this.value);
        PRICE_MAX.setAttribute('min', +this.value + 1);
      }
      max = +this.value;
      changRangeLineWidth(min, max);
    }
  };

  function changRangeLineWidth(min, max) {
    let difference = Math.abs(max - min);
    let width = difference * 99 / 29900;
    let margin = Math.min(min, max) * 100 / 29900;
    RANGE_LINE.setAttribute('style', `width: ${width}%; margin-left: ${margin}%`);

  }
};

function toggleFilter() {
  const SIDE_FILTER = document.querySelector('.side-filter');
  const FILTER_BUTTON = document.querySelector('.tags__button_filter');
  const CLOSE_BUTTON = document.querySelector('.side-filter__close');
  const APPLY_BUTTON = document.querySelector('.side-filter__button');

  if (SIDE_FILTER && FILTER_BUTTON && CLOSE_BUTTON) {
    FILTER_BUTTON.addEventListener('click', toggleSide);
    CLOSE_BUTTON.addEventListener('click', toggleSide);
    APPLY_BUTTON.addEventListener('click', toggleSide);

    function toggleSide() {
      SIDE_FILTER.classList.toggle('side-filter_active');
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
        document.querySelector('.header').appendChild(overlay);
        overlay.addEventListener('click', toggleSide);
      }
    }
  }
};
function runProdectGallery() {
  if (document.querySelector('.product-gallery')) {
    var slider = tns({
      container: '.product-gallery',
      autoplay: false,
      controls: false,
      nav: true,
      navAsThumbnails: true,
      navContainer: '.product-thumbnails',
      items: 1,
      autoHeight: true,
    });

    document.querySelector('.product-gallery__button_left').onclick = function () { slider.goTo('prev'); };
    document.querySelector('.product-gallery__button_right').onclick = function () { slider.goTo('next'); };
  }
};

function showMoreDescription() {
  const CONTAINER = document.querySelector('.details__text-wrapper');
  const BUTTON = document.querySelector('.details__read-more');

  if (CONTAINER && BUTTON) {
    BUTTON.addEventListener('click', function () {
      CONTAINER.classList.add('details__text-wrapper_active');
    })
  }
};