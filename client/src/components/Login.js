import Navbar from "./NavBar";

function Login ({ user, setUser}) { 
  return (
    <div>
      <h1>Welcome, {user.username}</h1>    
      {/* <Navbar setUser={setUser}/> */}
    </div>
  );
};

export default Login; 
