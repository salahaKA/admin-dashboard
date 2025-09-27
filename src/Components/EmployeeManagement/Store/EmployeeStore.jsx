import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEmpStore = create(
  persist(
    (set) => ({
      empData: [],
      empAdd: (emp) => set((state) => ({ empData: [...state.empData, emp] })),
      clearEmp: () => set({ empData: [] }),
    }),
    {
      name: "emp-storage", // optional: localStorage key
    }
  )
);

export default useEmpStore;
