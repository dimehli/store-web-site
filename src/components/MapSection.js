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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.672059231192!2d-10.066341690393891!3d28.99161405683175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb503faea046a89%3A0x9d74a4573d65ef9c!2sCaf%C3%A9%20%26%20bistro%20lacascade!5e0!3m2!1sfr!2sma!4v1669388902709!5m2!1sfr!2sma"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
      <div className="copy">
        © 2023 Copyright: Dalal_Imehli;
      </div>
    </section>
  );

  
};


export default MapSection;
