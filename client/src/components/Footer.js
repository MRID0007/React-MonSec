import React from 'react';

const Footer = () => (
  <footer className="footer py-8 bg-gray-800 text-white text-center">
    <div className="social-icons flex justify-center space-x-4 mb-4">
      <a href="#"><i className="fab fa-discord text-xl"></i></a>
      <a href="#"><i className="fab fa-facebook text-xl"></i></a>
      <a href="#"><i className="fab fa-instagram text-xl"></i></a>
      <a href="#"><i className="fab fa-mastodon text-xl"></i></a>
      <a href="#"><i className="fab fa-youtube text-xl"></i></a>
      <a href="#"><i className="fab fa-linkedin text-xl"></i></a>
      <a href="#"><i className="fab fa-github text-xl"></i></a>
      <a href="#"><i className="fas fa-envelope text-xl"></i></a>
      <a href="#"><i className="fas fa-rss text-xl"></i></a>
    </div>
    <div className="footer-logos flex justify-center space-x-4 mb-4">
      <img src="assets/images/msa_cs.png" alt="Clubs & Societies" className="h-10" />
      <img src="assets/images/acnc.png" alt="Registered Charity" className="h-10" />
    </div>
    <div className="footer-info">
      <p>© 2024 MonSec</p>
      <p>ABN 61 940 766 256</p>
      <p>Powered by Native HTML5</p>
    </div>
  </footer>
);

export default Footer;
