import React, { useState } from "react";
import { Button, Table } from "antd";
import useEmployeeStore from "./useEmployeeStore";
import ViewEmployee from "./ViewEmployee";
import EmployeeForm from "./EmployeeForm";
// import useEmployeeStore from "./useEmployeeStore";
// import ViewEmployeeData from "./ViewEmployeeData";


const EmployeeTable = () => {
  const employees = useEmployeeStore((state) => state.employees);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleDelete = (id) => {
    const updated = employees.filter((emp) => emp.id !== id);
    useEmployeeStore.setState({ employees: updated }); 
    if (selectedEmployee?.id === id) setSelectedEmployee(null);
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Department", dataIndex: "department", key: "department" },
    {
      title: "Joining Date",
      dataIndex: "joiningDate",
      key: "joiningDate",
      render: (date) => (date ? date.toString().split("T")[0] : ""),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
        <Button
          type="primary"
          onClick={() => {
            setSelectedEmployee(record);
            setEditMode(true); 
          }}
        >
          Edit
        </Button>
         <Button
            type="danger"
            onClick={() => handleDelete(record.id)} 
          >
            Delete
          </Button>
          </>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: "40px auto" }}>
      {editMode ? (
        <EmployeeForm  employee={selectedEmployee}
          onCancel={() => setEditMode(false)}/>
      ) : (
        <>
          <h2>Employee Table</h2>
          <Table
            columns={columns}
            dataSource={employees.map((emp, index) => ({ ...emp, key: index }))}
            pagination={{ pageSize: 5 }}
            onRow={(record) => ({
              onClick: () => setSelectedEmployee(record),
            })}
            rowClassName={(record) =>
              record === selectedEmployee ? "ant-table-row-selected" : ""
            }
          />
          <ViewEmployee employee={selectedEmployee} />
        </>
      )}
    </div>
  );
};

export default EmployeeTable;
