import {API_URL} from '../script';

const modalForm = document.querySelector('.modal__form');

export const submitOrder = async (e) => {
  e.preventDefault();
  const storeId = modalForm.store.value;
  const listItems = JSON.parse(localStorage.getItem('cart')) || [];
  const products = listItems.map(({id, count}) => ({
    id,
    quantity: count,
  }));

  try {
    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        storeId,
        products,
      }),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const {orderId} = await response.json();

    localStorage.removeItem('cart');
    localStorage.removeItem('cartProductDefails');
  } catch (error) {
    console.error(error);
  }
};
