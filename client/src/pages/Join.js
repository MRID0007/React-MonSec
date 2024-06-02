import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';
import hackingGif from '../assets/images/hacking.gif';
import orientationFestivalImage from '../assets/images/orientation_festival.jpg';

const joinTOCItems = [
  { label: 'Meeting Location & Time', href: '#meeting-location-time' },
  { label: 'How to Join?', href: '#how-to-join' },
  { label: 'Constitution', href: '#constitution' }
];

const Join = () => {
  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="join">
          <h1 className="text-4xl font-bold mb-4">Joining MonSec</h1>
          <p className="update-info text-neutral-400 mb-4">Updated: 2023-07-13 <span className="dot text-primary-500">·</span> 155 words <span className="dot text-primary-500">·</span> 1 min</p>

          <TOC items={joinTOCItems} />

          <h2 id="meeting-location-time" className="text-2xl font-bold mt-8 mb-4">Meeting Location & Time</h2>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Location:</strong> <a href="https://maps.monash.edu/#v=1&zlevel=1&center=145.134974,-37.909375&zoom=18.25&campusid=159&sharepoitype=poi&sharepoi=1155412" target="_blank" className="hover:underline text-primary-500">Room G13 (ground floor) of Woodside Building at Clayton campus</a> (by default) and online at <a href="https://go.monsec.io/live" target="_blank" className="hover:underline text-primary-500">go.monsec.io/live</a>.</li>
            <li><strong>Time:</strong> Wednesdays from 6PM to 8PM.</li>
          </ul>
          <p><strong>Note:</strong> workshop location may change at any time. Follow our <a href="/contact#social-media" className="hover:underline text-primary-500">social media</a> for updates.</p>

          <div className="calendar my-8">
            <iframe src="https://calendar.google.com/calendar/u/0/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Australia/Melbourne&amp;title=MonSec+Events&amp;hl=en_GB&amp;src=Y183YWd0ZnZmYXBoYWd2YTE1dmgxdDdmcms3OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23F09300" style={{ border: 0 }} width="600" height="600" frameBorder="0" scrolling="no"></iframe>
          </div>

          <h2 id="how-to-join" className="text-2xl font-bold mt-8 mb-4">How to Join?</h2>
          <ol className="list-decimal ml-6 mb-4">
            <li>
              Sign-up to our club via Monash Student Association’s <a href="/join" className="hover:underline text-primary-500">Clubs & Societies Portal</a>.
              <ul className="list-disc ml-6 mt-2">
                <li>Membership is free with <a href="https://clubs.msa.monash.edu/joinnow/msaplus/" target="_blank" className="hover:underline text-primary-500">MSA+</a>, or $5 otherwise.</li>
              </ul>
            </li>
            <li className="mt-4">
              Join our <a href="https://go.monsec.io/discord" target="_blank" className="hover:underline text-primary-500">Discord server</a>.
              <ul className="list-disc ml-6 mt-2">
                <li>This is required for members who wish to participate in our <a href="/competitions" className="hover:underline text-primary-500">competitive teams</a>.</li>
                <li>We also have additional <a href="/contact#social-media" className="hover:underline text-primary-500">social media</a> channels, but we use Discord for the bulk of internal club communication.</li>
              </ul>
            </li>
            <li className="mt-4">
              Attend our <a href="/join#meeting-location-time" className="hover:underline text-primary-500">weekly workshops</a> and events in order to get the most value from your membership:
              <div className="join-img my-4">
                <img src={hackingGif} alt="Hacking GIF" className="w-full max-w-lg mx-auto" />
              </div>
              <div className="join-img my-4">
                <img src={orientationFestivalImage} alt="Our Stall at The 2023S1 Orientation Festival" className="w-full max-w-lg mx-auto" />
              </div>
            </li>
          </ol>
          
          <h2 id="constitution" className="text-2xl font-bold mt-8 mb-4">Constitution</h2>
          <div className="centered my-4">
            <a href="https://go.monsec.io/constitution" target="_blank" className="btn bg-primary-500 text-neutral-50 py-2 px-4 rounded hover:bg-primary-700">View Constitution ↗</a>
          </div>
          <p>Our constitution is referenced during:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Annual General Meetings (AGMs)</li>
            <li>Ordinary General Meetings (OGMs)</li>
            <li>Extraordinary General Meetings (EGMs)</li>
            <li>Internal committee meetings</li>
            <li>Any other circumstance that requires it</li>
          </ul>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Join;
