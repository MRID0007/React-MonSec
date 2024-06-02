import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import sqlInjectionImage from '../assets/images/publications/thumbnail_hu2aec92b6c775fa6cc4a0e6bf50c2a36c_654028_320x0_resize_box_3.png';
import emailSecurityImage from '../assets/images/publications/thumbnail_hu954ef2d1324ccd9b0481c03d3eda522d_273398_320x0_resize_box_3.png';
import semester2Image from '../assets/images/publications/thumbnail_hu76370b4924bc7490ec48ac36b8469b77_211042_320x0_resize_q75_box.jpg';
import semester1Image from '../assets/images/publications/thumbnail_hu90f9442a4683f5fc6018012ef56f267d_1504779_320x0_resize_q75_box.jpg';
import pwcExpoImage from '../assets/images/publications/PwC.png';
import cySCAImage from '../assets/images/publications/thumbnail_hu7d8ba115d342e7d6f98b49bfe2865d40_18896_320x0_resize_box_3.png';
import getStartedImage from '../assets/images/publications/thumbnail_hu54c434ffba96419404065cfeea134a23_1014128_320x0_resize_q75_box.jpg';

const postsData = [
  {
    year: '2024',
    posts: [
      {
        title: 'SQL Injection',
        date: '2024-03-01',
        updated: '2024-04-13',
        words: 1554,
        readTime: 8,
        tags: ['2024', "Sarah's Intro to WebSec", 'SQLi'],
        image: sqlInjectionImage,
      },
      {
        title: 'A Crash Course in e-mail Security',
        date: '2024-02-12',
        updated: '2024-03-15',
        words: 1119,
        readTime: 6,
        tags: ['2024', 'SMTP', 'IMAP', 'DNS', 'SPF', 'DKIM', 'DMARC'],
        image: emailSecurityImage,
      },
    ],
  },
  {
    year: '2023',
    posts: [
      {
        title: '2023 Semester 2',
        date: '2023-07-19',
        updated: '2023-11-22',
        words: 840,
        readTime: 4,
        tags: ['2023'],
        image: semester2Image,
      },
      {
        title: '2023 Semester 1',
        date: '2023-02-19',
        updated: '2023-07-02',
        words: 566,
        readTime: 3,
        tags: ['O-Week', '2023'],
        image: semester1Image,
      },
    ],
  },
  {
    year: '2018',
    posts: [
      {
        title: 'PwC Careers Expo',
        date: '2018-07-31',
        words: 174,
        readTime: 1,
        tags: ['Events', 'Monsec-Stall'],
        image: pwcExpoImage,
      },
      {
        title: 'CySCA 2018 Is Here',
        date: '2018-06-01',
        words: 77,
        readTime: 1,
        tags: ['CTFs', 'CySCA', 'Events'],
        image: cySCAImage,
      },
      {
        title: 'Lets Get Started!',
        date: '2018-03-01',
        words: 72,
        readTime: 1,
        tags: ['Workshops', 'CTFs'],
        image: getStartedImage,
      },
    ],
  },
];

const Posts = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const clearFilter = () => {
    setSelectedTag(null);
  };

  const filteredPosts = selectedTag
    ? postsData.map((year) => ({
        ...year,
        posts: year.posts.filter((post) => post.tags.includes(selectedTag)),
      }))
    : postsData;

  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="posts">
          <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
          {selectedTag && (
            <div className="mb-4">
              <span className="text-lg font-bold">Tags <span className="text-primary-500">/</span></span>
              <span className="text-3xl font-bold text-white ml-2">{selectedTag}</span>
              <button onClick={clearFilter} className="text-primary-500 ml-4">X</button>
            </div>
          )}
          {filteredPosts.map((yearData) => (
            <div key={yearData.year} className="my-8">
              <h2 className="text-2xl font-bold mb-4">{yearData.year}</h2>
              <hr className="border-t-2 border-neutral-400 mb-4" />
              {yearData.posts.map((post) => (
                <div className="flex mb-8" key={post.title}>
                  <img src={post.image} alt={post.title} className="w-48 h-48 rounded mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p className="text-neutral-400 mb-2">
                      {post.date} <span className="dot text-primary-500">·</span> Updated: {post.updated} <span className="dot text-primary-500">·</span> {post.words} words
                    </p>
                    <p className="text-neutral-400 mb-2"><span className="dot text-primary-500">·</span> {post.readTime} mins</p>
                    <div className="flex flex-wrap space-x-2">
                      {post.tags.map((tag) => (
                        <button key={tag} onClick={() => handleTagClick(tag)} className="tag cursor-pointer border border-neutral-600 px-2 py-1 rounded hover:border-primary-500 hover:text-primary-500">
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Posts;
