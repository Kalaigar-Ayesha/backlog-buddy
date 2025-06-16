
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl mx-4"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Last Year's Questions = 
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
              This Year's Success
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
            Without backlog, you won't be able to become a good engineer. 
            <br className="hidden md:block" />
            <span className="font-semibold text-blue-600">Just chill and clear with Buddy.</span>
          </p>
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://chat.whatsapp.com/your-community-link', '_blank')}
            >
              Join WhatsApp Community
            </Button>
            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-blue-600 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
