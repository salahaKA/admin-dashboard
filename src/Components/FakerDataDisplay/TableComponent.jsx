import React from 'react'
import { dataSource } from '../../Database/fakerData'
import { Table } from 'antd'


const TableComponent = () => {
    const columns= [
        { title: "Name", dataIndex: "name" },
    { title: "Age", dataIndex: "age" },
    { title: "Email", dataIndex: "email" },
    { title: "Gender", dataIndex: "gender" },
    { title: "City", dataIndex: "city" },
    ]
  return (
    <Table dataSource={dataSource} columns={columns}>

    </Table>
  )
}

export default TableComponent