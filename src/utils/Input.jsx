import { Form, Input } from "antd";
import React from "react";

const FormInput = (prop) => {
    const {label, name, message,placeholder,type, message2}=prop;
  return (
    <div>
      <Form.Item
        label={label}
        name={name}
        rules={[{ required: true, message: {message} }]}
        type={type}
      >
        <Input placeholder={placeholder} />
      </Form.Item>
    </div>
  );
};

export default FormInput;
