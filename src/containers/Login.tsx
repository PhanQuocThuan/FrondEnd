import "./css/Login.css";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type LoginProps = {};

const Login: React.FC<LoginProps> = (): ReactElement => {
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [message, setMessage] = useState<string | undefined>("");

  const navigate = useNavigate();

  useEffect(() => {
    userNameRef.current?.focus();
  }, []);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ngăn reload lại trang
    const username = userNameRef.current?.value;
    const password = passwordRef.current?.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, username || "", password || "")
      .then((userCredential) => {
        navigate("/home");
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

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
          <form className="login" onSubmit={formSubmitHandler}>
            <h2>Login</h2>
            <div className="inputBx position-relative">
              <input type="email" placeholder="User Name" ref={userNameRef} />
            </div>
            <div className="inputBx position-relative">
              <input type="password" placeholder="Password" ref={passwordRef} />
            </div>
            <div className="inputBx position-relative">
              <input type="submit" value="Sign in" />
            </div>
            <div className="links">
              <a href="/#">Forget Password</a>
              <a href="/signup">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
