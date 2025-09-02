import React, { useState } from "react";

import { Table } from "antd";
import { render } from "@testing-library/react";
import { DeleteOutlined, EditOutlined, RestOutlined } from "@ant-design/icons";
import { studentData as initialData } from "../Database/Data";

const TableComponent = () => {
  const [data, setData] = useState(initialData);
  const columns = [
    {
      title: "Sr no",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "assress",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <DeleteOutlined
          style={{ color: "red", fontSize: "16px" }}
          onClick={() => deleteRecord(record)}
        />
      ),
    },
  ];

  const deleteRecord = (record) => {
    console.log("Record to delete", record);
    const newData = data.filter((item) => item.key !== record.key);
    setData(newData);
  };

  return (
    <div>
      <Table
        bordered
        columns={columns}
        dataSource={data}
        title={() => "Header"}
        footer={() => "Footer"}
        pagination={true}
        showHeader={true}
        tableLayout="auto"
        
      ></Table>
    </div>
  );
};

export default TableComponent;
