import { create } from "zustand";





const useBlogStore = create((set) => ({
    blog: null,
    setBlog: (data) => set((state) => ({ blog: data})),
   
  }))

export default useBlogStore;