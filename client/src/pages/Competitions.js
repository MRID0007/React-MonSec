import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';

const competitionsTOCItems = [
  { label: 'Capture The Flag', href: '#capture-the-flag' },
  { label: 'MonSec Beginner CTF', href: '#monsec-beginner-ctf' },
  { label: 'DownUnderCTF', href: '#downunderctf' },
  { label: 'Other Competitions', href: '#other-competitions' },
  { label: 'A Note for Monash University Students', href: '#note-for-monash-students' }
];

const Competitions = () => {
  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="competition">
          <h1 className="text-4xl font-bold mb-4">Competitive Team</h1>
          <p className="update-info text-neutral-400 mb-4">Updated: 2023-07-13 <span className="dot text-primary-500">·</span> 274 words <span className="dot text-primary-500">·</span> 2 mins</p>

          <TOC items={competitionsTOCItems} />

          <h2 id="capture-the-flag" className="text-2xl font-bold mt-8 mb-4">Capture The Flag</h2>
          <p>A <a href="https://en.wikipedia.org/wiki/Capture_the_flag_%28cybersecurity%29" className="hover:underline text-primary-500">Capture The Flag</a> is a cybersecurity exercise/competition, in which the goal is to find hidden flags (such as <span className="flag" style={{ color: 'rgb(52, 211, 153)' }}>monsec{"{welcome_0x1337}"}</span>) inside purposefully-vulnerable programs and websites, that are usually created by the event’s organisers. It is highly regarded as an ethical and safe way to learn and demonstrate cybersecurity skills.</p>

          <h2 id="monsec-beginner-ctf" className="text-2xl font-bold mt-8 mb-4">MonSec Beginner CTF</h2>
          <p>The MonSec Beginner CTF is our very own annual CTF designed and engineered towards beginners. It is usually held early in the year and runs for approximately 6 hours.</p>
          <p>For updates on this event keep an eye out at our <a href="https://go.monsec.io/discord" className="hover:underline text-primary-500">Discord server</a> and <a href="/contact#social-media" className="hover:underline text-primary-500">social media</a>.</p>

          <h2 id="downunderctf" className="text-2xl font-bold mt-8 mb-4">DownUnderCTF</h2>
          <p>From the FAQ on the website:</p>
          <blockquote className="border-l-4 border-primary-500 pl-4 my-4">
            <p><strong>What is <a href="/faq" className="hover:underline text-primary-500">DownUnderCTF</a>?</strong></p>
            <p>DownUnderCTF is a world-wide Capture The Flag (CTF) competition targeted at Australian secondary and tertiary students.</p>
          </blockquote>
          <p>In 2021 both of our teams did alright in the worldwide rankings and top 10 in Australia.</p>

          <h2 id="other-competitions" className="text-2xl font-bold mt-8 mb-4">Other competitions</h2>
          <p>We occasionally compete in other CTFs and competitions, such as <a href="https://picoctf.org/" className="hover:underline text-primary-500">picoCTF</a>. Head over to our competitive channels on <a href="https://go.monsec.io/ctftime" className="hover:underline text-primary-500">CTFtime</a> to see what we’re up to and opportunities to join our team.</p>

          <h2 id="note-for-monash-students" className="text-2xl font-bold mt-8 mb-4">A Note for Monash University Students</h2>
          <p>Monash University students who wish to join our competitive team need to adhere to the following requirements:</p>
          <ul className="nested-list list-disc ml-6 mb-4">
            <li className="mb-2">Being enrolled in at least 1 unit at <a href="https://maps.monash.edu/#v=1&zlevel=1&center=145.134974,-37.909375&zoom=18.25&campusid=159&sharepoitype=poi&sharepoi=1155412" className="hover:underline text-primary-500">Monash University’s Clayton campus</a>.</li>
            <li className="mb-2">Being an <a href="/join" className="hover:underline text-primary-500">official member</a> of the club.</li>
            <li className="mb-2">Registering an expression of interest to join our competitive team, addressed to the club’s secretary.
              <ul className="list-disc ml-6">
                <li className="mb-2">The expression of interest should be addressed to the secretary’s email address or Discord account, and it needs to include details necessary to verify your membership such as:
                  <ul className="list-disc ml-6">
                    <li className="mb-2">full name</li>
                    <li className="mb-2">Monash University student ID number</li>
                    <li className="mb-2"><a href="/contact#email" className="hover:underline text-primary-500">Monash University email address</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Competitions;
