import React, { useState } from 'react';
import sqlInjectionImage from '../assets/images/publications/thumbnail_hu2aec92b6c775fa6cc4a0e6bf50c2a36c_654028_320x0_resize_box_3.png';
import emailSecurityImage from '../assets/images/publications/thumbnail_hu954ef2d1324ccd9b0481c03d3eda522d_273398_320x0_resize_box_3.png';
import sqlInjectionMacImage from '../assets/images/publications/thumbnail_hu0dbce03da8ecad43be7e2b87ac7909c9_127749_320x0_resize_box_3.png';
import dnsImage from '../assets/images/publications/thumbnail_hu8929bf2ce3828c8344a611839d0a6ce5_1311219_320x0_resize_box_3.png';
import osintImage from '../assets/images/publications/thumbnail_hu0207fa8256bfbe608128d7c42d157e64_898616_320x0_resize_box_3.png';

const publications = [
  {
    href: "/posts/guide_01_sql_injection/",
    imgSrc: sqlInjectionImage,
    title: "SQL Injection",
    date: "2024-03-01",
    updated: "2024-04-13",
    words: "1554",
    length: "8 mins",
    tags: ["2024", "Sarah's Intro to WebSec", "SQL Injection"]
  },
  {
    href: "/posts/email_security/",
    imgSrc: emailSecurityImage,
    title: "A Crash Course in e-mail Security",
    date: "2024-02-12",
    updated: "2024-03-15",
    words: "1119",
    length: "6 mins",
    tags: ["2024", "SMTP", "IMAP", "DNS", "SPF", "DKIM", "DMARC"]
  },
  {
    href: "https://youtu.be/77BluYpgN_c",
    imgSrc: sqlInjectionMacImage,
    title: "MonSec & MAC: Introduction to SQL Injection",
    date: "2023-10-18",
    length: "28 mins",
    tags: ["2023", "SQL Injection", "MAC"]
  },
  {
    href: "https://youtu.be/bAFBVqyOkOA",
    imgSrc: dnsImage,
    title: "MonSec & auDA: Domain Name System",
    date: "2023-10-04",
    length: "32 mins",
    tags: ["2023", "DNS", "auDA"]
  },
  {
    href: "https://youtu.be/zDFcXtqgYJc",
    imgSrc: osintImage,
    title: "Image-based OSINT",
    date: "2023-09-20",
    length: "40 mins",
    tags: ["2023", "OSINT", "Image Analysis"]
  }
];

const RecentPublications = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleClearFilter = () => {
    setSelectedTag(null);
  };

  const filteredPublications = selectedTag
    ? publications.filter(pub => pub.tags.includes(selectedTag))
    : publications;

  return (
    <section className="recent-publications py-8">
      <h2 className="text-header font-bold text-white mb-4 text-center">Recent Publications</h2>
      {selectedTag && (
        <div className="mb-8 pl-4">
          <div className="text-white text-base">
            Tags <span className="text-primary-500">/</span>
          </div>
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-white">{selectedTag}</h1>
            <button onClick={handleClearFilter} className="ml-2 text-primary-500 text-2xl font-bold">X</button>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center space-y-8">
        {filteredPublications.map(pub => (
          <div className="publication flex items-start p-4 w-full max-w-2xl" key={pub.title}>
            <a href={pub.href} target="_blank" rel="noopener noreferrer" className="mr-4 flex-shrink-0">
              <img src={pub.imgSrc} alt={pub.title} className="publication-image h-40 w-40 object-cover rounded-lg transition-transform duration-300 hover:scale-105" />
            </a>
            <div className="publication-info text-neutral-50">
              <h3 className="text-2xl font-bold mb-2">{pub.title}</h3>
              <p className="text-sm text-neutral-400 mb-1">{pub.date} <span className="dot text-primary-500">·</span> Updated: {pub.updated} <span className="dot text-primary-500">·</span> {pub.words} words</p>
              <p className="text-sm text-neutral-400 mb-4"><span className="dot text-primary-500">·</span> {pub.length}</p>
              <div className="publication-tags flex flex-wrap space-x-2">
                {pub.tags.map(tag => (
                  <span
                    key={tag}
                    className="tag border border-neutral-400 text-neutral-300 py-1 px-2 rounded-full text-xs bg-transparent hover:text-primary-500 hover:border-primary-500 cursor-pointer"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPublications;
