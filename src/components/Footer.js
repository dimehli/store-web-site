import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='foot'> 
      <a href="https://www.instagram.com/votre_compte_instagram" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a href="https://www.facebook.com/votre_compte_facebook" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="3x" className='ml'/>
      </a>
      <a href="https://twitter.com/votre_compte_twitter" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="3x" className='ml'/>
      </a>
    </div>
    
  );
};

export default Footer;

