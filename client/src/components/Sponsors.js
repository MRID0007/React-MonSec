import React from 'react';
import e2cyberLogo from '../assets/images/sponsors/e2cyber.png';
import bugcrowdLogo from '../assets/images/sponsors/bugcrowd.png';
import paloAltoLogo from '../assets/images/sponsors/palo_alto_networks.png';
import isacaLogo from '../assets/images/sponsors/isaca.png';
import audaLogo from '../assets/images/sponsors/auda.png';
import promithicLogo from '../assets/images/sponsors/promithic.png';
import itoEnLogo from '../assets/images/sponsors/ito_en.png';
import redbullLogo from '../assets/images/sponsors/redbull.png';

const sponsors = [
  {
    category: "Graphene",
    logos: [
      { href: "https://www.e2cyber.com/", src: e2cyberLogo, alt: "E2Cyber Logo" },
      { href: "https://www.bugcrowd.com/", src: bugcrowdLogo, alt: "Bugcrowd Logo" },
      { href: "https://www.paloaltonetworks.com/", src: paloAltoLogo, alt: "Paloalto Logo" },
      { href: "https://engage.isaca.org/melbournechapter/home", src: isacaLogo, alt: "Isaca Logo" },
    ],
  },
  {
    category: "Platinum",
    logos: [
      { href: "https://www.auda.org.au/", src: audaLogo, alt: "auDA Logo" },
    ],
  },
  {
    category: "Gold",
    logos: [
      { href: "https://promithic.io/", src: promithicLogo, alt: "Promithic Logo" },
    ],
  },
  {
    category: "Catering",
    logos: [
      { href: "https://itoen.com.au/", src: itoEnLogo, alt: "ITO EN Logo" },
      { href: "https://www.redbull.com/au-en", src: redbullLogo, alt: "Red Bull Logo" },
    ],
  },
];

const Sponsors = () => (
  <section className="sponsors py-8">
    <h2 className="text-header font-bold text-white mb-8 text-center">2024 Sponsors</h2>
    {sponsors.map((sponsor) => (
      <div className="sponsor-category mb-6 text-center" key={sponsor.category}>
        <h3 className="text-xl font-semibold mb-4">{sponsor.category}</h3>
        <div className="sponsor-logos flex flex-col items-center space-y-4">
          {sponsor.logos.map((logo) => (
            <a href={logo.href} target="_blank" rel="noopener noreferrer" key={logo.src} className="w-3/4">
              <img src={logo.src} alt={logo.alt} className="w-full transition-transform duration-300 hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Sponsors;
