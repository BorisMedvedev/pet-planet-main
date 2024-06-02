export const calculateTotalPrice = (listItems, products) => listItems.reduce((acc, item) => {
  const product = products.find(prod => prod.id === item.id);
  return acc + product.price * item.count;
}, 0);
