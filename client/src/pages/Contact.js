import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';

const contactTOCItems = [
  { label: 'E-mail', href: '#email' },
  { label: 'Social Media', href: '#social-media' }
];

const Contact = () => {
  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="contact">
          <h1 className="text-4xl font-bold mb-4">Contact Details</h1>
          <p className="update-info text-neutral-400 mb-4">Updated: 2024-01-24 <span className="dot text-primary-500">·</span> 95 words <span className="dot text-primary-500">·</span> 1 min</p>

          <TOC items={contactTOCItems} />

          <h2 id="email" className="text-2xl font-bold mt-8 mb-4">E-mail</h2>
          <p>We display our email addresses in this encoded manner in order to prevent spam emails, that might be originated from bots that scrape our website. Before emailing us, please take note of the following decoding rules:</p>
          <ul className="nested-list list-disc ml-6 mb-4">
            <li><span className="encoded" style={{ color: 'rgb(52, 211, 153)' }}>[dot]</span> should be decoded to <span className="decoded" style={{ color: 'rgb(52, 211, 153)' }}>.</span></li>
            <li><span className="encoded" style={{ color: 'rgb(52, 211, 153)' }}>[at]</span> should be decoded to <span className="decoded" style={{ color: 'rgb(52, 211, 153)' }}>@</span></li>
          </ul>
          <p>Want to get in touch? You can reach us at <span className="encoded" style={{ color: 'rgb(52, 211, 153)' }}>team[at]monsec[dot]io</span>, or contact specific <a href="/team" className="hover:underline text-primary-500">team members</a>.</p>

          <h2 id="social-media" className="text-2xl font-bold mt-8 mb-4">Social Media</h2>
          <ul className="nested-list list-disc ml-6 mb-4">
            <li className="mb-2"><a href="https://go.monsec.io/discord" className="hover:underline text-primary-500">Discord</a></li>
            <li className="mb-2"><a href="https://go.monsec.io/facebook" className="hover:underline text-primary-500">Facebook</a></li>
            <li className="mb-2"><a href="https://go.monsec.io/twitter" className="hover:underline text-primary-500">X (formerly known as Twitter)</a></li>
            <li className="mb-2"><a href="https://go.monsec.io/instagram" className="hover:underline text-primary-500">Instagram</a></li>
            <li className="mb-2"><a href="https://www.threads.net/@monashcybersec" className="hover:underline text-primary-500">Threads</a></li>
            <li className="mb-2"><a href="https://go.monsec.io/mastodon" className="hover:underline text-primary-500">Mastodon</a></li>
            <li className="mb-2"><a href="https://go.monsec.io/linkedin" className="hover:underline text-primary-500">LinkedIn</a></li>
            <li className="mb-2"><a href="https://go.monsec.io/youtube" className="hover:underline text-primary-500">YouTube</a></li>
            <li className="mb-2"><a href="https://go.monsec.io/github" className="hover:underline text-primary-500">GitHub</a></li>
            <li className="mb-2"><a href="https://go.monsec.io/ctftime" className="hover:underline text-primary-500">CTFtime</a></li>
            <li className="mb-2"><a href="https://app.hackthebox.com/universities/overview/250" className="hover:underline text-primary-500">Hack The Box</a>
              <ul className="list-disc ml-6">
                <li className="mb-2">New MonSec members should ask the <a href="/team" className="hover:underline text-primary-500">committee</a> to join</li>
              </ul>
            </li>
            <li className="mb-2"><a href="https://go.monsec.io/eventbrite" className="hover:underline text-primary-500">Eventbrite</a></li>
          </ul>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
