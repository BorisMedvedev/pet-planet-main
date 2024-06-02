import {API_URL} from '../script';

export const createProductCard = ({id, name, price, photoUrl}) => {
  const productCard = document.createElement('li');
  const productCardName = document.createElement('h3');
  const productCardPrice = document.createElement('p');
  const productCardImg = document.createElement('img');
  const productCardBtn = document.createElement('button');
  productCard.className = 'product-card';
  productCardBtn.className = 'product-card__btn';
  productCardName.className = 'product-card__title';
  productCardName.textContent = name;
  productCardBtn.textContent = 'В корзину';
  productCardPrice.textContent = `Цена: ${price} ₽`;
  productCardImg.src = `${API_URL}${photoUrl}`;
  productCardImg.alt = name;
  productCardBtn.dataset.id = id;

  productCard.append(
      productCardImg,
      productCardName,
      productCardPrice,
      productCardBtn,
  );

  return productCard;
};
