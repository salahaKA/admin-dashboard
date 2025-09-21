import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin, List, Alert } from "antd";
const BASE_URL = "http://localhost:3001/dummy/products"
const Tab1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(BASE_URL); 
      
      setProducts(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Spin tip="Loading products..." />;
  if (error) return <Alert type="error" message={error} />;

  return (
    <List
      bordered
      dataSource={products}
      renderItem={(item) => (
        <List.Item>
          <strong>{item.name}</strong> - ${item.price}
        </List.Item>
      )}
    />
  );
};

export default Tab1;
