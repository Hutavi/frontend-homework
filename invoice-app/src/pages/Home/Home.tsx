import React, { useState } from "react";
import { ConfigProvider, Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import HomeContent from "../../components/HomeContent/HomeContent";
import InvoiceContent from "../../components/InvoiceContent/InvoiceContent";
import { items } from "../../dataSources/MenuItemSideBar/MenuItemSideBar";
import HeaderCustom from "../../components/HeaderCustom/HeaderCustom";

const { Header, Content, Sider } = Layout;

const Home: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("g1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e.key);
    setSelectedMenuItem(e.key);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "home":
        return <HomeContent />;
      case "invoices":
        return <InvoiceContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#132f70",
        },
      }}
    >
      <style>
        {`
          .ant-menu-item, .ant-menu-submenu-title {
            font-size: 16px !important;
          }
          .ant-menu-item-selected {
            background-color: #003366 !important;
            color: #ffffff !important;
          }
          .ant-menu-item-selected .ant-menu-title-content {
            color: #ffffff !important;
          }
        `}
      </style>
      <Layout className="flex min-h-[100vh]">
        <Header style={{ display: "flex" }} className="bg-white">
          <HeaderCustom selectedMenuItem={selectedMenuItem} />
        </Header>
        <Layout className="flex-1">
          <Sider width="220px" className="bg-slate-600">
            <Menu
              onClick={onClick}
              style={{ height: "100%", minWidth: "200px" }}
              defaultSelectedKeys={["home"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout style={{ padding: "10px 10px 24px", overflow: "initial" }}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {renderContent()}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Home;
