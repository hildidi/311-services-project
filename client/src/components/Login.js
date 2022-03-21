import { useEffect } from "react";

function Login ({ user}) { 
  useEffect(()=>{
    
  }, [])
  
  return ( 
    <div class="categories-grid-container">
    <div class="container bg-transparent">
       <div id="categories-grid">
          <div class="container">
              <div class="container text-white"><br/>
                <h2 class="">Welcome, {user.username}!</h2>  
              </div>
              </div>
  </div>
</div>
</div>  
  
  );
};

export default Login; 
