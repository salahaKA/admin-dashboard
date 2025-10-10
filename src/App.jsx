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
import StudentObjForm from "./Components/NormalObjectForm/StudentObjForm";
import Table1 from "./Components/Basic/TableSpan/Table1";
import TableView from "./Components/Basic/TableSpan/TableView";
import MyDropdown from "./Components/Basic/Dropdown/Dropdown";

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

          {/* Cell span and table span */}
          <Route path="/tableSpan" element={<Table1/>}/>



          {/* Basic form, state management */}
          <Route path="/studObjForm" element={<StudentObjForm/>}/>
          <Route path="/tableView" element={<TableView/>}/>
           <Route path="/tableView/:id" element={<TableView/>}/>


           {/* DropDown */}
           <Route path="/dropdown" element={<MyDropdown/>}/>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
