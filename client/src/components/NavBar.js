import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function NavBar ({user, setUser}) {

  const navigate=useNavigate();

  const handleLogOut = () => {
    fetch ("/logout", {
      method: "DELETE"
    })
    console.log('logged out')
    setUser(null)
    navigate("/login")
  }

  return (
    <nav class="navbar navbar-expand-lg bg-dark static-top" role="navigation">
      <div class="container">        
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <img src="https://www1.nyc.gov/assets/home/images/global/ico-311-51x51.png" alt="311 logo of a yellow box with a black outline and the words N Y C 311 written in the center."/> &nbsp;
                <Link class="navbar-brand text-white " to="/">Home </Link> 
              </li>               
            </ul>
            
            <div class="form-inline my-2 my-lg-0">  
                {user ? (
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link class="nav-link text-white" onSubmit={(e)=>e.preventDefault()} to="/complaints/new">New Complaint</Link>
                        <Link class="nav-link text-white" to="/complaints/">My Complaints Report</Link>
                        < button class="btn btn-outline-secondary my-2 my-sm-0 text-white" onClick={handleLogOut}>Logout</button>
                    </ul>
                  
                  ) : (
                    <>
                      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link class="btn btn-outline-secondary my-2 my-sm-0 text-white" to="/login">Login</Link> &nbsp;
                        <Link class="btn btn-outline-secondary my-2 my-sm-0 text-white" to="/signup">Signup</Link>
                      </ul>
                    </>
                  )}
            </div>
        </div>
    </nav>
  
  )
}

export default NavBar;
