import {fetchProducts} from '/js/fetchProducts.js';

const navBtn = document.querySelectorAll('.products__nav-btn');

export const selectionActiveButton = ({target}) => {
  navBtn.forEach((btn) => {
    btn.classList.remove('products__nav-btn--active');
    target.classList.add('products__nav-btn--active');
  });
  fetchProducts(target.textContent);
};

