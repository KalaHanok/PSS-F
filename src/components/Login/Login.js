import "./Login.css";
import { useState } from "react";
const Login = () => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", data);
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <label htmlFor="id">Enter Your Id</label>
        <input type="text" name="id" onChange={handleChange} autoFocus />
        <label htmlFor="id">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
