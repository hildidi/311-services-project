import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const LoginForm = ({setUser }) => { 


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const validate = () => {
  //   let usernameError = "";
  //   let passwordError = "";
  
  //   if (!error.usernameError) {
  //     usernameError = "Name cannot be blank.";
  //   }

  //   if (error.passwordError <4 ){
  //     passwordError = "Password must be longer than 4 characters.";
  //   }

  //   if (usernameError || passwordError){
  //     setError({usernameError, passwordError});
  //     return false; 
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    // const isValid = validate();
    // if (isValid) {}
    const userCreds = { ...formData }; console.log('userCreds', userCreds)


    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json()) 
      .then((user) => {
        console.log("user", user);
        
        // let loginSuccessful = false 
        //   if (loginSuccessful) { 
        setUser( user); console.log('setuser',setUser)
        setFormData({
          username: "",
          password: "",
        })
        navigate("/");
        // setError({
        //   usernameError: "",
        //   passwordError: ""
        // })
      // }
      //  else {
      //   {console.log('unsuccessfulLogin')}
      // }
    });

  }

  return (
    
    <section class="container" role="form"><br></br>
      <h2 class="text-white">Sign in with your existing account.</h2>
      <form onSubmit={handleSubmit}>
        <label class="text-white" style={{fontWeight: 'bold'}} htmlFor="username">Username:</label>
        <br/>
        <input
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <br/>
        <label class="text-white" style={{fontWeight: 'bold'}} htmlFor="password" >Password:</label>
        <br/>
        <input
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <br/>
        <br/>
        <button class="btn btn-secondary bg-dark text-white" type="submit">Sign In</button>
      </form>

      <hr class="solid text-white"/>

      <div>
        <Link to="/signup" replace class="text-white"> 
          Sign up now
        </Link>
      </div>
      <br/>
    
    </section>
  );
};

export default LoginForm;
