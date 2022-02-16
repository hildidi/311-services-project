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
    <nav class="navbar navbar-expand-lg bg-light static-top" role="navigation">
      <div class="container">        
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <img src="https://www1.nyc.gov/assets/home/images/global/ico-311-51x51.png" alt="311 logo of a yellow box with a black outline and the words N Y C 311 written in the center."/> &nbsp;
                {/* <div class="slogan">The Official Website of the City of New York</div> */}
                {/* <div class="slogan">The Official Website of the City of New York </div>  */}
                <Link class="navbar-brand text-dark " to="/" style={{fontWeight: "bold"}}>Home </Link> 
              </li>               
            </ul>
            
            <div class="form-inline my-2 my-lg-0">  
                {user ? (
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link class="nav-link text-dark" onSubmit={(e)=>e.preventDefault()} to="/complaints/new" style={{fontWeight: "bold"}}>New Complaint</Link>
                        <Link class="nav-link text-dark" to="/complaints/" style={{fontWeight: "bold"}}>My Complaints Report</Link>
                        < button class="btn btn-outline-secondary my-2 my-sm-0 text-dark" onClick={handleLogOut} style={{fontWeight: "bold"}}>Logout</button>
                    </ul>
                  
                  ) : (
                    <>
                      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link class="btn btn-outline bg-dark my-2 my-sm-0 text-white" to="/login">Sign In</Link> &nbsp;
                        <Link class="btn btn-outline bg-dark my-2 my-sm-0 text-white" to="/signup">Sign Up</Link>
                      </ul>
                    </>
                  )}
            </div>
        </div>
    </nav>
  
  )
}

export default NavBar;
