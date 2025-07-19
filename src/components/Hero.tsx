
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSemesters = () => {
    const semesterSection = document.querySelector('[data-section="semesters"]');
    if (semesterSection) {
      semesterSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to papers if section not found
      window.location.hash = '#branches';
    }
  };

  return (
    <section className="py-20 px-4 text-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto animate-fadeIn">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <GraduationCap className="w-8 h-8 text-blue-600 animate-bounce" />
              <span className="text-lg font-semibold text-gray-700">Study Smart, Not Hard</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Last Year's Questions
            </span>
            <br />
            <span className="text-gray-800">= This Year's Success</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access previous year question papers for Kishkinda University students. 
            <br />
            <span className="font-semibold text-blue-600">Study smart, succeed with confidence.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={scrollToSemesters}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Question Papers
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">8 Semesters</h3>
              <p className="text-gray-600">Complete question paper collection for all engineering semesters</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <GraduationCap className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">All Subjects</h3>
              <p className="text-gray-600">IA tests and final exam papers for every subject</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Free Access</h3>
              <p className="text-gray-600">Completely free for all students - no hidden charges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
