import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const Dashboard = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const fetchOrders = async () => {
    const orderCollection = collection(firestore, "orders");
    const orderSnapshot = await getDocs(orderCollection);
    const orderList = orderSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setOrders(orderList);
  };
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const userCollection = collection(firestore, "users");
    const userSnapshot = await getDocs(userCollection);
    const userList = userSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUsers(userList);
  };

  const [products, setProducts] = useState<any[]>([]);
  const fetchProducts = async () => {
    const productCollection = collection(firestore, "products");
    const productSnapshot = await getDocs(productCollection);
    const productList = productSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(productList);
  };

  useEffect(() => {
    fetchOrders();
    fetchUsers();
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9 col-lg-10 main-content">
          <div className="d-flex justify-content-between mt-3 mb-4">
            <h2>Dashboard</h2>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">Người dùng</h5>
                  <p className="card-text">{users.length} người dùng</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card text-white bg-success mb-3">
                <div className="card-body">
                  <h5 className="card-title">Sản phẩm</h5>
                  <p className="card-text">{products.length} sản phẩm</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card text-white bg-warning mb-3">
                <div className="card-body">
                  <h5 className="card-title">Đơn hàng</h5>
                  <p className="card-text">{orders.length} đơn hàng</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card text-white bg-danger mb-3">
                <div className="card-body">
                  <h5 className="card-title">Doanh thu</h5>
                  <p className="card-text"> vnd</p>
                </div>
              </div>
            </div>
          </div>

          <h4>Đơn hàng gần đây</h4>
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Khách hàng</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Tổng giá</th>
                <th scope="col">Ngày lập</th>
                <th scope="col">Xem chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{order.email}</td>
                  <td>{order.quantity}</td>
                  <td>{order.totalPrice} VND</td>
                  <td>{order.orderDate}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() =>
                        alert(JSON.stringify(order.products, null, 2))
                      }
                    >
                      Xem chi tiết
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
