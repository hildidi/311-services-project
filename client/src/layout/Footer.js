import React from 'react';

const Footer = () => {
  return (
    <div class="wrapper" id="nyc311Footer">
    <div class="container">
       <div class="row">
         <div id="custom_html-15" class="widget_text widelinks-widget widget_custom_html widget-count-4 col-md-4 nyc311FooterText">
           <div class="textwidget custom-html-widget">
             <div class="wrap-social">
               <a href="https://twitter.com/NYC311" aria-label="NYC311 twitter" rel="noopener noreferrer" target="_blank"><i class="fa fa-lg fa-twitter pr-2" aria-hidden="true"></i></a>
               <a href="https://www.facebook.com/NYC311/" aria-label="NYC311 facebook" rel="noopener noreferrer" target="_blank"><i class="fa fa-lg fa-facebook p-2" aria-hidden="true"></i></a>
               <a href="https://www.instagram.com/nyc311/#" aria-label="NYC311 instagram" rel="noopener noreferrer" target="_blank"><i class="fa fa-lg fa-instagram p-2" aria-hidden="true"></i></a>
               <a href="https://www.youtube.com/user/NYC311" aria-label="NYC311 YouTube" rel="noopener noreferrer" target="_blank"><i class="fa fa-lg fa-youtube p-2" aria-hidden="true"></i></a>
             </div>
             <strong>Follow NYC311</strong>
           </div>
         </div>
         {/* <!-- .widelinks-widget --> */}
         <div id="mobileAppLinks" class="widget_text widelinks-widget widget_custom_html widget-count-4 col-md-4 col-md-offset-4">
           <div class="textwidget custom-html-widget">
             <div class="wrap-mobile">
               <a href="https://itunes.apple.com/us/app/nyc-311/id324897619?mt=8" aria-label="Download mobile app for iPhone or iPad" rel="noopener noreferrer" target="_blank"><i class="fa fa-apple pr-2" aria-hidden="true"></i></a>
               <a href="https://play.google.com/store/apps/details?id=gov.nyc.doitt.ThreeOneOne" aria-label="Download mobile app for Android" rel="noopener noreferrer" target="_blank"><i class="fa fa-android p-2" aria-hidden="true"></i></a>
               <br></br>
               <strong>Download the NYC311 Mobile App</strong>
             </div>
           </div>
         </div>
         {/* <!-- .widelinks-widget --> */}
       </div>
       <br></br>
       <div class="row">
         <div id="custom_html-15" class="widget_text widelinks-widget widget_custom_html widget-count-4 col-md-4 nyc311FooterText nyc311FooterLinks">
             <a href="/about-nyc-311/">About NYC311</a>
             <a href="/article/?id=df3a321d-f543-ec11-8c62-000d3a4f1a7a">Send Feedback</a>
             <a href="https://www1.nyc.gov/assets/doitt/downloads/pdf/311-privacy-policy.pdf" target="_blank">Privacy Policy</a>
         </div>
         {/* <!-- .widelinks-widget --> */}
         <div id="nyc311logo" class="widget_text widelinks-widget widget_custom_html widget-count-4 col-md-4 col-md-offset-4">
           <img src="/nyc311-logo.png" alt="NYC 311 Logo" style="width:3.3rem;" class="mb-2"/>
         </div>
         {/* <!-- .widelinks-widget --> */}
       </div>
     </div>
   </div>
  )
};

export default Footer;
