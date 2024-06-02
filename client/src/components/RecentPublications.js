import React from 'react';

const publications = [
  {
    href: "/posts/guide_01_sql_injection/",
    imgSrc: "assets/images/publications/thumbnail_hu2aec92b6c775fa6cc4a0e6bf50c2a36c_654028_320x0_resize_box_3.png",
    title: "SQL Injection",
    date: "2024-03-01",
    updated: "2024-04-13",
    words: "1554",
    length: "8 mins",
    tags: ["2024", "Sarah's Intro to WebSec", "SQLi"]
  },
  // Add other publications here...
];

const RecentPublications = () => (
  <section className="recent-publications py-8">
    <h2 className="text-2xl font-bold mb-6 text-center">Recent Publications</h2>
    {publications.map(pub => (
      <div className="publication mb-6 flex flex-col md:flex-row items-center" key={pub.title}>
        <a href={pub.href}>
          <img src={pub.imgSrc} alt="Publication Image" className="publication-image w-32 h-32 mr-4" />
        </a>
        <div className="publication-details">
          <h3 className="text-xl font-semibold">{pub.title}</h3>
          <p className="text-gray-600">{pub.date} <span className="dot">·</span> Updated: {pub.updated} <span className="dot">·</span> {pub.words} words</p>
          <p className="text-gray-600"><span className="dot">·</span> {pub.length}</p>
          <div className="publication-tags flex space-x-2 mt-2">
            {pub.tags.map(tag => <span className="tag bg-gray-200 py-1 px-2 rounded" key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default RecentPublications;
