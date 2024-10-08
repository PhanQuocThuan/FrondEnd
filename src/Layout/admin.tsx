import React from "react";
import { Layout, Menu, Avatar, Input } from "antd";
import { Link, Outlet } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  BellOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const Admin: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/admin/users">Users</Link> {/* Thay đổi link tới Users */}
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            <Link to="/admin/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UnorderedListOutlined />}>
            <Link to="/admin/List">List</Link> {/* Có thể giữ lại nếu cần */}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 16px",
            }}
          >
            <Search placeholder="Search..." style={{ width: 200 }} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <BellOutlined style={{ fontSize: 24, marginRight: 16 }} />
              <SettingOutlined style={{ fontSize: 24, marginRight: 16 }} />
              <Avatar
                size="large"
                src="https://example.com/your-avatar-url.png"
              />
            </div>
          </div>
        </Header>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Outlet /> {/* Outlet để render các trang con */}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
