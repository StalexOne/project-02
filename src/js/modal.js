(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-clock-open]'),
      closeModalBtn: document.querySelector('[data-modal-clock-close]'),
      modal: document.querySelector('[data-clock-modal]'),
    };
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle('visually-hidden');
      document.body.classList.toggle('no-scroll');
    }
  })();