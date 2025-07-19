import { create } from 'zustand';
import Category from 'src/@types/category';
import getCategories from 'src/service/categories/getCategories';
import createCategory from 'src/service/categories/createCategory';

interface CategoriesStore {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  getCategories: (force?: boolean) => Promise<Category[]>;
  createCategory: (category: Category) => Promise<Category>;
}

export const useCategoriesStore = create<CategoriesStore>((set, get) => ({
  categories: [],
  getCategories: async (force: boolean = false) => {
    if (force) {
      const categories = await getCategories();
      set({ categories });
    }

    if (get().categories.length === 0) {
      const categories = await getCategories();
      set({ categories });
    }

    return get().categories;
  },
  setCategories: categories => set({ categories }),
  createCategory: async (category: Category) => {
    const existingCategory = get().categories.find(
      cat => cat.id === category.id,
    );
    if (existingCategory) {
      return existingCategory;
    }

    // const newCategory = await createCategory(category);
    set({ categories: [...get().categories, category] }); // TODO: remove this
    return category;
  },
}));
