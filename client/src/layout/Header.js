import React from "react";

function Header () {
    return (
      
      <div class="header-top-nyc">
        <div class="container">
          <div class="header-inner">
            <div class="header-buttons header-buttons-mobile">
              <div>
                <button aria-label="Show Main Menu" aria-expanded="false" aria-controls="nav" class="header-collapsed" id="nav-open-btn" type="button"><span class="fas fa-bars fa-lg" id="nav-open-ham"></span><span class="menu-text">Menu</span></button>
              </div>
            </div>
            <span class="three-one-one-logo-wrapper"><img class="logo-three-one-one visible-desktop" alt="NYC 311" src="https://www1.nyc.gov/assets/home/images/global/ico-311-51x51.png"/></span>
            <div class="slogan">The Official Website of the City of New York
            </div>
            <div class="logo">
              <div class="nyc-logo"> <a href="https://www1.nyc.gov" class="logo" aria-label="NYC.gov home"><img src="https://www1.nyc.gov/assets/home/images/global/nyc_black.png" class="hidden" alt="NYC.gov Home"/></a> </div>
            </div>
            <div class="header-buttons right">
              <div class="translate1">
                <button aria-label="Toggle Language Translation" aria-expanded="false" aria-controls="global-language-selection" class="header-collapsed" id="global-language" type="button"><span class="fas fa-language fa-2x"></span></button>
              </div>
              <div class="search2">
                <button aria-label="Show Search" aria-expanded="false" aria-controls="header-search-collapse" class="header-collapsed" id="search-collapse-button" type="button"><span class="fas fa-search fa-lg"></span></button>
              </div>
              <div class="text-size"> <a role="button" href="https://www1.nyc.gov/home/text-size.page"><span class="sr-only">Text Size</span><span aria-label="Learn how to change your Browser Text Size" class="fas fa-font"></span><span class="fas fa-font"></span></a> </div>
            </div>
          </div>
        </div>
      </div>

      
    )
  };
  
  export default Header;