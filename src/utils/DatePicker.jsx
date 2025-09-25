import { DatePicker, Form } from 'antd';
import React from 'react'

const FormDatePicker = (prop) => {
    const {label, name, message, picker}= prop;
  return (
    <div>
        <Form.Item
          label={label}
          name={name}
          rules={[{ required: true, message: {message} }]}
        >
          <DatePicker style={{ width: "100%" }} picker={picker} />
        </Form.Item>
    </div>
  )
}

export default FormDatePicker