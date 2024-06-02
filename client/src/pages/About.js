import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';
import agmImage from '../assets/images/agm_2022_hud1b05a0828a1fd51b679a1cc5ebfdef1_792214_1320x0_resize_q75_box.jpg';

const aboutTOCItems = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Weekly Workshop', href: '#weekly-workshop' },
  { label: 'Competitions', href: '#competitions' },
  { label: 'Other', href: '#other' }
];

const About = () => {
  const copyToClipboard = (e) => {
    const codeBlock = e.target.parentNode.querySelector('code').innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
      e.target.innerText = 'Copied!';
      setTimeout(() => {
        e.target.innerText = 'Copy';
      }, 2000);
    });
  };

  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="about">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="update-info text-neutral-400 mb-4">Updated: 2024-02-11 <span className="dot text-primary-500">·</span> 228 words <span className="dot text-primary-500">·</span> 2 mins</p>
          
          <TOC items={aboutTOCItems} />

          <h2 id="introduction" className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
          <p>Welcome to MonSec, a <strong>student-run club</strong> at Monash University dedicated to the teachings of <strong>practical</strong> cybersecurity skills.</p>
          
          <div className="code-block bg-neutral-800 p-4 rounded-lg my-4 overflow-x-auto relative group">
            <button onClick={copyToClipboard} className="copy-btn absolute top-2 right-2 bg-primary-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Copy</button>
            <code>
              <span className="keyword text-green-500">#include &lt;stdio.h&gt;</span>
              <br />
              <span className="keyword text-green-500">#include &lt;stdlib.h&gt;</span>
              <br />
              <span className="type text-blue-500">int</span> <span className="function text-purple-500">main</span>() {'{'}
              <br />
              &nbsp;&nbsp;<span className="comment text-gray-400">// printf() displays the string inside quotation</span>
              <br />
              &nbsp;&nbsp;<span className="function text-purple-500">printf</span>(<span className="string text-yellow-500">"Welcome to MonSec!<span className="escape text-red-500">\n</span>"</span>);
              <br />
              &nbsp;&nbsp;<span className="keyword text-green-500">return</span> <span className="constant text-pink-500">EXIT_SUCCESS</span>;
              <br />
              {'}'}
            </code>
          </div>

          <p>Established in 2014, we run <strong>weekly events</strong>, each focused on a single topic, involving both presentations and <strong>beginner-friendly</strong> challenges to test our attendees. Our aim is to introduce students to new and interesting career opportunities, and give them not only the skills to pursue them, but the passion and interest to want to do so.</p>
          
          <img src={agmImage} alt="2022 Annual General Meeting" className="about-img rounded-lg my-4 w-full" />
          <p className="image-caption text-center text-neutral-400">2022 Annual General Meeting</p>
          
          <h2 id="weekly-workshop" className="text-2xl font-bold mt-8 mb-4">Weekly Workshop</h2>
          <p><a href="#" className="link text-primary-500 hover:underline">times and locations</a></p>
          <p>We plan to cover the following areas (Note: This is not an exhaustive list).</p>
          
          <ul className="nested-list list-disc ml-6 mb-4">
            <li className="mb-2">Penetration testing
              <ul className="list-disc ml-6">
                <li className="mb-2">Network scanning</li>
                <li className="mb-2">Password cracking</li>
                <li className="mb-2">Wi-Fi attacks</li>
                <li className="mb-2">Corporate network hacking</li>
              </ul>
            </li>
            <li className="mb-2">Cryptography</li>
            <li className="mb-2">Binary exploitation</li>
            <li className="mb-2">Reverse-engineering</li>
            <li className="mb-2">Malware analysis</li>
            <li className="mb-2">Digital forensics
              <ul className="list-disc ml-6">
                <li className="mb-2">Open-source intelligence (OSINT)</li>
                <li className="mb-2">Steganography</li>
                <li className="mb-2">Network sniffing</li>
              </ul>
            </li>
            <li className="mb-2">Game hacking</li>
            <li className="mb-2">Mobile app hacking</li>
          </ul>
          <p>We are open to people bringing their own projects and ideas to work on with other members.</p>
          <p>We also plan to bring industry experts to give students an inside look into a jobs in cybersecurity and networking opportunities. If you are a cybersecurity professional and would like to collaborate with us, please take a note of our <a href="contact.html" className="link text-primary-500 hover:underline">contact details</a>.</p>
          
          <h2 id="competitions" className="text-2xl font-bold mt-8 mb-4">Competitions</h2>
          <p>We participate in various <a href="ctf.html" className="link text-primary-500 hover:underline">CTF</a>-type competitions both domestically and internationally.</p>
          
          <h2 id="other" className="text-2xl font-bold mt-8 mb-4">Other</h2>
          <p>We are <a href="registered-charity.html" className="link text-primary-500 hover:underline">registered</a> as a non-for-profit organisation in Australia.</p>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
