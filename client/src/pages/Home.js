import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Video from '../components/Video';
import RecentPublications from '../components/RecentPublications';
import CurrentEvents from '../components/CurrentEvents';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';  // Import the new component

const Home = () => {
  return (
    <div className="bg-neutral-900 text-neutral-50">
      <Header />
      <Hero />
      <Video />
      <CurrentEvents />
      <RecentPublications />
      <Sponsors />
      <Footer />
      <ScrollToTop />  // Add the new component
    </div>
  );
};

export default Home;
