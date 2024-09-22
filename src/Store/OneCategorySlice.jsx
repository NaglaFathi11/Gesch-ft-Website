import { create } from "zustand";

const useOneCategory = create((set) => ({
  category: [],
  loading: false,

  getCategory: async (category) => {
    // console.log(category);

    set({ loading: true });

    try {
      let response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      let data = await response.json();
      console.log(data);

      set({ category: data });
    } catch (error) {
      console.error(error);
      set({ loading: false });
    }
  },
}));

export default useOneCategory;
