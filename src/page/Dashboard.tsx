// src/pages/Dashboard.tsx
import React from "react";
import Cart from "../component/Cart";

const Dashboard = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 bg-primary  sidebar">
            <h3 className="mt-3">Admin Panel</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  Quản lý người dùng
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Quản lý sản phẩm
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Thống kê
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/car t">
                  Đơn hàng
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-9 col-lg-10 main-content">
            <div className="d-flex justify-content-between mt-3 mb-4">
              <h2>Dashboard</h2>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="card text-white bg-primary mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Người dùng</h5>
                    <p className="card-text">1,234 người dùng</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card text-white bg-success mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Sản phẩm</h5>
                    <p className="card-text">567 sản phẩm</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card text-white bg-warning mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Đơn hàng</h5>
                    <p className="card-text">234 đơn hàng</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card text-white bg-danger mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Doanh thu</h5>
                    <p className="card-text">$12,345</p>
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
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Ngày</th>
                </tr>
              </thead>
              <tbody>
                <tr>
  <th scope="row">1</th>
                  <td>Nguyễn Văn A</td>
                  <td>Sản phẩm 1</td>
                  <td>2</td>
                  <td>24/09/2024</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Trần Thị B</td>
                  <td>Sản phẩm 2</td>
                  <td>1</td>
                  <td>23/09/2024</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Phạm Văn C</td>
                  <td>Sản phẩm 3</td>
                  <td>5</td>
                  <td>22/09/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  

export default Dashboard;
export{}
