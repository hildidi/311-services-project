import React from 'react';
import { useEffect } from "react";

function Banner ({ user}) { 
    useEffect(()=>{
      
    }, [])

  return (
    

    <div class="row first-visit-alert-row">
      <div class="container">
        <div class="module module-first-visit-alert"> 
          <h2 class="sr-only">Unlock the key to NYC. Get the latest on the COVID-19 Vaccine. Agency service suspensions/reductions.</h2>
          <span class="alert-icon"></span><a href="https://www.nyc.gov/keytonyc">Unlock the key to NYC</a><br/>
          <span class="alert-icon"></span><a href="https://www.nyc.gov/vaccinecommandcenter">Get the latest on the COVID-19 Vaccine</a><br/>
          <span class="alert-icon"></span><a href="https://www1.nyc.gov/nyc-resources/city-agency-service-updates.page">Agency service suspensions/reductions</a>
        </div>
      </div>
    </div>
  )
};

export default Banner;
