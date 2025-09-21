import React, { useEffect, useState } from "react";
import { Table,  Skeleton } from "antd";
import axios from "axios";

const Tab3 = () => {
  // state to hold data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // table column definitions
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price ($)", dataIndex: "price", key: "price" },
  ];

  // fetch data when component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products"); // API call
        setData(res.data.products); // store products array into state
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Products Table</h2>
      {loading ? (
        <Skeleton size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          rowKey="id" // tells table to use 'id' as unique key
          bordered
        />
      )}
    </div>
  );
};

export default Tab3;
