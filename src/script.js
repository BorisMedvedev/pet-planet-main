import {updateCartItem} from '/js/updateCartItem';
export const API_URL = 'https://faint-sweet-pin.glitch.me';

const init = async () => {
  const productsList = document.getElementById('app');
  const navBtn = document.querySelectorAll('.products__nav-btn');
  const btnCart = document.querySelector('.products__nav-btn-cart');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal__close');
  const modalList = document.querySelector('.modal__list');


  const {selectionActiveButton} =
   await import('/js/selectionActiveButton');
  const {renderCartItems} =
   await import('/js/renderCartItems');
  const {addTooCart} =
   await import('/js/addTooCart');

  navBtn.forEach((btn) => {
    btn.addEventListener('click', selectionActiveButton);
  });

  btnCart.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    renderCartItems(modalList);
  });

  productsList.addEventListener('click', ({target}) => {
    if (target.closest('.product-card__btn')) {
      const productId = target.dataset.id;

      addTooCart(productId);
    }
  });

  document.addEventListener('click', ({target}) => {
    if (target === modalOverlay || target === modalClose) {
      modalOverlay.style.display = 'none';
    }
  });

  modalList.addEventListener('click', ({target}) => {
    if (target.classList.contains('modal__btn-plus')) {
      const productId = target.dataset.id;
      updateCartItem(productId, 1);
    }
    if (target.classList.contains('modal__btn-minus')) {
      const productId = target.dataset.id;
      updateCartItem(productId, -1);
    }
  });
};

init();
