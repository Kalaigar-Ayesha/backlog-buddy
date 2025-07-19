
import React from 'react';
import Hero from '../components/Hero';
import BranchGrid from '../components/BranchGrid';
import FeedbackSection from '../components/FeedbackSection';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <div id="branches" data-section="branches">
        <BranchGrid />
      </div>
      <div id="feedback">
        <FeedbackSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
