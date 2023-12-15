import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../components/logo.jpg";



export const Navbar = () => {
  return (
    <div className="navbar">
    <div>
      <img src={logo} alt="dd"className="navlogo" >
      </img>
    </div>
      <div className="links">
        <Link to="/Home"> Home </Link>
        <Link to="/shop"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/Registration"> Registration </Link>
        <Link to="/cart">        
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};