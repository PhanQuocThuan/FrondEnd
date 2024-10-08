import React, { FC, useState, useEffect } from "react";
import { Table, Space, Button, Modal, Form, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface DataType {
  Id: string;
  name: string;
  age: number;
  email: string;
}

const List: FC = () => {
  const [dataSource, setDataSource] = useState<DataType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingUser, setEditingUser] = useState<DataType | null>(null);

  // Tải dữ liệu từ localStorage khi component được khởi tạo
  useEffect(() => {
    const storedData = localStorage.getItem("userList");
    if (storedData) {
      setDataSource(JSON.parse(storedData));
    } else {
      const initialData: DataType[] = [
        {
          Id: "1",
          name: "John Brown",
          age: 32,
          email: "john.brown@example.com",
        },
        {
          Id: "2",
          name: "Jim Green",
          age: 42,
          email: "jim.green@example.com",
        },
        {
          Id: "3",
          name: "Joe Black",
          age: 32,
          email: "joe.black@example.com",
        },
      ];
      setDataSource(initialData);
      localStorage.setItem("userList", JSON.stringify(initialData)); // Lưu vào localStorage
    }
  }, []);

  const showModal = () => {
    setEditingUser(null); // Reset editing user
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingUser) {
          // Chỉnh sửa người dùng
          const updatedDataSource = dataSource.map((user) =>
            user.Id === editingUser.Id ? { ...user, ...values } : user
          );
          setDataSource(updatedDataSource);
          localStorage.setItem("userList", JSON.stringify(updatedDataSource)); // Cập nhật localStorage
        } else {
          // Thêm người dùng mới
          const newUser: DataType = {
            Id: String(dataSource.length + 1),
            name: values.name,
            age: values.age,
            email: values.email, // Thay đổi từ address thành email
          };
          const updatedDataSource = [...dataSource, newUser];
          setDataSource(updatedDataSource);
          localStorage.setItem("userList", JSON.stringify(updatedDataSource)); // Lưu vào localStorage
        }

        setIsModalVisible(false);
        form.resetFields(); // Reset form
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleEdit = (user: DataType) => {
    setEditingUser(user);
    form.setFieldsValue(user); // Set giá trị vào form cho chỉnh sửa
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      onOk: () => {
        const updatedDataSource = dataSource.filter((user) => user.Id !== id);
        setDataSource(updatedDataSource);
        localStorage.setItem("userList", JSON.stringify(updatedDataSource)); // Cập nhật localStorage
      },
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "Id",
      key: "Id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email", // Thay đổi từ Address thành Email
      dataIndex: "email", // Thay đổi từ address thành email
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.Id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>List of Users</h1>
      <Button type="primary" onClick={showModal}>
        Add User
      </Button>
      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please input the age!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Email" // Thay đổi từ Address thành Email
            name="email" // Thay đổi từ address thành email
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Table columns={columns} dataSource={dataSource} rowKey="Id" />
    </div>
  );
};

export default List;
