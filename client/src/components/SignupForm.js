import React, { useState } from "react";
import {Link} from 'react-router-dom'

function SignupForm ({setUser}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  function handleChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const userCredentials = { ...formData };

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setFormData({
          username: "",
          email: "",
          password: ""
        });
      });
  }

  return (
    <>
    <div class="container">
      <form onSubmit={handleSubmit} className="complaint-block">
        <h2>Signup Here!</h2>
        <label htmlFor="username">Username: </label>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email-signup-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br/>
        <br/>
        <Link to="/login" replace>
          Have an account already? Log in!
        </Link>
      </form>
      </div>
    </>
  );
};

export default SignupForm;
