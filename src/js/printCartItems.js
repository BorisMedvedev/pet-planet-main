import {calculateTotalPrice} from '/calculateTotalPrice';
import {API_URL} from '../script';

const modalList = document.querySelector('.modal__list');
const formPriceElement = document.querySelector('.form__footer-price');

export const printCartItems = () => {
  modalList.textContent = '';

  const listItems = JSON.parse(localStorage.getItem('cart')) || [];
  const products = JSON.parse(localStorage.getItem('cartProductDefails')) || [];

  products.forEach(({id, name, price, photoUrl}) => {
    const cartItem = listItems.find(item => item.id === id);

    if (!cartItem) {
      return;
    }

    const listItem = document.createElement('li');
    listItem.classList.add('modal__list-item');
    listItem.innerHTML = `
    <img class="modal__list-item-img" src="${API_URL}${photoUrl}" alt="${name}">
      <h3 class="modal__list-item-title">${name}</h3>
      <div class="modal__list-item-count">
        <button class="modal__btn-minus modal__btn" data-id=${id}>-</button>
        <sapn class="modal__count">${cartItem.count}</sapn>
        <button class="modal__btn-plus modal__btn" data-id=${id}>+</button>
      </div>
    <p class="modal__list-item-price">${price * cartItem.count}&nbsp;₽</p>
    `;
    modalList.append(listItem);
  });

  const cartTotalPrice = calculateTotalPrice(listItems, products);
  formPriceElement.innerHTML = `${cartTotalPrice}&nbsp;₽`;
};
