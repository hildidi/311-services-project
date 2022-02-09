import { useEffect } from "react";
import { Navigate } from "react-router";

function Login ({ user}) { 
  useEffect(()=>{
    <Navigate to="/login"/>
  }, [])
  
  return ( 
    <div class="container"><br></br>
    
          <h2>Welcome, {user.username}!</h2>  
          <p>We are here to provide the public with quick, easy access to all New York City government services and information while offering the best customer service.</p> 
          <p>To report non-emergency, city-related issues handled by NYC city agencies, please submit a complaint via our New Complaint form.</p> 
       
    </div>

  
  );
};

export default Login; 
