import { Form } from "antd";
import React, { useEffect } from "react";
import FormInput from "../../../utils/Input";
import FormSelect from "../../../utils/Select";
import FormDatePicker from "../utils/DatePicker";
import FormButtons from "../../../utils/Buttons";
import FormTypograpy from "../../../utils/Typograpy";
import useEmpStore from "../Store/EmployeeStore";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";

const EmpForm = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { empData, empAdd, updateEmp } = useEmpStore();
  const navigate = useNavigate();

  // Find employee for editing
  const editingEmployee = empData.find((e) => e.empId.toString() === id);

  // Prefill fields if editing
  useEffect(() => {
    if (editingEmployee) {
      form.setFieldsValue({
        ...editingEmployee,
        doj: editingEmployee.doj ? dayjs(editingEmployee.doj, "DD/MM/YYYY") : null,
      });
    }
  }, [editingEmployee, form]);

  const onFinish = (values) => {
    const formattedValues = {
      ...values,
      doj: values?.doj ? dayjs(values.doj).format("DD/MM/YYYY") : null,
    };

    if (editingEmployee) {
      updateEmp(editingEmployee.empId, formattedValues);
      console.log("Updated successfully!", formattedValues);
    } else {
      empAdd(formattedValues);
      console.log("Created new employee:", formattedValues);
    }

    form.resetFields();
    navigate("/employees");

    // fetcing data from local storage
  //   const storedData = JSON.parse(localStorage.getItem("emp-storage"));
  //   console.log("Raw from localStorage:", storedData);
  //   console.log("Employee Data:", storedData?.state?.empData || []);
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
      <Form onFinish={onFinish} form={form} layout="vertical">
        <FormTypograpy
          level={1}
          Text={editingEmployee ? "EDIT EMPLOYEE" : "ADD EMPLOYEE"}
        />

        <FormInput
          label={"ID"}
          name={"empId"}
          message={"Please enter employee id"}
          placeholder={"Enter ID"}
          disabled={!!editingEmployee} // lock ID during edit
        />

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
          name={"doj"}
          message={"Please select joining date"}
          picker={"date"}
        />

        <Form.Item>
          <FormButtons
            type="primary"
            htmlType="submit"
            Text={editingEmployee ? "UPDATE" : "SAVE"}
          />
          <FormButtons type="default" htmlType="reset" Text={"CLEAR"} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmpForm;
