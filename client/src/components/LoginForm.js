import React, { useState } from "react";


const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

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
        setFormData({
          username: "",
          password: "",
        });
      });
  }

  return (
    
    <aside className="login-form">
      
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button id="btn-submit" type="submit">Login</button>
      </form>
      <br />
      <br />
    </aside>
  );
};

export default LoginForm;
