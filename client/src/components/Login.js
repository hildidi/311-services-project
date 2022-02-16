import { useEffect } from "react";

function Login ({ user}) { 
  useEffect(()=>{
    
  }, [])
  
  return ( 
    <div class="categories-grid-container">
    <div class="container bg-transparent">

       <div id="categories-grid">
          <div class="container">
    {/* <!--<h2>Categories</h2>--> */}
          <div class="row">
              <div class="container text-white"><br/>
                <h2 class="text-white ">Welcome, {user.username}!</h2>  
                <p style={{fontSize: "14pt" }}>NYC 311 provides the public with quick, easy access to all New York City government services and information while offering the best customer service.</p> 
                <p style={{fontSize: "14pt" }}>To report non-emergency, city-related issues handled by NYC city public agencies, please submit a complaint via our New Complaint form. </p> 
              </div>

                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-121">
                    <div class="card" >
                      <img class="card-img-top" src="https://portal.311.nyc.gov/benefits.jpg " alt="Benefits &amp; Support"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Benefits &amp; Support </h3>
                            <p class="card-text">  Affordable housing, homelessness, SNAP (food stamps) cash assistance, child care, volunteering, donating. </p>
                      </div>
                    </div>
                  </a>
                </div>
                
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-2">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/businessesconsumers.jpg " alt="Businesses &amp; Consumers"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Businesses &amp; Consumers </h3>
                        
                        <p class="card-text">  Starting and running a business, licenses, permits, government contracts, consumer protection. </p>
                      </div>
                    </div>
                  </a>
                </div>
               
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-3">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/courtslaw.jpg " alt="Courts &amp; Law"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Courts &amp; Law </h3>
                        
                        <p class="card-text">  Jails, inmates, tickets, legal cases and assistance, jury duty, marriage, domestic partnership. </p>
                      </div>
                    </div>
                  </a>
                </div>
                
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-4">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/culture.jpg " alt="Culture &amp; Recreation"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Culture &amp; Recreation </h3>
                        
                        <p class="card-text">  Parks, park maintenance, places to go and things to do for visitors and locals. </p>
                      </div>
                    </div>
                  </a>
                </div>
              
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-5">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/education.jpg " alt="Education"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Education </h3>
                        
                        <p class="card-text">  Schools and learning opportunities for all ages. </p>
                      </div>
                    </div>
                  </a>
                </div>
                
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-6">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/employment1.jpg " alt="Employment"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Employment </h3>
                        
                        <p class="card-text">  Jobs, training, worker protection and support. </p>
                      </div>
                    </div>
                  </a>
                </div>
               
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-7">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/environment1.jpg " alt="Environment"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Environment </h3>
                        
                        <p class="card-text">  Water and air quality, odors, environmental protection. </p>
                      </div>
                    </div>
                  </a>
                </div>
               
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-8">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/garbagerecycling.jpg " alt="Garbage &amp; Recycling"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Garbage &amp; Recycling </h3>
                        
                        <p class="card-text">  Disposal, collection, street cleaning, sanitation violations, illegal dumping. </p>
                      </div>
                    </div>
                  </a>
                </div>
               
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-9">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/governmentelections.jpg " alt="Government &amp; Elections"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Government &amp; Elections </h3>
                        
                        <p class="card-text">  Service Request status, Agency feedback and performance, elected officials, data, voter information. </p>
                      </div>
                    </div>
                  </a>
                </div>
             
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-10">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/health.jpg " alt="Health"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Health </h3>
                        
                        <p class="card-text">  Insurance, care, healthy living, violations. </p>
                      </div>
                    </div>
                  </a>
                </div>
                
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-11">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/housingbuildings.jpg " alt="Housing &amp; Buildings"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Housing &amp; Buildings </h3>
                        
                        <p class="card-text">  Housing options, building and property maintenance, construction. </p>
                      </div>
                    </div>
                  </a>
                </div>
               
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-12">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/noise.jpg " alt="Noise"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Noise </h3>
                        
                        <p class="card-text">  Rules and reports of noisy neighbors, vehicles, dogs, and more. </p>
                      </div>
                    </div>
                  </a>
                </div>
               
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-13">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/petspestswildlife.JPG " alt="Pets, Pests &amp; Wildlife"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Pets, Pests &amp; Wildlife </h3>
                        
                        <p class="card-text">  Licenses, lost and found, rats, mice, bed bugs. </p>
                      </div>
                    </div>
                  </a>
                </div>
              
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-14">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/publicsafety.jpg " alt="Public Safety"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Public Safety </h3>
                        
                        <p class="card-text">  Police precincts, firehouses, police auctions, fingerprinting, illegal activity, emergency preparedness and recovery. </p>
                      </div>
                    </div>
                  </a>
                </div>
                
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-15">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/records1.jpg " alt="Records"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Records </h3>
                        
                        <p class="card-text">  ID, birth, death, marriage, property, health, school, fire and police reports, City documents. </p>
                      </div>
                    </div>
                  </a>
                </div>
               
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-16">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/sidewalks_streets_highways.jpg " alt="Sidewalks, Streets &amp; Highways"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Sidewalks, Streets &amp; Highways </h3>
                        
                        <p class="card-text">  Maintenance, violations, closures, bridges, tunnels. </p>
                      </div>
                    </div>
                  </a>
                </div>
               
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-17">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/taxes.jpg " alt="Taxes"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Taxes </h3>
                        
                        <p class="card-text">  Preparation, exemptions. </p>
                      </div>
                    </div>
                  </a>
                </div>
             
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/kacategory/?id=311-18">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/transport.jpg " alt="Transportation"/>
                      <div class="card-body">
                        
                          <h3 class="card-title">  Transportation </h3>
                        
                        <p class="card-text">  Tickets, tows, driving, parking, public transportation, taxis, airports, bikes, accessibility. </p>
                      </div>
                    </div>
                  </a>
                </div>
              
              {/* <!-- A-Z Category --> */}
              
                <div class="col-md-3 col-xs-12 col-sm-12 mb-3">
                  <a href="https://portal.311.nyc.gov/all-articles/">
                    <div class="card">
                      <img class="card-img-top" src="https://portal.311.nyc.gov/atoz.jpg" alt="A to Z"/>
                      <div class="card-body">                    
                        <h3 class="card-title">A to Z</h3>                    
                        <p class="card-text">Everything in alphabetical order.</p>
                      </div>
                    </div>
                  </a>
                </div>
          
      </div>
      {/* <!--
      <div id="more-categories" class="row pull-right">
        <a href="http://www1.nyc.gov/nyc-resources/categories.page" title="Browse more topics and categories">
          <div class="text-center sideLink">
            <p>Browse Topics</p>
          </div>
        </a>
      </div>
      --> */}
  </div>
</div>
</div>  
</div>
  
  );
};

export default Login; 
