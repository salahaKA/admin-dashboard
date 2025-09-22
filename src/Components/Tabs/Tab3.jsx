import React, { useEffect, useState } from "react";
import {
  Table,
  Skeleton,
  Input,
  InputNumber,
  Button,
  Space,
  BackTop,
  Select,
} from "antd";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import Papa from "papaparse";

const Tab3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // state for filters
  const [titleInput, setTitleInput] = useState("");
  const [minInput, setMinInput] = useState(null);
  const [maxInput, setMaxInput] = useState(null);

  // state for adding new product
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState(null);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price ($)", dataIndex: "price", key: "price" },
  ];

  const [filters, setFilters] = useState({
    title: "",
    minPrice: null,
    maxPrice: null,
  });

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

  // filter data only when filters are applied
  const filteredData = data.filter((item) => {
    const matchTitle = item.title
      .toLowerCase()
      .includes(filters.title.toLowerCase());

    const matchMinPrice = filters.minPrice
      ? item.price >= filters.minPrice
      : true;
    const matchMaxPrice = filters.maxPrice
      ? item.price <= filters.maxPrice
      : true;

    return matchTitle && matchMinPrice && matchMaxPrice;
  });

  // apply filters when Go button is clicked
  const applyFilters = () => {
    setFilters({
      title: titleInput,
      minPrice: minInput,
      maxPrice: maxInput,
    });
    toast.success("Successfully filtered!");
  };

  const resetFilters = () => {
    setTitleInput("");
    setMinInput(null);
    setMaxInput(null);
    setFilters({ title: "", minPrice: null, maxPrice: null });
  };

  // add new product
  const addProduct = async () => {
    if (!newTitle || !newPrice) {
      toast.error("Please enter product title and price");
      return;
    }
    try {
      const res = await axios.post("https://dummyjson.com/products/add", {
        title: newTitle,
        price: newPrice,
      });
      // update state so new product shows in table
      setData([res.data, ...data]);
      toast.success("Product added successfully!");
      // reset inputs
      setNewTitle("");
      setNewPrice(null);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    }
  };

  // Export table data to CSV
  const handleExport = () => {
    if (!filteredData || filteredData.length === 0) {
      toast.error("No data to export");
      return;
    }
    const headers = columns.map((col) => col.title);
    const keys = columns.map((col) => col.dataIndex);
    const csvData = filteredData.map((row) => keys.map((key) => row[key]));

    const csv = Papa.unparse({
      fields: headers,
      data: csvData,
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Exported successfully!");
  };

  return (
    <div style={{ padding: 20 }}>
      <div>
        <Toaster />
      </div>
      <h2>Products Table with Filters</h2>

      {/* Filters Section */}
      <Space style={{ marginBottom: 16 }}>
        {/* <Input
          placeholder="Search by Title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          style={{ width: 200 }}
        /> */}
        <Select
          showSearch
          placeholder="Select Title"
          value={titleInput}
          onChange={(value) => setTitleInput(value)}
          style={{ width: 200 }}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
          // make dropdown scrollable if many options
          dropdownStyle={{ maxHeight: 200, overflowY: "auto" }}
        >
          {data.map((item) => (
            <Select.Option key={item.id} value={item.title}>
              {item.title}
            </Select.Option>
          ))}
        </Select>
        <InputNumber
          placeholder="Min Price"
          value={minInput}
          onChange={setMinInput}
        />
        <InputNumber
          placeholder="Max Price"
          value={maxInput}
          onChange={setMaxInput}
        />
        <Button type="primary" onClick={applyFilters}>
          Go
        </Button>
        <Button onClick={resetFilters}>Reset</Button>
      </Space>

      {/* Add Product Section */}
      <h3>Add New Product</h3>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Product Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ width: 200 }}
        />
        <InputNumber
          placeholder="Price"
          value={newPrice}
          onChange={setNewPrice}
        />
        <Button type="dashed" onClick={addProduct}>
          Add Product
        </Button>
      </Space>

      <h2>Products Table</h2>
      {loading ? (
        <Skeleton size="large" />
      ) : (
        <div>
          <Button
            type="primary"
            onClick={handleExport}
            style={{ marginBottom: 16 }}
          >
            Export CSV
          </Button>
          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="id"
            bordered
            scroll={{ x: 50, y: 200 }}
            pagination={{
              pageSize: 5,
              showSizeChanger: true,
              showQuickJumper: true,
            }}
          />
          <BackTop
            target={() => document.querySelector(".ant-table-body")}
            style={{ right: 40 }}
          >
            <div
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#1677ff",
                color: "#fff",
                textAlign: "center",
                lineHeight: "40px",
                borderRadius: "50%",
                position: "absolute",
                right: 10,
                bottom: 80,
                cursor: "pointer",
              }}
            >
              ↑
            </div>
          </BackTop>
        </div>
      )}
    </div>
  );
};

export default Tab3;
