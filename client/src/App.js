import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Competitions from './pages/Competitions';
import Join from './pages/Join';
import MemberHighlights from './pages/MemberHighlights';
import Posts from './pages/Posts' ;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/join" element={<Join />} />
        <Route path="/MemberHighlights" element={<MemberHighlights />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default App;
