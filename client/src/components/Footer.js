import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faMastodon, faYoutube, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';
import clubsAndSocietiesLogo from '../assets/images/msa_cs.png';
import acncLogo from '../assets/images/acnc.png';

const Footer = () => (
  <footer className="footer bg-neutral-900 py-8 text-center text-neutral-300">
    <div className="container mx-auto">
      <div className="flex justify-center mb-4">
        <a href="https://go.monsec.io/discord" className="mx-2"><FontAwesomeIcon icon={faDiscord} className="text-2xl hover:text-white" /></a>
        <a href="https://go.monsec.io/facebook" className="mx-2"><FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-white" /></a>
        <a href="https://go.monsec.io/instagram" className="mx-2"><FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-white" /></a>
        <a href="https://go.monsec.io/twitter" className="mx-2"><FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-white" /></a>
        <a href="https://go.monsec.io/mastodon" className="mx-2"><FontAwesomeIcon icon={faMastodon} className="text-2xl hover:text-white" /></a>
        <a href="https://go.monsec.io/youtube" className="mx-2"><FontAwesomeIcon icon={faYoutube} className="text-2xl hover:text-white" /></a>
        <a href="https://go.monsec.io/linkedin" className="mx-2"><FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-white" /></a>
        <a href="https://go.monsec.io/github" className="mx-2"><FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-white" /></a>
        <a href="mailto:team@monsec.io" className="mx-2"><FontAwesomeIcon icon={faEnvelope} className="text-2xl hover:text-white" /></a>
        <a href="#" className="mx-2"><FontAwesomeIcon icon={faRss} className="text-2xl hover:text-white" /></a>
      </div>
      <div className="flex justify-center items-center mb-4">
        <img src={clubsAndSocietiesLogo} alt="Clubs & Societies" className="h-12 mx-4" />
        <img src={acncLogo} alt="Registered Charity" className="h-12 mx-4" />
      </div>
      <div className="text-neutral-400">
        <p>© 2024 MonSec</p>
        <p>ABN 61 940 766 256</p>
        <p>Powered by Hugo & Congo</p>
      </div>
    </div>
  </footer>
);

export default Footer;
