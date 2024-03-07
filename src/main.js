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

jQuery(document).on('click', '.mob-menu-item', function () {
  jQuery('.mob-menu-item').closest('.backdrop').removeClass('is-open');
});

//// stop scroll

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleStopScroll);
  refs.closeModalBtn.addEventListener('click', toggleStopScroll);

  function toggleStopScroll() {
    refs.body.classList.toggle('fixed-position');
  }
})();
