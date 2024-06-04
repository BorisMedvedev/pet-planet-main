import {renderProducts} from '/js/renderProducts';
import {API_URL} from '../script';

const preloader = document.querySelector('.preloader');

export const fetchProducts = async (category) => {
  try {
    // Показываем прелоадер перед началом запроса
    preloader.classList.add('active');

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
  } finally {
    // Скрываем прелоадер после выполнения запроса
    setTimeout(() => {
      preloader.classList.remove('active');
    }, 2000);
  }
};

// Получаем текущую активную категорию и выполняем запрос
const activeCategory = document.querySelector('.products__nav-btn--active').textContent;
fetchProducts(activeCategory);

