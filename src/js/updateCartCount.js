const btnCartNum = document.querySelector('.products__nav-btn-cart-num');

export const updateCartCount = () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  btnCartNum.textContent = cartItems.reduce((sum, obj) => sum + obj.count, 0);
};

updateCartCount();
