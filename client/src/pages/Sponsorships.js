import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';
import dfirWorkshopImage from '../assets/images/dfir_workshop_2023.jpg';

const Sponsorships = () => {
  const tocItems = [
    { label: "Why Should You Sponsor Us?", href: "#why-sponsor-us" },
    { label: "Our Values", href: "#our-values" },
    { label: "Sponsorship Tiers", href: "#sponsorship-tiers" },
  ];

  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="sponsorships">
          <h1 className="text-4xl font-bold mb-4">Sponsorships</h1>
          <p className="text-neutral-400 mb-2">Updated: 2023-11-22 <span className="dot text-primary-500">·</span> 280 words <span className="dot text-primary-500">·</span> 2 mins</p>
          <TOC items={tocItems} />
          
          <h2 id="why-sponsor-us" className="text-2xl font-bold mb-2">Why Should You Sponsor Us?</h2>
          <p className="mb-6">
            Increase awareness of your brand among the target audience of future recruitment campaigns. Our members include students pursuing careers in:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Cyber-security</li>
            <li>Computer Science</li>
            <li>Software Engineering</li>
            <li>Information Technology</li>
            <li>Criminology/Law</li>
          </ul>
          <p className="mb-6">
            More direct access to future talent in the cyber-security sector via on-campus events such as:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Guest speaker workshops</li>
            <li>Career nights</li>
            <li><a href="https://monsec.io/competitions/#monsec-beginner-ctf" className="text-purple-500">CTFs</a></li>
            <li>Or any other event idea you might have for incorporating your company with MonSec…</li>
          </ul>
          <p className="mb-6">
            Student-focused marketing (via our <a href="/contact" className="text-purple-500">social media channels</a>) for your company’s
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Internship programs</li>
            <li>Graduate opportunities</li>
            <li>Or anything else that you want our members to know about…</li>
          </ul>
          <figure className="mb-6">
            <img src={dfirWorkshopImage} alt="DFIR Workshop from 2023" className="w-full h-auto" />
            <figcaption className="text-center text-neutral-400">DFIR Workshop from 2023</figcaption>
          </figure>

          <h2 id="our-values" className="text-2xl font-bold mb-2">Our Values</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Beginner-friendliness</li>
            <li>Practicality</li>
            <li>Passion for the community</li>
          </ul>

          <h2 id="sponsorship-tiers" className="text-2xl font-bold mb-2">Sponsorship Tiers</h2>
          <p className="mb-6">
            Please <a href="/contact" className="text-purple-500">contact us</a> for specific events, promotional campaigns or any sponsorship-related queries.
          </p>
          <div className="mb-6">
            <a href="https://go.monsec.io/prospectus" className="btn">View Sponsorship Prospectus ↗</a>
            <p className="mt-2">A PDF version of our sponsorship prospectus is available via <a href="/team" className="text-purple-500">email</a>.</p>
          </div>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th> </th>
                <th>Gold</th>
                <th>Platinum</th>
                <th>Diamond</th>
                <th>Graphene</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Cost</td>
                <td className="py-2">AU$750/year</td>
                <td className="py-2">AU$1500/year</td>
                <td className="py-2">AU$2000/year</td>
                <td className="py-2">AU$2500/year</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Dedicated Speech<sup className="text-neutral-500">1</sup></td>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2">X</td>
                <td className="py-2">X</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Referral to Sponsor’s Events</td>
                <td className="py-2"></td>
                <td className="py-2">X</td>
                <td className="py-2">X</td>
                <td className="py-2">X</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Logo on Website</td>
                <td className="py-2">X</td>
                <td className="py-2">X</td>
                <td className="py-2">X</td>
                <td className="py-2">X</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Logo on Event Promotions</td>
                <td className="py-2">X</td>
                <td className="py-2">X</td>
                <td className="py-2">X</td>
                <td className="py-2">X</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Social Media Posts<sup className="text-neutral-500">2</sup></td>
                <td className="py-2">5/semester</td>
                <td className="py-2">15/semester</td>
                <td className="py-2">25/semester</td>
                <td className="py-2">40/semester or up to 4/week</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Special Event Title Sponsor<sup className="text-neutral-500">3</sup></td>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2">X</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Club Members<sup className="text-neutral-500">4</sup> Referral List</td>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2">X</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Dedicated Marketing Campaign</td>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2"></td>
                <td className="py-2">X</td>
              </tr>
            </tbody>
          </table>

          <hr className="border-t-4 border-neutral-400 my-4" />

          <div className="mb-6">
            <ol className="list-decimal list-inside pl-6">
              <li className="text-neutral-50 mb-4"><span className="text-neutral-500"></span> We will give a speech outlining our involvement with the sponsor, and their value to our members. The sponsor is welcome (and encouraged) to talk to our members (including giving a speech) regardless of the tier they are in. ↩︎</li>
              <li className="text-neutral-50 mb-4"><span className="text-neutral-500"></span> Only during <a href="https://www.monash.edu/students/admin/dates/summary-dates" className="text-purple-500">Monash University’s non-exam periods</a>. ↩︎</li>
              <li className="text-neutral-50 mb-4"><span className="text-neutral-500"></span> Limited to one sponsor for each special event. A special event can be an in-depth workshop, a CTF engagement, or any other appropriate format. ↩︎</li>
              <li className="text-neutral-50 mb-4"><span className="text-neutral-500"></span> Only the members who gave formal consent for us to distribute their details are included. ↩︎</li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Sponsorships;
