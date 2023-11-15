import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-area">
        <div className="logo">Hig Games</div>
        {/* <div className="sub-text">Best Games For You</div> */}
      </div>
      <div className="contact-area">
        <div className="contact-title">Contact</div>
        <div className="contact">info@higgames.com</div>
      </div>
    </footer>
  );
};

export default Footer;
