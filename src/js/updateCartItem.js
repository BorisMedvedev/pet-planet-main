import {printCartItems} from '/js/printCartItems';
import {updateCartCount} from '/js/updateCartCount';

export const updateCartItem = (productId, change) => {
  const listItems = JSON.parse(localStorage.getItem('cart')) || [];
  const itemIndex = listItems.findIndex(item => item.id === productId);

  if (itemIndex !== -1) {
    listItems[itemIndex].count += change;
    if (listItems[itemIndex].count <= 0) {
      listItems.splice(itemIndex, 1);
    }

    localStorage.setItem('cart', JSON.stringify(listItems));
    updateCartCount();
    printCartItems();
  }
};

