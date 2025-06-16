
import React from 'react';
import Hero from '../components/Hero';
import SemesterSection from '../components/SemesterSection';
import FeedbackSection from '../components/FeedbackSection';
import ContactSection from '../components/ContactSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <Hero />
      <SemesterSection />
      <FeedbackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
