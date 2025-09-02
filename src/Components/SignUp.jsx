import React, { useState } from "react";

import { Button, Flex, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import useFormStore from "./useFormData";

const { Option } = Select;

// const setUser= useFormStore((state=> state.setUser));

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const SignUp = () => {
  const navigate = useNavigate();
  const { formData, setUser } = useFormStore();
const { name, email, password, cpassword, phone } = formData;

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setUser(values);
    console.log('Register Data:',  useFormStore.getState().formData);
    // setUser({
    //   name: values.name,
    //   email: values.email,
    //   password: values.password,
    // });
    navigate('/signin')
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="87">+91</Option>
      </Select>
    </Form.Item>
  );

  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  

  return (
    <div
      className="form-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #f0f2f5, #fafafa)",
      }}
    >
      <div
        className="form-box"
        style={{
          background: "#fff",
          padding: "32px 40px",
          borderRadius: "12px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 6px 18px",
        }}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            
            prefix: "86",
          }}
          style={{ maxWidth: 600 }}
          scrollToFirstError
        >
          <h1 style={{textAlign:"center"}}>Signup Page</h1>
          <Form.Item
            name="name"
            label="name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Flex vertical gap="small">
              <Button type="primary" htmlType="submit">
                SignUp
              </Button>
              <Button htmlType="reset">Reset</Button>
              <Button type="link" onClick={() => navigate("/signin")}>
                Already have account?
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
