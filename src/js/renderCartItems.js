import {fetchCartItem} from '/js/fetchCartItem';
import {printCartItems} from '/js/printCartItems';

export const renderCartItems = async (modalList) => {
  const listItems = JSON.parse(localStorage.getItem('cart')) || [];
  const ids = listItems.map((item) => item.id);

  if (!ids.length) {
    const item = document.createElement('li');
    item.textContent = 'Ваша Корзина пока пуста';
    item.classList.add('cart-null');
    modalList.append(item);
    return;
  }

  const products = await fetchCartItem(ids);

  localStorage.setItem('cartProductDefails', JSON.stringify(products));

  printCartItems();
};
