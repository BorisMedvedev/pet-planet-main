import {updateCartCount} from '/js/updateCartCount.js';

export const addTooCart = (productId) => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cartItems.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.count += 1;
  } else {
    cartItems.push({id: productId, count: 1});
  }
  localStorage.setItem('cart', JSON.stringify(cartItems));
  updateCartCount();
};
