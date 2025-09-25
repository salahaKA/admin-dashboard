import React, { useEffect, useState } from "react";
import { Form, Input, Select, DatePicker, Button, Typography } from "antd";
import FormTypograpy from "../../utils/Typograpy";
import FormInput from "../../utils/Input";
import FormSelect from "../../utils/Select";
import FormDatePicker from "../../utils/DatePicker";
import FormButtons from "../../utils/Buttons";
import useEmployeeStore from "./useEmployeeStore";

const EmployeeForm = ({ employee, onCancel }) => {
  // const {employees, addEmployees, clearEmployees} = useEmployeeStore();
  const [form] = Form.useForm();
  const addEmployees = useEmployeeStore((state) => state.addEmployees);
  const employees = useEmployeeStore((state) => state.employees);

  useEffect(() => {
    if (employee) {
      form.setFieldsValue({
        // set initial values for edit
        name: employee.name,
        email: employee.email,
        department: employee.department,
        joiningDate: employee.joiningDate
          ? new Date(employee.joiningDate)
          : null,
      });
    } else {
      form.resetFields();
    }
  }, [employee, form]);

  const onFinish = (values) => {
    if (employee) {
      const updatedEmployees = employees.map((emp) =>
        emp.key === employee.key ? { ...emp, ...values } : emp
      );

      addEmployees(updatedEmployees);
    } else {
      addEmployees(values);
    }

    form.resetFields();
    onCancel(); // exit edit mode
  };

  // const onFinish = (values) => {
  //   console.log("Employee Data:", values);
  //   addEmployees(values);

  // };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 10,
      }}
    >
       <FormTypograpy level={1} Text={employee ? "EDIT EMPLOYEE" : "ADD EMPLOYEE"} />

      <Form form={form} layout="vertical" onFinish={onFinish}>
        <FormInput
          label={"Full Name"}
          name={"name"}
          message={"Please enter employee name"}
          placeholder={"Enter full name"}
        />
        <FormInput
          label={"Email"}
          name={"email"}
          message={"Please enter email"}
          message2={"Enter a valid email"}
          placeholder={"Enter email"}
          type="email"
        />

        <FormSelect
          label={"Department"}
          name={"department"}
          message={"Please select department"}
          placeholder={"Select department"}
          options={["HR", "IT", "Finance", "Marketing"]}
        />
        <FormDatePicker
          label={"Joining Date"}
          name={"joiningDate"}
          message={"Please select joining date"}
          picker={"date"}
        />

        <Form.Item>
          <FormButtons type="primary" htmlType="submit"  Text={employee ? "UPDATE" : "SUBMIT"} />
          <FormButtons type="primary" Text="RESET" onClick={onReset} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmployeeForm;
