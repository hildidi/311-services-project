import React from 'react';
import { useEffect } from "react";

function Banner ({ user}) { 
    useEffect(()=>{
      
    }, [])

  return (
    <div role="banner" class="main-header header-nyc bg-dark">
      <div class="block"> 
        {/* <!-- Header Top Start --> */}
        <div class="row first-visit-alert-row">
          <div class="container">
            <div class="module module-first-visit-alert"></div>
    <div class="container">
      <div class="module module-first visit-alert"/>
        <p>Welcome, {user.username}!</p>   
        <a href="https://www.nyc.gov/vaccinecommandcenter">Get the latest on the COVID-19 Vaccine</a> 
        <span class="alert-icon"></span><a href="https://www.nyc.gov/keytonyc">Unlock the key to NYC</a><br></br>
        <span class="alert-icon"></span><a href="https://www.nyc.gov/vaccinecommandcenter">Get the latest on the COVID-19 Vaccine</a><br></br>
        <span class="alert-icon"></span><a href="https://www1.nyc.gov/nyc-resources/city-agency-service-updates.page">Agency service suspensions/reductions</a>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
};

export default Banner;
