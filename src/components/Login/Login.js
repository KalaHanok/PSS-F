import axios from "axios";
import "./Login.css";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode"; // npm install jwt-decode
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({});
  const [err, setErr] = useState("none");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted", data);
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", data);
      console.log(res);
      localStorage.setItem("token", res.data.access);
      localStorage.setItem("refresh", res.data.refresh);

      setTimeout(refreshAccessToken, 55 * 60 * 1000);
      navigate("/");
      setErr("none");
    } catch (err) {
      setErr("block");
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refresh");
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/refresh/", {
        refresh: refreshToken,
      });

      localStorage.setItem("token", res.data.access);

      setTimeout(refreshAccessToken, 55 * 60 * 1000);
    } catch (err) {
      console.error("Token refresh failed:", err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        refreshAccessToken();
      } else {
        setTimeout(
          refreshAccessToken,
          decodedToken.exp * 1000 - Date.now() - 300000
        );
      }
    }
  }, []);

  return (
    <div className="login wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <label htmlFor="id">Enter Your Id</label>
        <input type="text" name="username" onChange={handleChange} autoFocus />
        <label htmlFor="id">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button>Login</button>
        <p
          style={{
            display: err === "block" ? "block" : "none",
            textAlign: "center",
          }}
        >
          Invalid Credentials
        </p>
      </form>
    </div>
  );
};

export default Login;
