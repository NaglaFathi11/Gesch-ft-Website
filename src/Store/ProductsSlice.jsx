import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  loading: false,

  getProducts: async () => {
    set({ loading: true });

    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      set({ products: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      set({ loading: false });
    }
  },
}));

export default useProductsStore;
