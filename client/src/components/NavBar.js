import React from "react";

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

  <nav class="navbar navbar-expand-lg navbar-light bg-dark p-4" role="navigation">

    <img src="https://www1.nyc.gov/assets/home/images/global/ico-311-51x51.png" alt="311 logo of a yellow box with a black outline and the words N Y C 311 written in the center."/>
    {/* <a class="navbar-brand text-white h1" href="/"><h1>Welcome to 311</h1></a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="nav" aria-expanded="false" aria-label="Show Main Menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link text-white" href="/">Home </a>
          </li>               
        </ul>
        
      <div class="form-inline my-2 my-lg-0">
        <ul>
        {user ? (
          <div>
            
                <li class="nav-item">
                  <a class="nav-link text-white" type="submit" onSubmit={(e)=>e.preventDefault()} href="/complaints/new">New Complaint</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-white" href="/complaints/">My Complaints Report</a>
                </li>
            
                < button class="btn btn-outline-secondary my-2 my-sm-0 text-white" onClick={handleLogOut}>Logout</button>
          </div>
          ) : (
            <>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <a class="btn btn-outline-secondary my-2 my-sm-0 text-white" href="/login">Login</a> &nbsp;
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
