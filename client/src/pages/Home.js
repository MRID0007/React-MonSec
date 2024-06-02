import React from 'react';
import Hero from '../components/Hero';
import Video from '../components/Video';
import RecentPublications from '../components/RecentPublications';
import Sponsors from '../components/Sponsors';

const Home = () => (
  <div>
    <Hero />
    <Video />
    <RecentPublications />
    <Sponsors />
  </div>
);

export default Home;
