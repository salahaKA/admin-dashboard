import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import MainLayout from "./Components/MainLayout";
import useThemeStore from "./Components/themeStore";
import { ConfigProvider, theme as antdtheme } from "antd";
import Calculator from "./Components/Calculator";
import Calculator3 from "./Components/Calculator+Redux/Calculator3";
import EmpTable from "./Components/EmployeeManagement/EmpComponents/EmpTable";
import ViewEmp from "./Components/EmployeeManagement/EmpComponents/ViewEmp";
import EmpForm from "./Components/EmployeeManagement/EmpComponents/EmpForm";

const App = () => {
  const { theme } = useThemeStore();
  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark"
            ? antdtheme.darkAlgorithm
            : antdtheme.defaultAlgorithm,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/admin" element={<MainLayout />}></Route>
          {/* <Route path='/calculator' element={<Calculator/>}></Route> */}
          {/* <Route path='/calculator2' element={<Calculator2/>}></Route> */}
          <Route path="/c3" element={<Calculator3 />}></Route>

          {/* Employee Management system */}
          <Route path="/empForm/:id?" element={<EmpForm/>}/>
          <Route path="/employees" element={<EmpTable />} />
          <Route path="/employees/:id" element={<ViewEmp />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
