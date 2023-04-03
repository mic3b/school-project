import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>Mikołaj Bubacz</h3>
          </div>

          <div className="footer-grid-item">
            <h3>https://github.com/mic3b</h3>
          </div>

          <div className="footer-grid-item">
            <h3>mikolaj.bubacz@gmail.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
