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
                <Link class="navbar-brand text-dark " to="/" style={{fontWeight: "bold"}}>Home </Link> 
              </li>               
            </ul>

            <div class="logo">
              <div class="nyc-logo"> <a class="logo"><img src="https://www1.nyc.gov/assets/home/images/global/nyc_black.png" class="hidden" alt="N Y C logo with black and bold font."/></a> </div>
            </div>
            
            <div class="form-inline my-2 my-lg-0">  
                {user ? (
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link class="nav-link text-dark" onSubmit={(e)=>e.preventDefault()} to="/complaints/new" style={{fontWeight: "bold"}}>New Complaint</Link>
                        <Link class="nav-link text-dark" to="/complaints/" style={{fontWeight: "bold"}}>My Complaints Report</Link>
                        < button class="btn btn-outline-secondary my-2 my-sm-0 text-dark" onClick={handleLogOut} style={{fontWeight: "bold"}} aria-aria-label="log out button" >Logout</button>
                    </ul>
                  
                  ) : (
                    <>
                      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link class="btn btn-outline bg-dark my-2 my-sm-0 text-white" aria-aria-label="log in button" to="/login">Sign In</Link> &nbsp;
                        <Link class="btn btn-outline bg-dark my-2 my-sm-0 text-white" aria-aria-label="sign up button" to="/signup">Sign Up</Link>
                      </ul>
                    </>
                  )}
            </div>
        </div>
    </nav>
  
  )
}

export default NavBar;
