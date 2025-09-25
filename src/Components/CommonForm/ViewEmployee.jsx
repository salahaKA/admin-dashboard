import React from "react";
import { Descriptions } from "antd";

const ViewEmployee = ({ employee }) => {
  if (!employee)
    return (
      <p style={{ color: "red", textAlign: "center", marginTop: 20 }}>
        Please select an employee from the table
      </p>
    );

  return (
    <Descriptions
      title="Employee Details"
      bordered
      column={1}
      style={{ maxWidth: 600, margin: "20px auto" }}
    >
      <Descriptions.Item label="Name">{employee.name}</Descriptions.Item>
      <Descriptions.Item label="Email">{employee.email}</Descriptions.Item>
      <Descriptions.Item label="Department">{employee.department}</Descriptions.Item>
      <Descriptions.Item label="Joining Date">
        {employee.joiningDate ? employee.joiningDate.split("T")[0] : ""}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default ViewEmployee;
