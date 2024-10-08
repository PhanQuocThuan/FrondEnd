// src/pages/Profile.tsx
import React, { useState } from "react";
import { Avatar, Button, Input, Form, message } from "antd";

const Profile: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Admin User",
    email: "admin@example.com",
    phone: "123-456-7890",
    address: "123 Admin St, Admin City, AD 12345",
    avatar: "https://example.com/your-avatar-url.png",
  });

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSave = (values: any) => {
    setUser({ ...user, ...values });
    setEditing(false);
    message.success("Profile updated successfully!");
  };

  return (
    <div>
      <h1>Profile</h1>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <Avatar size={64} src={user.avatar} />
        <div style={{ marginLeft: 16 }}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.address}</p>
          <Button type="primary" onClick={handleEdit}>
            {editing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>
      </div>

      {editing && (
        <Form
          layout="vertical"
          onFinish={handleSave}
          initialValues={{ name: user.name, email: user.email, phone: user.phone, address: user.address }}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Profile;
