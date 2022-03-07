import React from 'react';

import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container" >
        <h4>&copy; {new Date().getFullYear()} Card Graphix | <Link to="/contact-us">Contact Us</Link></h4>
      </div>
    </footer>
  );
};

export default Footer;
