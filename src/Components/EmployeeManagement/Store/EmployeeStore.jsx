import { create } from "zustand";
import { persist } from "zustand/middleware";

const useEmpStore = create(
  persist(
    (set) => ({
      empData: [],
      empAdd: (emp) =>
        set((state) => ({ empData: [...state.empData, emp] })),
      updateEmp: (id, updatedData) =>
  set((state) => ({
    empData: state.empData.map((emp) =>
      emp.empId.toString() === id.toString()
        ? { ...emp, ...updatedData }
        : emp
    ),
  })),
      deleteEmp: (id) =>
        set((state) => ({
          empData: state.empData.filter((emp) => emp.empId !== id),
        })),
      clearEmp: () => set({ empData: [] }),
    }),
    {
      name: "emp-storage",
    }
  )
);

export default useEmpStore;
