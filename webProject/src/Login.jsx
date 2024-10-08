import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const usenavigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let isValid = true;
    if (!formData.username) {
      toast.warning("Username is required");
      isValid = false;
    }
    if (!formData.email) {
      toast.warning("Email is required");
      isValid = false;
    }
    if (!formData.password) {
      toast.warning("Password is required");
      isValid = false;
    }
    return isValid;
  };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const regobj = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
      fetch("https://animimic.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regobj),
      }).then((res) => {
        if (!res.ok) {
          return res.json().then((errorData) => {
            throw new Error(errorData.message || 'invalid credentials');
          });
        }
        return res.json(); // If the response is okay, parse it
      })
      .then((data) => {
        console.log('Login successful:', data);
        toast.success('logged in successfully.');
        usenavigate('/home', { replace: true });
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
        console.error('Error:', err);
      });
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <FaUser className="icon" />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>

        <div className="form-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>

        <div className="form-group">
          <FaLock className="icon" />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="forgot-password">
        <a href="/forgot-password">Forgot Password?</a>
      </div>
      <div className="forgot-password">
        Don't have an account?
        <a href="/register">Register</a>
      </div>
    </div>
  );
}

export default Login;
