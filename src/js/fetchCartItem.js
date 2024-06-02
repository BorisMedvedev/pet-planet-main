import {API_URL} from '../script';

export const fetchCartItem = async (ids) => {
  try {
    const response = await fetch(`${API_URL}/api/products/list/${ids.join(',')}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return await response.json();
  } catch (error) {
    console.error(`Ошибка ${error}`);
    return [];
  }
};
