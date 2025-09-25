import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEmployeeStore = create(persist((set) => ({
  employees: [],

  addEmployees: (employee) =>
    set((state) => ({ employees: [...state.employees, employee] })),

  clearEmployees: () => set({ employees: [] }),
})));

export default useEmployeeStore;
