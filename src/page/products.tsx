import React, { FC, useState } from "react";
import { Table, Space, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface ProductType {
  key: string;
  name: string;
  price: number;
  category: string;
}

const Products: FC = () => {
  const [dataSource, setDataSource] = useState<ProductType[]>([
    {
      key: "1",
      name: "Product 1",
      price: 100,
      category: "Category 1",
    },
    {
      key: "2",
      name: "Product 2",
      price: 200,
      category: "Category 2",
    },
    {
      key: "3",
      name: "Product 3",
      price: 300,
      category: "Category 3",
    },
  ]);

  const columns: ColumnsType<ProductType> = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />}>
            Edit
          </Button>
          <Button type="primary" danger icon={<DeleteOutlined />}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>List of Products</h1>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default Products;
