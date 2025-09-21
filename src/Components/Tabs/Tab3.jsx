import React, { useEffect, useState } from "react";
import { Table,  Skeleton, Input, InputNumber, Button, Space } from "antd";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const Tab3 = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  // state for filters
   const [titleInput, setTitleInput] = useState("");
  const [minInput, setMinInput] = useState(null);
  const [maxInput, setMaxInput] = useState(null);

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

    const matchMinPrice = filters.minPrice ? item.price >= filters.minPrice : true;
    const matchMaxPrice = filters.maxPrice ? item.price <= filters.maxPrice : true;

    return matchTitle && matchMinPrice && matchMaxPrice;
  });

  // apply filters when Go button is clicked
  const applyFilters = () => {
    setFilters({
      title: titleInput,
      minPrice: minInput,
      maxPrice: maxInput,
    });
    toast.success('Successfully filtered!')
  };

  
  const resetFilters = () => {
    setTitleInput("");
    setMinInput(null);
    setMaxInput(null);
    setFilters({ title: "", minPrice: null, maxPrice: null });
  };


  return (
    <div style={{ padding: 20 }}>
        <div><Toaster/></div>
        <h2>Products Table with Filters</h2>

        {/* Filters Section */}
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search by Title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          style={{ width: 200 }}
        />
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
      <h2>Products Table</h2>
      {loading ? (
        <Skeleton size="large" />
      ) : (
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id" // tells table to use 'id' as unique key
          bordered
        />
      )}
    </div>
  );
};

export default Tab3;
