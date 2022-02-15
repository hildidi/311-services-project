import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const LoginForm = ({setUser }) => {
  const [error, setError] = useState ({
    usernameError: "",
    passwordError: ""
  })

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let usernameError = "";
    let passwordError = "";
  
    if (!error.usernameError) {
      usernameError = "Name cannot be blank.";
    }

    if (error.passwordError <4 ){
      passwordError = "Password must be longer than 4 characters.";
    }

    if (usernameError || passwordError){
      setError({usernameError, passwordError});
      return false; 
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {}

    const userCreds = { ...formData }; console.log('userCreds', userCreds)

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        
        // let loginSuccessful = false 
        //   if (loginSuccessful) { 
        setUser( user); console.log('setuser',setUser)
        setFormData({
          username: "",
          password: "",
        })
        navigate("/");
        
        setError({
          usernameError: "",
          passwordError: ""
        })
      // }
      //  else {
      //   {console.log('unsuccessfulLogin')}
      // }
    });

  }

  return (
    
    <div class="intro card container" role="form"><br></br>
      <h2>Login with your existing account.</h2>
      <form onSubmit={handleSubmit}>
        <label style={{fontWeight: 'bold'}} htmlFor="username">Username</label>
        <br/>
        <input
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
          <div class="error ItemLevel show" 
            role="alert" 
            style={{fontSize: 12, color: "red"}}>{error.usernameError}</div>

        
        <label style={{fontWeight: 'bold'}} htmlFor="password" >Password</label>
        <br/>
        <input
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
          <div 
            role="alert" 
            style={{fontSize: 12, color: "red" }}>{error.passwordError}</div>

        <br/>
        <button class="btn btn-secondary" type="submit">Login</button>
      </form>

      <hr class="solid"/>

      <div>
        <Link to="/signup" replace>
          Sign up now
        </Link>
      </div>
      <br/>
    
    </div>
  );
};

export default LoginForm;
