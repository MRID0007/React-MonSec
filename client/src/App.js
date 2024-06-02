import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Competitions from './pages/Competitions';
import Join from './pages/Join';
import MemberHighlights from './pages/MemberHighlights';
import Posts from './pages/Posts';
import SqlInjectionPost from './posts/SqlInjectionPost';
import EmailSecurityPost from './posts/EmailSecurityPost';
import Resources from './pages/Resources';
import LeosNotes from './posts/LeosNotes';
import EliasNotes from './posts/EliasNotes';
import KaliLinuxSetup from './posts/KaliLinuxSetup';
import WorkshopRecordings from './posts/WorkshopRecordings';
import Sponsorships from './pages/Sponsorships';
import Teams from './pages/Teams';

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
        <Route path="/posts/sql-injection" element={<SqlInjectionPost />} />
        <Route path="/posts/email-security" element={<EmailSecurityPost />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/posts/leos-notes" element={<LeosNotes />} />
        <Route path="/posts/elias-notes" element={<EliasNotes />} />
        <Route path="/posts/kali-linux-setup" element={<KaliLinuxSetup />} />
        <Route path="/posts/workshop-recordings" element={<WorkshopRecordings />} />
        <Route path="/sponsorships" element={<Sponsorships />} />
        <Route path="/Teams" element={<Teams />} />
      </Routes>
    </Router>
  );
};

export default App;
