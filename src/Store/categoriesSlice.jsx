import { create } from "zustand";

const useCategoriesStore = create((set) => ({
  categories: [],
  loading: false,
  getCategories: async () => {
    set({ loading: true });
    try {
      let response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      let data = await response.json();
      set({ categories: data, loading: false });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));

export default useCategoriesStore;
