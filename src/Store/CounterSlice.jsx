import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 1,

  decrementCount: (product) =>
    set((state) => {
      if (product && state.count > 1) {
        return {
          count: state.count - 1,
        };
      } else {
        return { count: state.count };
      }
    }),

  incrementCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));

export default useCounterStore;
