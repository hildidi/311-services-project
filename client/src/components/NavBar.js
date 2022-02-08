import React from "react";
import { NavLink, Link} from "react-router-dom";

function NavBar ({user, setUser}) {
  function handleLogOut () {
    fetch ("/logout", {
      method: "DELETE"})
    .then((r)=>{
      if (r.ok) {
        setUser(null)
      }
    })
  }

  return (
  <nav class="navbar navbar-expand-lg navbar-light bg-dark p-4">
    <a class="navbar-brand text-white h1" href="/"><h1>Welcome to 311</h1></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link text-white" href="/">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/complaints/new">New Complaint</a>
          </li>
          
          <li class="nav-item">
          <a class="nav-link text-white" href="/complaints/">My Complaints Report</a>
          </li>
          
        </ul>
        
      <div class="form-inline my-2 my-lg-0">
        <ul>
        {user ? (
          < button class="btn btn-outline-secondary my-2 my-sm-0 text-white" type="submit" onClick={handleLogOut}>Logout</button>
          ) : (
            <>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <a class="btn btn-outline-secondary my-2 my-sm-0 text-white" href="/">Login</a> &nbsp;
                <a class="btn btn-outline-secondary my-2 my-sm-0 text-white" href="/signup">Signup</a>
              </ul>
            </>
          )}
        </ul>
      </div>
            
        
    </div>
  </nav>
  
  )
}

export default NavBar;
