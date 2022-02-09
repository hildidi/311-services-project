import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const LoginForm = ({setUser}) => { 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setUser(user)
        setFormData({
          username: "",
          password: "",
        });
      navigate("/")
      });
  }

  return (
    
    <div class="container"><br></br>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <br/>
        <input
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <br/>
        <input
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button class="btn btn-secondary" type="submit">Login</button>
      </form>

      <Link to="/signup" replace>
        Sign up
      </Link>
    </div>
  );
};

export default LoginForm;
