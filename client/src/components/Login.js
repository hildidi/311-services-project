import Navbar from "./NavBar";

function Login ({ user, setUser}) { 
  return (
    <div class="container">
      <h2>Welcome, {user.username}!</h2>    
      <p></p>
      {/* <Navbar setUser={setUser}/> */}
      
    </div>
  );
};

export default Login; 
