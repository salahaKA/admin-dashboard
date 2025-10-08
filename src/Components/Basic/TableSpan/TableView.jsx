import { PlusOutlined } from "@ant-design/icons";
import { Button, Descriptions } from "antd";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const { Item } = Descriptions;

const TableView = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const record = location.state?.record;

  if (!record) {
    message.error("No data found. Please go back to the table.");
    return (
      <div style={{ padding: 20 }}>
        <Button type="primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: 30 }}>
      <Descriptions title={`Todo Details (ID: ${id})`} bordered column={1}>
        <Item label="SLNO">{record.id}</Item>
        <Item label="USER ID">{record.userId}</Item>
        <Item label="ToDo">{record.todo}</Item>
        <Item label="Completed">{record.compled ? "Yes" : "No"}</Item>
      </Descriptions>
      <div style={{ marginTop: 20, display: "flex", justifyContent:"flex-end" }} >
        <Button icon={<PlusOutlined/>} variant="solid" color="green" onClick={() => navigate(-1)} style={{justifyContent:"end"}}>
          BACK TO TABLE
        </Button>
      </div>
    </div>
  );
};

export default TableView;
