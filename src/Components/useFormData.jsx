import Password from "antd/es/input/Password";
import { create } from "zustand";

const useFormStore = create((set) => ({
  formData: {    
    name: "",
    email: "",
    password: "",
    cpassword: "",
    pohne: ""   
  },
  setUser: (userData) => set({ formData: userData }),
  clearUser: () => set({ formData: { name:"", email:"", password:"", cpassword:"", phone:"" }})
}))


export default useFormStore;