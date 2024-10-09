import React, { useState } from "react";
import { Layout, Menu, Avatar, Input, message } from "antd";
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
  const [avatar, setAvatar] = useState(
    "https://example.com/your-avatar-url.png"
  );

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
        message.success("Avatar updated successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/admin/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            <Link to="/admin/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UnorderedListOutlined />}>
            <Link to="/admin/user">User</Link>
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
              <Avatar size="large" src={avatar} />
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ marginLeft: 10, display: "none" }}
                id="avatar-upload"
              />
              <label htmlFor="avatar-upload" style={{ cursor: "pointer" }}>
                <span style={{ marginLeft: 10 }}>Change Avatar</span>
              </label>
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
