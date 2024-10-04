import React from "react";
import "./Login.css";

class Login extends React.Component {
  render() {
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
              <div className="inputBx position-relative">
                <input type="text" placeholder="User Name" />
              </div>
              <div className="inputBx position-relative">
                <input type="password" placeholder="Password" />
              </div>
              <div className="inputBx position-relative">
                <input type="submit" value="Sign in" />
              </div>
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
