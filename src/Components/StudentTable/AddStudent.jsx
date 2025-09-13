import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  Checkbox,
  Button,
  Space,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const AddStudent = ({  onCancel }) => {
  const [form] = Form.useForm();

  const onFinish= (values)=>{
    if (values.image && values.image.fileList.length > 0) {
      values.image = URL.createObjectURL(values.image.file.originFileObj);
    } else {
      values.image = null;
    }
    onSubmit(values);
    form.resetFields();
  }

  return (
    <div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
      <h1>Add Student</h1>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="age" label="Age" rules={[{ required: true }]}>
          <InputNumber min={18} max={30} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="address" label="Address" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="batch" label="Batch" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="Batch 1">Batch 1</Select.Option>
            <Select.Option value="Batch 2">Batch 2</Select.Option>
            <Select.Option value="Batch 3">Batch 3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="isCheck" valuePropName="checked">
          <Checkbox>Checked</Checkbox>
        </Form.Item>

        <Form.Item name= "image" label="Upload Image" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <button
            icon={<UploadOutlined/>}
              style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
              type="button"
            >
              CLICK TO UPLOAD
            </button>
          </Upload>
        </Form.Item>

        <Space>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Space>
      </Form>
    </div>
  );
};

export default AddStudent;
