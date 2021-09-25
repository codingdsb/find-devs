import create from "zustand";

const useStore = create((set) => ({
  userData: null,
  setUser: (data) => set((state) => ({ userData: data })),
}));

export default useStore;
