import React, { useState } from "react";
import {
  DashboardOutlined,
  FundViewOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  TableOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Switch, theme as antdTheme } from "antd";
import Dashboard from "./Dashboard";
import TableComponent from "./TableComponent";
import useThemeStore from "./themeStore";
import StudentTable from "./StudentTable/StudentTable";
import CardsComponent from "./FakerDataDisplay/CardsComponent";
import Option1 from "./Basic/Option1";
import Basic2 from "./Basic/Basic2";
import TabsComponent from "./Tabs/TabsComponent";
import EmployeeForm from "./CommonForm/EmployeeForm";
import EmployeeTable from "./CommonForm/EmployeeTable";
import EmpForm from "./EmployeeManagement/EmpComponents/EmpForm";
import EmpTable from "./EmployeeManagement/EmpComponents/EmpTable";
import ViewEmp from "./EmployeeManagement/EmpComponents/ViewEmp";
import Table1 from "./Basic/TableSpan/Table1";
import Dropdown from "./Basic/Dropdown/Dropdown";

const { Header, Sider, Content, Footer } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("1");

  const { theme, setTheme } = useThemeStore();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = antdTheme.useToken();

  const renderSection = () => {
    switch (activeSection) {
      case "1":
        return (
          <div>
            <Dashboard />
            <p>This is the Dashboard content.</p>
          </div>
        );
      case "2":
        return (
          <div>
            <TableComponent />
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
            <StudentTable />
          </div>
        );
      case "5":
        return (
          <div>
            <CardsComponent />
          </div>
        );
      case "611":
        return (
          <div>
            <Option1 />
          </div>
        );
      case "62":
        return (
          <div>
            <Basic2 />
          </div>
        );
      case "7":
        return (
          <div>
            <TabsComponent />
          </div>
        );
      case "8":
        return (
          <div>
            <EmployeeForm />
          </div>
        );
      case "9":
        return (
          <div>
            <EmployeeTable />
          </div>
        );

      case "empForm":
        return (
          <div>
            <EmpForm />
          </div>
        );
      case "empView":
        return (
          <div>
            <ViewEmp />
          </div>
        );
      case "empTable":
        return (
          <div>
            <EmpTable />
          </div>
        );

        case "tableSpan":
        return (
          <div>
            <Table1 />
          </div>
        );
        case "dropdown":
        return (
          <div>
            <Dropdown />
          </div>
        );

      // case "611":
      // return (
      //   <div>
      //     <Option1/>

      //   </div>
      // );
      default:
        return <p>Select a menu item</p>;
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme={theme}>
        <div
          className="demo-logo-vertical"
          style={{
            height: "64px",
            margin: "16px",
            borderRadius: "8px",
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
            {
              key: "5",
              icon: <FundViewOutlined />,
              label: "Cards",
            },
            {
              key: "6",
              icon: <FundViewOutlined />,
              label: "Basic",
              children: [
                {
                  key: "61",
                  label: "Basic1",
                  children: [
                    {
                      key: "tableSpan",
                      label:"Table Span"
                    },
                    {
                      key: "611",
                      label: "option1",
                    },
                    {
                      key: "612",
                      label: "option2",
                    },
                    {
                      key: "613",
                      label: "option3",
                    },
                    
                  ],
                },
                {
                  key: "62",
                  label: "ANT D",
                  children:[{
                    key:"dropdown",
                    label:"DropDown"
                  }]

                },
              ],
            },
            {
              key: "7",
              icon: <FundViewOutlined />,
              label: "Tabs",
            },
            {
              key: "8",
              icon: <FundViewOutlined />,
              label: "EMP Form",
            },
            {
              key: "9",
              icon: <FundViewOutlined />,
              label: "EMP table",
            },

            {
              key: "10",
              icon: <FundViewOutlined />,
              label: "EMP Management",
              children: [
                {
                  key: "empForm",
                  label: "EMPLOYEE Form",
                },
                {
                  key: "empTable",
                  label: "EMPLOYEE TABLE",
                },
                {
                  key: "empView",
                  label: "EMPLOYEE View",
                },
              ],
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
            // overflowY: "auto",
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
