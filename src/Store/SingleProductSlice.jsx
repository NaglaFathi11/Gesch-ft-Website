import { create } from "zustand";

const useSingleProductStore = create((set) => ({
  product: {},
  loading: false,

  getProduct: async (id) => {
    // console.log(id);

    set({ loading: true });

    try {
      let response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      set({ product: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch product:", error);
      set({ loading: false });
    }
  },
}));

export default useSingleProductStore;
