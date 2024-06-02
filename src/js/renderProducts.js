import {createProductCard} from '/js/createProductCard.js';

const productsList = document.getElementById('app');

export const renderProducts = (products) => {
  productsList.textContent = '';
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productsList.append(productCard);
  });
};
