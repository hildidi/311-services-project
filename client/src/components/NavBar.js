import { NavLink } from "react-router-dom";

function NavBar ({user, setUser}) {
  function handleLogOut () {
    fetch ("/logout", {
      method: "DELETE"})
    .then((r)=>{
      if (r.ok) {
        console.log('logged out')
        setUser(null)
      }
    })
  }

  return (
    <nav className="navbar">
      {/* <h2>User</h2> */}
      
      <a href="/login">Login</a> &nbsp;
      <a className="navbar0" href="/signup">Signup</a> &nbsp;
      <a href="/complaints/new">Create New Complaint</a> &nbsp;
      <a href="/complaints/">All Complaints</a> &nbsp;

      {user ? (
            <button onClick={handleLogOut}>Logout</button>
            ) : (
              <>
            {/* <nav>
              <NavLink to="signup">Signup</NavLink>
            </nav>
              <NavLink to="/login">Login</NavLink> */}
            </>
          )}
          
          
        
          
      
      {/* <ul class="flex"> */}
        {/* <div>
          <NavLink to="/complaints">Complaints</NavLink>
        </div>

        <div>
          <NavLink to="/categories">Categories</NavLink>
        </div>

        <div>
          {user? (
          <button onClick={handleLogOut}>Logout</button>
          ) : (
            <>
              <NavLink to="/signup">Signup</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
          </div> */}

      {/* </ul> */}
    </nav>
  )
}

export default NavBar;
