import React from "react";
import "./css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faStore,
  faUser,
  faSearch,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="card-header">
      {/* Navbar cho máy tính */}
      <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-flex">
        <div className="container">
          {/* Logo */}
          <NavLink to="/home" className="navbar-brand">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
              alt="Logo"
              className="img-fluid"
            />
          </NavLink>
          {/* Tìm kiếm */}
          <div className="search-box d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm..."
            />
            <button className="btn1">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Thông tin liên hệ */}
          <div className="ms-auto d-flex align-items-center">
            <span className="contact-info">
              <NavLink to="/#" className="nav-link">
                <FontAwesomeIcon icon={faPhoneAlt} /> 0967 548 615
              </NavLink>
            </span>
            <span className="contact-info">
              <NavLink to="/#" className="nav-link">
                <FontAwesomeIcon icon={faStore} /> Địa chỉ
              </NavLink>
            </span>
            <span className="contact-info">
              <NavLink to="/login" className="nav-link">
                <FontAwesomeIcon icon={faUser} /> Tài khoản
              </NavLink>
            </span>
            <span className="contact-info">
              <NavLink to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </span>
          </div>
        </div>
      </nav>

      {/* Thanh điều hướng trên máy tính */}
      <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex">
        <div className="container">
          <ul className="navbar-nav me-sm-auto mx-md-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                Trang Chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/birthday" className="nav-link">
                Bánh Sinh Nhật
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/other" className="nav-link">
                Bánh khác
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/#" className="nav-link">
                Tin Tức
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/#" className="nav-link">
                Khuyến Mãi
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Nút bars cho điện thoại */}
      <nav className="navbar navbar-dark d-lg-none">
        <div className="container">
          {/* Logo */}
          <NavLink to="/home" className="navbar-brand">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
              alt="Logo"
              className="img-fluid"
            />
          </NavLink>
          <div className="search-box d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm..."
            />
            <button className="btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <span className="contact-info">
            <NavLink to="/#" className="nav-link">
              <FontAwesomeIcon icon={faPhoneAlt} /> 0967 548 615
            </NavLink>
          </span>
          <span className="contact-info">
            <NavLink to="/#" className="nav-link">
              <FontAwesomeIcon icon={faStore} /> Địa chỉ
            </NavLink>
          </span>
          {/* Nút thanh tác vụ */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasSidebar"
            aria-controls="offcanvasSidebar"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* Thanh tác vụ cho điện thoại */}
      <div
        className="offcanvas offcanvas-start"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {/* Logo và tìm kiếm trong sidebar */}
          <NavLink to="/home" className="navbar-brand">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
              alt="Logo"
              className="img-fluid"
            />
          </NavLink>
          <div className="search-box input-group mb-3 col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm..."
            />
            <button className="btn d-inline">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          {/* Các liên kết điều hướng */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">
                Trang Chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/birthday" className="nav-link">
                Bánh Sinh Nhật
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/other" className="nav-link">
                Bánh khác
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/#" className="nav-link">
                Tin Tức
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/#" className="nav-link">
                Khuyến Mãi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Đăng nhập
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
