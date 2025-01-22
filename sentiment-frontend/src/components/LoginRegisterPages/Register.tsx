import React, { useState } from "react";
import usericon from "../../assets/icons/user.svg";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // Email validation
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    // User name validation
    if (!userName) {
      newErrors.userName = "Full name is required.";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    // Confirm password validation
    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const createUser = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    if (!validate()) return; // Stop if validation fails

    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        email,
        userName,
        password,
      });
      console.log("User registered:", response.data);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="page vh-90">
      <div className="container">
        <h2 className="mt-5 text-center">
          <img src={usericon} alt="" className="title-icon" />
          Register
        </h2>
        <form className="mt-5 mx-auto" style={{ maxWidth: "400px" }} onSubmit={createUser}>
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your full name"
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && <p className="text-danger">{errors.userName}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="button w-100">
            Register
          </button>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
