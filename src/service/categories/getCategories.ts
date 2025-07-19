import api from 'src/configs/service';
import Category from 'src/@types/category';

const getCategories = async (): Promise<Category[]> => {
  const response = await api.get('/categories');
  return response.data;
};

export default getCategories;
