import React from "react";
import useEmpStore from "../Store/EmployeeStore";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";

const EmpTable = () => {
  const empData = useEmpStore((state) => state.empData);
  const navigate = useNavigate();
  const columns = [
    {
      title: "ID",
      dataIndex: "empId",
      key: "empId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Joining Date",
      dataIndex: "doj",
      key: "doj",
    },
  ];

  return (
    <div>
      <Button onClick={()=> navigate('/empForm')}>CREATE</Button>
      <Table
      rowKey="empId"  
        dataSource={empData}
        columns={columns}
        pagination={{ pageSize: 5 }}
        bordered
        
        scroll={{ y: 300 }}
        onRow={(record) => ({
          onClick: () => navigate(`/employees/${record.empId}`), 
          style: { cursor: "pointer" },
        })}
        
      ></Table>
    </div>
  );
};

export default EmpTable;
