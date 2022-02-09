import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router";

function SignupForm ({setUser}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate=useNavigate();
  
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
        setUser(user);
        setFormData({
          username: "",
          email: "",
          password: ""
        });
      navigate("/")
      });
  }

  return (
    <>
    <div class="container "><br></br>
      <form onSubmit={handleSubmit} className="complaint-block">
        <h2>Signup</h2>
        <label htmlFor="username">Username: </label>
        <br/>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        
        <br />
        <label htmlFor="email">Email: </label>
        <br/>
        <input
          id="email-signup-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="password">Password: </label>
        <br/>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        
        <br />
        <br />
        <button class="btn btn-secondary" type="submit">Submit</button>     
        <br/>    
        <Link to="/login" replace>
          Log in
        </Link>
      </form>
      </div>
    </>
  );
};

export default SignupForm;
