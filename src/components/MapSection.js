import React from 'react';
import "./MapSection.css";
const MapSection = () => {
  return (
    <section id="maps">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h1 className="hh1">Our Location</h1>
          </div>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.0437528049483!2d-9.540570325352633!3d30.4065005013276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c82cf2782a95%3A0xfba1cf79ed626cb8!2sAswak%20Assalam%20Market!5e0!3m2!1sen!2sma!4v1702631699787!5m2!1sen!2sma" 
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps">
        
      </iframe>
        
      
      <div className="copy">
        © 2023 Copyright: Dalal_Imehli;
      </div>
    </section>
  );

  
};


export default MapSection;
