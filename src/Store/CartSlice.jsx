import { create } from "zustand";
import useCounterStore from "./CounterSlice";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const { count } = useCounterStore.getState();

      const existingProduct = state.cart.find((item) => item.id === product.id);
      const updatedCart = existingProduct
        ? state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + count }
              : item
          )
        : [...state.cart, { ...product, quantity: count }];
      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart
        .map((item) =>
          item.id === id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item
        )
        .filter(Boolean);
      return { cart: updatedCart };
    }),
}));

export default useCartStore;
