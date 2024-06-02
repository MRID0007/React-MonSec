import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';

const Teams = () => {
  const tocItems = [
    { label: '2024 Team', href: '#team-2024' },
    { label: '2024 Media Team', href: '#media-team-2024' },
    { label: '2024 Ancillary Team', href: '#ancillary-team-2024' },
    { label: '2023 Team', href: '#team-2023' },
    { label: '2023 Media Team', href: '#media-team-2023' },
    { label: '2022 Team (S2)', href: '#team-2022-s2' },
    { label: '2022 Team (S1)', href: '#team-2022-s1' },
    { label: '2021 Team', href: '#team-2021' },
    { label: '2020 Team', href: '#team-2020' },
    { label: '2019 Team (S2)', href: '#team-2019-s2' },
    { label: '2019 Team (S1)', href: '#team-2019-s1' },
    { label: '2018 Team', href: '#team-2018' },
    { label: '2017 Team', href: '#team-2017' }
  ];

  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="teams">
          <h1 className="text-4xl font-bold mb-4">Team</h1>
          <p className="text-neutral-400 mb-2">Updated: 2024-02-11 <span className="dot text-primary-500">·</span> 515 words <span className="dot text-primary-500">·</span> 3 mins</p>
          <TOC items={tocItems} />
          <p className="mb-6">
            We display our email addresses in this encoded manner in order to prevent spam emails, that might be originated from bots that scrape our website. Before emailing us, please take note of the following decoding rules:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>[dot] should be decoded to .</li>
            <li>[at] should be decoded to @</li>
          </ul>

          <h2 id="team-2024" className="text-2xl font-bold mb-2">2024 Team</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Links</th>
                <th>MonSec E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Yuki Kume</td>
                <td className="py-2">President</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">yuki[dot]kume[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Sarah Lam</td>
                <td className="py-2">Vice President</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">sarah[dot]lam[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">James Roche</td>
                <td className="py-2">Secretary</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">james[dot]roche[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Oscar Lupton</td>
                <td className="py-2">Treasurer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">oscar[dot]lupton[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Preeti Hudekar</td>
                <td className="py-2">Member Training Officer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">preeti[dot]hudekar[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Michael Cetrola</td>
                <td className="py-2">System Administrator</td>
                <td className="py-2"></td>
                <td className="py-2">michael[dot]cetrola[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Rohit Ravindranath</td>
                <td className="py-2">Social Media & Communications Officer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">rohit[dot]ravindranath[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Danny (Hoang) Vu</td>
                <td className="py-2">Outreach & Partnerships Officer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">danny[dot]vu[at]monsec[dot]io</td>
              </tr>
            </tbody>
          </table>

          <h2 id="media-team-2024" className="text-2xl font-bold mb-2">2024 Media Team</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Sarah Lam</td>
                <td className="py-2">Video Editor</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Oscar Lupton</td>
                <td className="py-2">Photographer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Rahul Pejathaya</td>
                <td className="py-2">Graphic Designer</td>
                <td className="py-2"></td>
              </tr>
            </tbody>
          </table>

          <h2 id="ancillary-team-2024" className="text-2xl font-bold mb-2">2024 Ancillary Team</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Fredierick Chavez</td>
                <td className="py-2">Marketing Officer</td>
                <td className="py-2"></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Bethany Aung</td>
                <td className="py-2">Marketing Officer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">YunSoo Jin</td>
                <td className="py-2">Design Officer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Eloise (Meng-Chin) Lee</td>
                <td className="py-2">Design Officer</td>
                <td className="py-2"></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Michael Ridgway</td>
                <td className="py-2">Web Developer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
              </tr>
            </tbody>
          </table>

          <h2 id="team-2023" className="text-2xl font-bold mb-2">2023 Team</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Links</th>
                <th>MonSec E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Omri Bornstein</td>
                <td className="py-2">President</td>
                <td className="py-2"><a href="#" className="text-purple-500">Blog</a> <a href="#" className="text-purple-500">LinkedIn</a> <a href="#" className="text-purple-500">GitHub</a></td>
                <td className="py-2">omri[dot]bornstein[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Elias Labastida</td>
                <td className="py-2">Vice President (Semester 1)</td>
                <td className="py-2"><a href="#" className="text-purple-500">Blog</a> <a href="#" className="text-purple-500">LinkedIn</a> <a href="#" className="text-purple-500">Mastodon</a> <a href="#" className="text-purple-500">Twitter</a></td>
                <td className="py-2">elias[dot]labastida[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Sarah Lam</td>
                <td className="py-2">Vice President (Semester 2)</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">sarah[dot]lam[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Yuki Kume</td>
                <td className="py-2">Secretary</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">yuki[dot]kume[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Sean Wong</td>
                <td className="py-2">Treasurer</td>
                <td className="py-2"></td>
                <td className="py-2">sean[dot]wong[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Preeti Hudekar</td>
                <td className="py-2">Member Training Officer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">preeti[dot]hudekar[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Kar Jun Loong</td>
                <td className="py-2">System Administrator</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">kar[dot]jun[dot]loong[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">James Roche</td>
                <td className="py-2">Social Media & Communications Officer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">james[dot]roche[at]monsec[dot]io</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Oscar Lupton</td>
                <td className="py-2">Outreach & Partnerships Officer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
                <td className="py-2">oscar[dot]lupton[at]monsec[dot]io</td>
              </tr>
            </tbody>
          </table>

          <h2 id="media-team-2023" className="text-2xl font-bold mb-2">2023 Media Team</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Sarah Lam</td>
                <td className="py-2">Video Editor</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Rahul Pejathaya</td>
                <td className="py-2">Graphic Designer</td>
                <td className="py-2"></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Chloe Nguyen</td>
                <td className="py-2">Graphic Designer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Oscar Lupton</td>
                <td className="py-2">Photographer</td>
                <td className="py-2"><a href="#" className="text-purple-500">LinkedIn</a></td>
              </tr>
            </tbody>
          </table>

          <h2 id="team-2022-s2" className="text-2xl font-bold mb-2">2022 Team (S2)</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Leo Whitehead</td>
                <td className="py-2">President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Omri Bornstein</td>
                <td className="py-2">Vice President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Akbar Fadiansyah</td>
                <td className="py-2">Secretary</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Luca Cattapan</td>
                <td className="py-2">Treasurer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Ari Feldman</td>
                <td className="py-2">Member Training Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Yuki Kume</td>
                <td className="py-2">Member Training Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Matti Haddad</td>
                <td className="py-2">System Administrator</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Sean Wong</td>
                <td className="py-2">Social Media & Communications Officer</td>
              </tr>
            </tbody>
          </table>

          <h2 id="team-2022-s1" className="text-2xl font-bold mb-2">2022 Team (S1)</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Peter Drew</td>
                <td className="py-2">President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Leo Whitehead</td>
                <td className="py-2">Vice President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Omri Bornstein</td>
                <td className="py-2">Secretary</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Luca Cattapan</td>
                <td className="py-2">Treasurer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Ari Feldman</td>
                <td className="py-2">Member Training Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Matti Haddad</td>
                <td className="py-2">System Administrator</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Marcus Facchino</td>
                <td className="py-2">Member Training Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Akbar Fadiansyah</td>
                <td className="py-2">Social Media & Communications Officer</td>
              </tr>
            </tbody>
          </table>

          <h2 id="team-2021" className="text-2xl font-bold mb-2">2021 Team</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Peter Drew</td>
                <td className="py-2">President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Emily Trau</td>
                <td className="py-2">Vice President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Luke St John</td>
                <td className="py-2">Secretary</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">James Pan</td>
                <td className="py-2">Treasurer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Leo Whitehead</td>
                <td className="py-2">Member Training Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Omri Bornstein</td>
                <td className="py-2">Assistant Member Training Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Luca Cattapan</td>
                <td className="py-2">Socials and Events Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Samuel Merren</td>
                <td className="py-2">Outreach & Partnerships Officer</td>
              </tr>
            </tbody>
          </table>

          <h2 id="team-2020" className="text-2xl font-bold mb-2">2020 Team</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Mariusz Skoneczko</td>
                <td className="py-2">President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Daniel Byrgiotis</td>
                <td className="py-2">Vice President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Peter Drew</td>
                <td className="py-2">Secretary</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Rithesh Jayaram</td>
                <td className="py-2">Treasurer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Tim Silvester</td>
                <td className="py-2">Member Training Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Emily Trau</td>
                <td className="py-2">System Administrator</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Luke St John</td>
                <td className="py-2">Socials & Events Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Salang Kang</td>
                <td className="py-2">Outreach & Partnerships Officer</td>
              </tr>
            </tbody>
          </table>

          <h2 id="team-2019-s2" className="text-2xl font-bold mb-2">2019 Team (S2)</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Rosson Cacencu</td>
                <td className="py-2">President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Richard Huang</td>
                <td className="py-2">Vice President</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Peter Drew</td>
                <td className="py-2">Secretary</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Rithesh Jayaram</td>
                <td className="py-2">Treasurer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Mariusz Skoneczko</td>
                <td className="py-2">Member Training Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Daniel Byrgiotis</td>
                <td className="py-2">Member Training Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Rafael Hermann</td>
                <td className="py-2">Socials & Events Officer</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Tim Richardson</td>
                <td className="py-2">Outreach & Partnerships Officer</td>
              </tr>
            </tbody>
          </table>

          <h2 id="team-2019-s1" className="text-2xl font-bold mb-2">2019 Team (S1)</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Slack Handle</th>
                <th>Position</th>
                <th>Social</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">drizbit</td>
                <td className="py-2">President</td>
                <td className="py-2"><a href="#" className="text-purple-500">Twitter</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">Dalordish</td>
                <td className="py-2">Event Coordinator</td>
                <td className="py-2"></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">ross</td>
                <td className="py-2">Event Coordinator</td>
                <td className="py-2"></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">varotrix</td>
                <td className="py-2">Media & Marketing Representative</td>
                <td className="py-2"></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">pouffle</td>
                <td className="py-2">Communications Representative</td>
                <td className="py-2"></td>
              </tr>
            </tbody>
          </table>

          <h2 id="team-2018" className="text-2xl font-bold mb-2">2018 Team</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Slack Handle</th>
                <th>Position</th>
                <th>Social</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">0x4a47</td>
                <td className="py-2">President</td>
                <td className="py-2"><a href="#" className="text-purple-500">Twitter</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">drizbit</td>
                <td className="py-2">Vice President</td>
                <td className="py-2"><a href="#" className="text-purple-500">Twitter</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">spacey</td>
                <td className="py-2">Assistant</td>
                <td className="py-2"></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">drk_kngt</td>
                <td className="py-2">Assistant</td>
                <td className="py-2"></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">bad5ect0r</td>
                <td className="py-2">Assistant</td>
                <td className="py-2"><a href="#" className="text-purple-500">Twitter</a></td>
              </tr>
            </tbody>
          </table>

          <h2 id="team-2017" className="text-2xl font-bold mb-2">2017 Team</h2>
          <table className="w-full text-left mb-6 border-collapse">
            <thead>
              <tr>
                <th>Slack Handle</th>
                <th>Position</th>
                <th>Social</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="py-2">sml555</td>
                <td className="py-2">President</td>
                <td className="py-2"><a href="#" className="text-purple-500">Twitter</a></td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="py-2">0x4a47</td>
                <td className="py-2">Vice President</td>
                <td className="py-2"><a href="#" className="text-purple-500">Twitter</a></td>
              </tr>
            </tbody>
          </table>

        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Teams;
