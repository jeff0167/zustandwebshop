import { create } from "zustand";
import axios from "axios";

const useStore = create(set =>({ // this is a hook, name it what ever you want
    loading: false,
    hasErrors: false,
    errorMessage: "no error",
    
    bears: 0,
    data: [],
    getData: async () => {
        set(() => ({ loading: true }));
        try {
          const response = await axios.get(
            "https://www.fruitmap.org/api/trees"
          );
          set((state) => ({ data: (state.data = response.data), loading: false }));
        } catch (err) {
          set(() => ({ hasErrors: true, loading: false, errorMessage: err.message}));
        }
      },
    increasePopulation: () => set(state => ({bears: state.bears + 1})),
    removeAllBears: () => set({bears: 0}),
}))


export default useStore;