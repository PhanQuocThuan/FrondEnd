import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="card-footer bg-dark text-white text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Liên hệ</h5>
            <p>Email:GroupTDK.caodangsaigon.edu.vn</p>
            <p>Điện thoại: 0909 090 909</p>
          </div>
          <div className="col-md-4">
            <h5>Thông tin</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/#">Về chúng tôi</Link>
              </li>
              <li>
                <Link to="/#">Chính sách bảo mật</Link>
              </li>
              <li>
                <Link to="/#">Điều khoản dịch vụ</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Theo dõi chúng tôi</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/#" className="text-white">
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="/#" className="text-white">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <p>&copy; {new Date().getFullYear()} Group 8</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
