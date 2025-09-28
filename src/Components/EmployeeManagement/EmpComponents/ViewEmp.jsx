import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useEmpStore from "../Store/EmployeeStore";
import { Button, Descriptions, message, Modal, Space } from "antd";



const ViewEmp = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const empData = useEmpStore((state) => state.empData);
  const deleteEmp = useEmpStore((state) => state.deleteEmp);
  

  const employee = empData?.find((e) => e?.empId.toString() === id);

  const handleDelete = () => {
    if (!employee) return;
    deleteEmp(employee.empId);
    message.success("Employee deleted!");
    setIsModalOpen(false);
    navigate("/employees"); // ✅ navigate after delete
  };

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 20 }}>
      {employee ? (
        <>
          <h2>{id}-Employee Details</h2>
          <Descriptions size="middle">
            <Descriptions.Item label="ID">{employee?.empId}</Descriptions.Item>
            <Descriptions.Item label="Name">{employee?.name}</Descriptions.Item>
            <Descriptions.Item label="Email">
              {employee?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Department">
              {employee?.department}
            </Descriptions.Item>
            <Descriptions.Item label="Joining Date">
              {employee?.doj}
            </Descriptions.Item>
          </Descriptions>
          <Space style={{ marginTop: 20 }}>
            <Button
              type="primary"
              onClick={() => navigate(`/empForm/${employee.empId}`)}
            >
              EDIT
            </Button>
            <Button danger onClick={() => setIsModalOpen(true)}>
              DELETE
            </Button>


          </Space>
        </>
      ) : (
        <p>Employee not found!</p>
      )}

      <Modal
        title="Confirm Delete"
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={() => setIsModalOpen(false)}
        okText="Yes, Delete"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
      >
        <p>
          Are you sure you want to delete employee{" "}
          <strong>{employee?.name}</strong> (ID: {employee?.empId})?
        </p>
      </Modal>
    </div>
  );
};

export default ViewEmp;
