import React, { useState } from "react";
import usericon from "../../assets/icons/user.svg";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });

      // Assuming the backend returns a token
      const { token } = response.data;

      if (token) {
        // Save token in sessionStorage or localStorage
        sessionStorage.setItem("authToken", token);

        // Redirect to a protected page (e.g., dashboard)
        window.location.href = "/dashboard";
      } else {
        setError("Invalid login credentials.");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "An error occurred during login.");
    }
  };

  return (
    <div className="page vh-90">
      <div className="container">
        <h2 className="mt-5 text-center">
          <img src={usericon} alt="" className="title-icon" />
          Login
        </h2>
        <form className="mt-5 mx-auto" style={{ maxWidth: "400px" }} onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-danger text-center">{error}</p>}
          <button type="submit" className="button w-100">
            Login
          </button>
          <p className="mt-3 text-center">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
