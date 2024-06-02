import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import TOC from '../components/TOC';
import kaliLinuxImage from '../assets/images/resources/kali_linux.png';
import youtubeImage from '../assets/images/resources/youtube.png';

const Resources = () => {
  const tocItems = [
    { label: "Leo's Notes", href: "#leo-notes" },
    { label: "Elias' Notes", href: "#elias-notes" },
    { label: "Kali Linux Set-up", href: "#kali-linux-setup" },
    { label: "Workshop Recordings", href: "#workshop-recordings" }
  ];

  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="resources">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <TOC items={tocItems} />
          
          <div className="my-8">
            <h2 id="leo-notes" className="text-2xl font-bold mb-2">Leo's Notes</h2>
            <p className="text-neutral-400 mb-2">2023-02-08 <span className="dot text-primary-500">·</span> Updated: 2023-06-23</p>
            <a href="/posts/leos-notes" className="text-purple-500">Read more</a>
          </div>

          <div className="my-8">
            <h2 id="elias-notes" className="text-2xl font-bold mb-2">Elias' Notes</h2>
            <p className="text-neutral-400 mb-2">2023-01-29 <span className="dot text-primary-500">·</span> Updated: 2023-06-23</p>
            <a href="/posts/elias-notes" className="text-purple-500">Read more</a>
          </div>

          <div className="my-8 flex">
            <img src={kaliLinuxImage} alt="Kali Linux" className="w-48 h-48 rounded mr-4" />
            <div>
              <h2 id="kali-linux-setup" className="text-2xl font-bold mb-2">Kali Linux Set-up</h2>
              <p className="text-neutral-400 mb-2">2023-01-20 <span className="dot text-primary-500">·</span> Updated: 2023-07-13 <span className="dot text-primary-500">·</span> 221 words <span className="dot text-primary-500">·</span> 2 mins</p>
              <div className="flex flex-wrap space-x-2">
                <span className="tag">Kali</span>
                <span className="tag">Linux</span>
              </div>
              <a href="/posts/kali-linux-setup" className="text-purple-500">Read more</a>
            </div>
          </div>

          <div className="my-8 flex">
            <img src={youtubeImage} alt="Workshop Recordings" className="w-48 h-48 rounded mr-4" />
            <div>
              <h2 id="workshop-recordings" className="text-2xl font-bold mb-2">Workshop Recordings</h2>
              <p className="text-neutral-400 mb-2">2020-03-16 <span className="dot text-primary-500">·</span> Updated: 2023-07-11</p>
              <div className="flex flex-wrap space-x-2">
                <span className="tag">YouTube</span>
              </div>
              <a href="/posts/workshop-recordings" className="text-purple-500">Read more</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Resources;
