import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="col">
          <h1 className="footer-title">
            Task<span>Flow</span>
          </h1>
        </div>
        <div className="col">
          <h2>Support</h2>
          <a href="/">Contact Us</a>
          <a href="/">Chat</a>
          <a href="/">Help Center</a>
          <a href="/">FAQ</a>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Footer;
