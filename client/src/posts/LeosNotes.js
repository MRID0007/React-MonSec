import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const LeosNotes = () => {
  return (
    <div className="bg-neutral-900 text-neutral-50 min-h-screen">
      <Header />
      <main className="main-content p-6">
        <section className="resource">
          <h1 className="text-4xl font-bold mb-4">Leo's Notes</h1>
          {/* Content goes here */}
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LeosNotes;
