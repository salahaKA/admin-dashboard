import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Input,
  message,
  Select,
  Typography,
  Upload,
} from "antd";
import Password from "antd/es/input/Password";
import React from "react";

const Basic2 = () => {
  const genderOptions = ["Male", "Female", "Other"];

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const onFinish = (value) => {
    console.log("Submitted successfully", value);
  };

  const onFinishFailed= (err)=>{
    console.log("Form submission failed", err)
  }
  return (
    <div className="container" style={{ padding: 20 }}>
      <header>
        <Typography.Title
          level={1}
          style={{ padding: 10, textAlign: "center" }}
        >
          FORM VALIDATION
        </Typography.Title>
        <Divider></Divider>
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={onFinish}
          onFinishFailed= {onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="name"
            label="Full Name:"
            tooltip="Enter full name"
            rules={[
              { required: true, message: "Tis field is required" },
              { max: 25, message: "No mortan 25 caractors" },
              { whitespace: true },
              { min: 8, message: "Atleast8 chharas" },
            ]}
            autoFocus="true"
            hasFeedback
          >
            <Input placeholder="Enter your full name" allowClear></Input>
          </Form.Item>
          <Form.Item
            label="Email:"
            name="email"
            rules={[
              { required: true },
              { type: "email", message: "Not valid email" },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Enter your email"
              allowClear
              variant="filled"
            ></Input>
          </Form.Item>
          <Form.Item
            label="Password:"
            name="password"
            hasFeedback
            rules={[
              { required: true, message: "tis field is required" },
              { min: 6, message: "Atleast 6 cara" },
              {
                validator: (_, value) =>
                  value && value.includes("A")
                    ? Promise.resolve()
                    : Promise.reject("include 'A' "),
              },
            ]}
          >
            <Input.Password
              placeholder="Enter password"
              allowClear
            ></Input.Password>
          </Form.Item>
          <Form.Item
            label="Confirm Password:"
            name="cpassword"
            hasFeedback
            dependencies={["password"]}
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two password tat you entered does not match"
                  );
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="ENter to confirm"
              allowClear
            ></Input.Password>
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender:"
            tooltip="Choose  a gender"
            requiredMark="optional"
          >
            <Select placeholder="Choose your Gender:">
              {genderOptions.map((item) => {
                return (
                  <Select.Option
                    key={item.toLowerCase()}
                    value={item.toLowerCase()}
                  >
                    {item}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item label="DOB" name="dob" tooltip="Date Of Birth">
            <DatePicker
              placeholder="Choose DOB"
              picker="date"
              style={{ width: "100%" }}
            ></DatePicker>
          </Form.Item>

          <Form.Item
            name="upload"
            label="Upload File:"
            valuePropName="fileList"
            status="validating"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) {
                return e;
              }
              return e?.fileList;
            }}
            rules={[
              { required: true, message: "Please upload a file" },
            ]}
          >
            <Upload beforeUpload={() => false} maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="website"
            label="Website:"
            tooltip="Add your website url"
            rules={[
              { required: true, message: "This field is required" },
              {
                pattern: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/,
                message: "Please enter a valid URL (e.g. https://example.com)",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="Add website url" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            wrapperCol={{ span: 24 }}
            
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("You must accept the terms")),
              },
            ]}
            hasFeedback
          >
            <Checkbox>
              Agree to our <a href="#">Terms and conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="dashed" htmlType="submit" block onClick={success}>
              REGISTER
            </Button>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="dashed" htmlType="reset" block>
              CLEAR
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default Basic2;
