import { Form, Select } from "antd";
import React from "react";

const FormSelect = ({ label, name, message, placeholder, options = [] }) => {
  return (
    <div>
      <Form.Item
        name={name}
        label={label}
        rules={[{ required: true, message }]}
      >
        <Select placeholder={placeholder}>
          {options.map((item) => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default FormSelect;
