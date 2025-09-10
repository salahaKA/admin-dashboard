import React, { useState } from "react";
import {
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Switch, theme as antdTheme } from "antd";
import Dashboard from "./Dashboard";
import TableComponent from "./TableComponent";
import useThemeStore from "./themeStore";
import StudentTable from "./StudentTable/StudentTable";


const { Header, Sider, Content, Footer } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("1");


  const {theme, setTheme}= useThemeStore();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = antdTheme.useToken();

  const renderSection = () => {
    switch (activeSection) {
      case "1":
        return (
          <div>
            <Dashboard/>
            <p>This is the Dashboard content.</p>
          </div>
        );
      case "2":
        return (
          <div>
            <TableComponent/>
            <p>This is the View content.</p>
          </div>
        );
      case "3":
        return (
          <div>
            <h2>Nav 3</h2>
            <p>This is Nav 3 content.</p>
          </div>
        );
        case "4":
        return (
          <div>
            <StudentTable/>
            
          </div>
        );
      default:
        return <p>Select a menu item</p>;
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="demo-logo-vertical"
          style={{
            height: "64px",
            margin: "16px",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Logo
        </div>
        <Menu
          theme={theme}
          mode="inline"
          selectedKeys={[activeSection]}
          onClick={({ key }) => setActiveSection(key)}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <TableOutlined />,
              label: "View",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Nav 3",
            },
            {
              key: "4",
              icon: <TableOutlined />,
              label: "Student Table",
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer, color: "black" }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          Header
          {/* Theme Switch */}
          <Switch
            checked={theme === "dark"}
            onChange={setTheme}
            checkedChildren="🌙"
            unCheckedChildren="🌞"
          />
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "80vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderSection()}
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
