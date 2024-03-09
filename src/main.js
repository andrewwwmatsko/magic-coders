// Mobile menu

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

//

jQuery(document).on('click', '.mob-menu-link', function () {
  jQuery('.mob-menu-item').closest('.backdrop').removeClass('is-open');
});

jQuery(document).on('click', '.button-shop', function () {
  jQuery('.mob-menu-item').closest('.backdrop').removeClass('is-open');
});

//// stop scroll

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    howItWorks: document.querySelector('[data-how-it-works]'),
    vegetables: document.querySelector('[data-vegetables]'),
    reviews: document.querySelector('[data-reviews]'),
    shopNowBtn: document.querySelector('[data-shopNowBtn]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleStopScroll);
  refs.closeModalBtn.addEventListener('click', toggleStopScroll);
  refs.howItWorks.addEventListener('click', toggleStopScroll);
  refs.vegetables.addEventListener('click', toggleStopScroll);
  refs.reviews.addEventListener('click', toggleStopScroll);
  refs.shopNowBtn.addEventListener('click', toggleStopScroll);

  function toggleStopScroll() {
    refs.body.classList.toggle('fixed-position');
  }
})();

//// aos

AOS.init();
