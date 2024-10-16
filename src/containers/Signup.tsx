import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./css/Login.css";

const Signup: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    setLoading(true);
    setError(null);

    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
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
        <form className="login" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="inputBx position-relative">
            <input type="email" placeholder="Email" ref={emailRef} required />
          </div>
          <div className="inputBx position-relative">
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="inputBx position-relative">
            <input
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              required
            />
          </div>
          <div className="inputBx position-relative">
            <input
              type="submit"
              value={loading ? "Signing Up..." : "Sign Up"}
              disabled={loading}
            />
          </div>
          <div className="links">
            <a href="/login">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
