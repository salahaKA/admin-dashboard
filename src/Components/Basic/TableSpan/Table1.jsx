import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Table1 = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/todos");
        toast.success("Data fetched successfully!");
        setData(res.data.todos);
        console.log("Fetched data:", res.data.todos);
      } catch (err) {
        console.error("Error:", err);
        toast.error("Failed to fetch");
      }
    };
    fetchData();
  }, []);

  const cols = [
    {
      title: "SLNO",
      key: "id",
      dataIndex: "id",
      onCell: (_, index) => ({
        rowSpan: index === 1 ? 2 : 1,
      }),
    },
    {
      title: "A",
      key: "a",
      children: [
        {
          title: "ID",
          key: "userId",
          dataIndex: "userId",
          onCell: (_, index) => {
            
            if (index === 2) {
              return { rowSpan: 0 };
            }
            return { rowSpan: 1 };
          },
        },
        { title: "ToDo", key: "todo", dataIndex: "todo" },
      ],
    },
    {
      title: "Completed",
      key: "completed",
      dataIndex: "completed",
      render: (completed) => (completed ? "Yes" : "No"),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Toaster />
      <Table
        dataSource={data}
        columns={cols}
        rowKey="id"
        style={{ padding: 20, Swidth:"1600px"}}
        bordered
        pagination={{ pageSize: 10 }}
        onRow={(record)=>({
          onClick: ()=> navigate(`/tableView/${record.id}`,{state:{record}}),
          style:{cursor:"pointer"}
        })}
      />
    </div>
  );
};

export default Table1;
