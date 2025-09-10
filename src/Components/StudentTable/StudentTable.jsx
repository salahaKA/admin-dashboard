import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Checkbox, Modal, Radio, Space, Table } from "antd";
import React, { useState } from "react";
import StudentForm from "./AddStudent";



const StudentTable = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: 1,
      name: "Alice Johnson",
      age: 20,
      address: "123 Main St, City A",
      batch: "Batch 1",
      gender: "Female",
      isCheck: "true",
    },
    {
      key: 2,
      name: "Bob Smith",
      age: 22,
      address: "456 Oak Ave, City B",
      batch: "Batch 2",
      gender: "Male",
      isCheck: "true",
    },
    {
      key: 3,
      name: "Catherine Lee",
      age: 21,
      address: "789 Pine Rd, City C",
      batch: "Batch 3",
      gender: "Female",
      isCheck: "true",
    },
    {
      key: 4,
      name: "David Brown",
      age: 23,
      address: "321 Maple St, City D",
      batch: "Batch 1",
      gender: "Male",
      isCheck: "true",
    },
    {
      key: 5,
      name: "Ella Martinez",
      age: 20,
      address: "654 Birch Ln, City E",
      batch: "Batch 2",
      gender: "Female",
      isCheck: "true",
    },
    {
      key: 6,
      name: "Frank Wilson",
      age: 24,
      address: "987 Cedar Blvd, City F",
      batch: "Batch 3",
      gender: "Male",
      isCheck: "false",
    },
    {
      key: 7,
      name: "Grace Taylor",
      age: 22,
      address: "159 Elm St, City G",
      batch: "Batch 1",
      gender: "Female",
      isCheck: "true",
    },
    {
      key: 8,
      name: "Henry White",
      age: 21,
      address: "753 Spruce Dr, City H",
      batch: "Batch 2",
      gender: "Male",
      isCheck: "false",
    },
    {
      key: 9,
      name: "Isabella King",
      age: 23,
      address: "852 Willow Ct, City I",
      batch: "Batch 3",
      gender: "Female",
      isCheck: "true",
    },
    {
      key: 10,
      name: "Jack Davis",
      age: 20,
      address: "147 Aspen Way, City J",
      batch: "Batch 1",
      gender: "Male",
      isCheck: "false",
    },
  ]);

  const [showForm, setShowForm] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleAdd= (values)=>{
    const newRecord = {
      key: dataSource.length+1,
      ...values,
    };
    setDataSource([...dataSource, newRecord])
    setShowForm(false)
  }

  const handleDelete = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (selectedRecord) {
      setDataSource(dataSource.filter((item) => item.key !== selectedRecord.key));
    }
    setIsModalVisible(false);
    setSelectedRecord(null);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
    setSelectedRecord(null);
  };

  // const handleDelete = (key) => {
  //   setDataSource(dataSource.filter((item) => item.key !== key));
  // };

  const handleEdit = (record) => {
    console.log("Edit student:", record);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    { title: "Age", dataIndex: "age", key: "age" },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Batch",
      dataIndex: "batch",
      key: "batch",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      // render: (gender) => (
      //   <Radio.Group value={gender} disabled>
      //     <Radio value="Male">Male</Radio>
      //     <Radio value="Female">Female</Radio>
      //   </Radio.Group>
      // ),
    },
    {
      title: "isCheck",
      dataIndex: "isCheck",
      key: "isCheck",
      // render: (isCheck) => <Checkbox checked={isCheck} disabled />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            type="primary"
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            type="primary"
            danger
            onClick={() => handleDelete(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (<div style={{ padding: 20 }}>
      {!showForm ? (
        <>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setShowForm(true)}
            style={{ marginBottom: 16 }}
          >
            ADD
          </Button>
          <Table dataSource={dataSource} columns={columns} />

          {/* Delete Confirmation Modal */}
          <Modal
            title="Confirm Delete"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancelModal}
            okText="Yes, Delete"
            cancelText="Cancel"
            centered
          >
            <p>
              Are you sure you want to delete{" "}
              <b>{selectedRecord?.name}</b>?
            </p>
          </Modal>
        
        </>
      ) : (
        <StudentForm onSubmit={handleAdd} onCancel={() => setShowForm(false)} />
      )}
    </div>);
};

export default StudentTable;
