import React from "react";
import { auth } from "./firebase/firebase"; // Đảm bảo rằng bạn đã cấu hình firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false,
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as any);
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.setState({ loading: true, error: "" });

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Đăng nhập thành công!");
      // Chuyển hướng người dùng đến trang admin
      window.location.href = "/admin"; // Hoặc sử dụng router để chuyển hướng
    } catch (error) {
      this.setState({ error: (error as Error).message });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { email, password, error, loading } = this.state;

    return (
      <>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="ring">
            <i
              style={{
                borderColor: "#00ff0a",
                animation: "animate 5s linear infinite",
              }}
            ></i>
            <i
              style={{
                borderColor: "#ff0057",
                animation: "animate 6s linear infinite",
              }}
            ></i>
            <i
              style={{
                borderColor: "#fffd44",
                animation: "animate 5s linear infinite",
              }}
            ></i>
            <div className="login">
              <h2>Login</h2>
              {error && <div className="error">{error}</div>}
              <form onSubmit={this.handleSubmit}>
                <div className="inputBx position-relative">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="inputBx position-relative my-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="inputBx position-relative">
                  <input
                    type="submit"
                    value={loading ? "Đang đăng nhập..." : "Sign in"}
                    disabled={loading}
                  />
                </div>
              </form>
              <div className="links">
                <a href="/#">Forget Password</a>
                <a href="/#">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
