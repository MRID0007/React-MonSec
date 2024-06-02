import React from 'react';

const sponsors = [
  {
    category: "Graphene",
    logos: [
      { href: "https://www.e2cyber.com/", src: "assets/images/sponsors/e2cyber.png", alt: "E2Cyber Logo" },
      { href: "https://www.bugcrowd.com/", src: "assets/images/sponsors/bugcrowd.png", alt: "Bugcrowd Logo" },
      { href: "https://www.paloaltonetworks.com/", src: "assets/images/sponsors/palo_alto_networks.png", alt: "Paloalto Logo" },
      { href: "https://engage.isaca.org/melbournechapter/home", src: "assets/images/sponsors/isaca.png", alt: "Isaca Logo" },
    ],
  },
  // Add other sponsor categories here...
];

const Sponsors = () => (
  <section className="sponsors py-8">
    <h2 className="text-2xl font-bold mb-6 text-center">2024 Sponsors</h2>
    {sponsors.map(sponsor => (
      <div className="sponsor-category mb-6" key={sponsor.category}>
        <h3 className="text-xl font-semibold mb-4">{sponsor.category}</h3>
        <div className="sponsor-logos flex justify-center space-x-4">
          {sponsor.logos.map(logo => (
            <a href={logo.href} target="_blank" rel="noopener noreferrer" key={logo.src}>
              <img src={logo.src} alt={logo.alt} className="sponsor-logo h-16" />
            </a>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Sponsors;
