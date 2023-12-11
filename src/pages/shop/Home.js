
import React from 'react';
import image from "../shop/image.jpg";
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <img src={image} className="home-image" alt="Home" />
      <div className="home-description">
        <h1>Welcome to our store</h1>
        <p>
        Discover a world of possibilities at Dimehlistore, 
        your go-to online destination for all things trendy and essential.
         Immerse yourself in a shopping experience that transcends boundaries,
          offering a diverse collection that caters to every aspect of your lifestyle.
        </p>
        <Link to="/shop">
          <button className="shop-button">Go to Shop</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;





