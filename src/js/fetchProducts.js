import {renderProducts} from '/js/renderProducts';

import {API_URL} from '../script';

export const fetchProducts = async (category) => {
  try {
    const response = await fetch(
        `${API_URL}/api/products/category/${category}`,
    );

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error('Произошла ошибка при выполнении запроса:', error.message);
  }
};
fetchProducts(
    document.querySelector('.products__nav-btn--active').textContent,
);


