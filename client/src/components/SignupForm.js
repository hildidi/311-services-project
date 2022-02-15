import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router";

function SignupForm ({setUser}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    // usernameError: "",
    // emailError: "",
    // passwordError: ""
  });

  const navigate=useNavigate();
  
  function handleChange (e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  // const validate =  () => {
  //   let usernameError = "";
  //   let emailError = "";
  //   let passwordError = "";

  //   if (!formData.username) {
  //     usernameError = "Name cannot be blank.";
  //   }

  //   if (!formData.email.includes('@')){
  //     emailError = "Please enter a valid email address."
  //   }

  //   if (formData.password < 4) {
  //     passwordError = "Password must be longer than 4 characters.";
  //   }

  //   if (usernameError || emailError || passwordError ) {
  //     setFormData({usernameError, emailError, passwordError });
  //     return false;
  //   }

  // }; 

  function handleSubmit(e) {
    e.preventDefault();
  
    //  const isValid = validate();
    //  if (isValid) {}
   

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
    <div class="intro card container"><br></br>
      <form onSubmit={handleSubmit} className="complaint-block">
        <h2>Sign up form</h2>
        <p>Fill out the text fields, and then select the Create button.</p>
        <label htmlFor="username" style={{fontWeight: 'bold'}}>Username: </label>
        <br/>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {/* <div style={{fontSize: 12, color: "red"}}>{formData.usernameError}</div> */}
        <br/>
        <label htmlFor="email" style={{fontWeight: 'bold'}}>Email: </label>
        <br/>
        <input
          id="email-signup-input"
          class="textInput invalid"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

         {/* <div style={{fontSize: 12, color: "red"}}>{formData.emailError}</div> */}
         <br/>
        <label htmlFor="password" style={{fontWeight: 'bold'}}>Password: </label>
        <br/>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {/* <div style={{fontSize: 12, color: "red"}}>{formData.passwordError}</div> */}
        
        <br />
        <br/>
        <button class="btn btn-secondary" type="submit">Create</button>    
         
        <hr class="solid"/>
      </form>

      <div>
        <Link to="/login" replace>
          Log in
        </Link>
        </div>
        <br/>
      </div>
      
    </>
  );
};

export default SignupForm;
