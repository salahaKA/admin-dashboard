import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { useNavigate } from "react-router-dom";
import useFormStore from "./useFormData";
const SignIn = () => {
  const { formData } = useFormStore();
  const { name, password } = formData;

  const [err, setErr] = useState("");

  const navigate = useNavigate("");
  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    if (values.username === name && values.password === password) {
      console.log("Logged successfully!");
      setErr("");
      navigate("/admin");
    } else {
      setErr("Invalid Username or Password");
    }
  };
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
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <h1 style={{ textAlign: "center" }}>SIgnIn Page</h1>
          {err && (
            <Form.Item>
              <div
                style={{ color: "red", fontSize: "14px", marginBottom: "8px" }}
              >
                {err}
              </div>
            </Form.Item>
          )}
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Flex vertical gap="small">
              <Button type="primary" htmlType="submit">
                SignIn
              </Button>
              <Button htmlType="reset">Reset</Button>
              <Button type="link" onClick={() => navigate("/signup")}>
                New User?
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SignIn;
