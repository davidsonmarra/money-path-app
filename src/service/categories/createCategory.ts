import api from 'src/configs/service';
import Category from 'src/@types/category';

const createCategory = async (category: Category): Promise<Category> => {
  const response = await api.post('/categories', category);
  return response.data;
};

export default createCategory;
