import React from 'react'
import { useParams } from 'react-router-dom'
import useEmpStore from '../Store/EmployeeStore';
import { Button, Descriptions } from 'antd';

const ViewEmp = () => {
  const {id} = useParams();
  const empData= useEmpStore((state)=> state.empData);

    // Find the employee by ID (casting to string for safety)
  const employee =empData?.find((e)=> e?.empId===id)


  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 20 }}>
      {employee? (
        <>
        <h2>{id}-Employee Details</h2>
        <Descriptions  size="middle">
          <Descriptions.Item label="ID">{employee?.empId}</Descriptions.Item>
            <Descriptions.Item label="Name">{employee?.name}</Descriptions.Item>
            <Descriptions.Item label="Email">{employee?.email}</Descriptions.Item>
            <Descriptions.Item label="Department">{employee?.department}</Descriptions.Item>
            <Descriptions.Item label="Joining Date">{employee?.doj}</Descriptions.Item>
        </Descriptions>
        <Button>EDIT</Button>
        <Button>DELETE</Button>
        </>
      ):(<p>Employee not found!</p>)}
    </div>
  )
}

export default ViewEmp