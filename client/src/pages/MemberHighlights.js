import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import eliasImage from '../assets/images/elias_labastida.jpg'; // Add the correct image paths
import emilyImage from '../assets/images/emily_trau.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faMastodon } from '@fortawesome/free-brands-svg-icons';

const MemberHighlights = () => {
  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="member-highlights">
          <h1 className="text-4xl font-bold mb-4">Member Highlights</h1>

          <div id="2023" className="my-8">
            <h2 className="text-2xl font-bold mb-4">2023</h2>
            <hr className="border-t-2 border-neutral-400 mb-4" />
            <h3 className="text-xl font-bold">
              <a href="https://medium.com/@TheCS_student/this-is-how-i-managed-to-change-my-teams-availability-schedule-with-a-simple-vulnerability-41fb094d806c" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                This is How I Managed To Change My Team's Availability Schedule With A Simple Vulnerability ↗
              </a>
            </h3>
            <p className="text-neutral-400 mb-2">2023-01-08</p>
            <div className="flex items-center mb-8">
              <img src={eliasImage} alt="Elias Labastida" className="w-24 h-24 rounded-full mr-4" />
              <div>
                <p className="font-bold">2023S1 VICE PRESIDENT</p>
                <p className="text-lg font-bold">Elias Labastida</p>
                <div className="flex space-x-4 mt-2">
                  <a href="https://linkedin.thecs-student.dev/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-primary-500" /></a>
                  <a href="https://github.com/eliaslabastida" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-primary-500" /></a>
                  <a href="https://twitter.thecs-student.dev/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-primary-500" /></a>
                  <a href="https://mastodon.thecs-student.dev/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMastodon} className="text-2xl hover:text-primary-500" /></a>
                </div>
              </div>
            </div>
          </div>
          
          <div id="2022" className="my-8">
            <h2 className="text-2xl font-bold mb-4">2022</h2>
            <hr className="border-t-2 border-neutral-400 mb-4" />
            <h3 className="text-xl font-bold">
              <a href="https://emily.id.au/tailscale" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                CVE-2022-41924: RCE in Tailscale, DNS Rebinding, & You ↗
              </a>
            </h3>
            <p className="text-neutral-400 mb-2">2022-11-22</p>
            <div className="flex items-center mb-8">
              <img src={emilyImage} alt="Emily Trau" className="w-24 h-24 rounded-full mr-4" />
              <div>
                <p className="font-bold">2021 VICE PRESIDENT</p>
                <p className="text-lg font-bold">
                  <a href="https://emily.id.au/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500">
                    Emily Trau
                  </a>
                </p>
                <div className="flex space-x-4 mt-2">
                  <a href="https://linkedin.com/in/emilytrau" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-primary-500" /></a>
                  <a href="https://github.com/emilytrau" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-primary-500" /></a>
                  <a href="https://twitter.com/emilyposting_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-primary-500" /></a>
                  <a href="https://hachyderm.io/@emilyposting" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMastodon} className="text-2xl hover:text-primary-500" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MemberHighlights;
