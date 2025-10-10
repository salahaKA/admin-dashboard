import React from "react";
import { DownOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

const MyDropdown = () => {
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st Menu
        </a>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <span>
          <MenuUnfoldOutlined /> Menu 2
        </span>
      ),
      disabled: true,
    },
    {
      key: "3",
      label: "Menu 3",
      danger: true,
    },
  ];

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()} href="#">
        <Space>
          Hover Me <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default MyDropdown;
