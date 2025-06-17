
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

const ContactSection = () => {
  const handleVikaslLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/vikasguttedar/', '_blank');
  };

  const handleAyeshaLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/kalaigarayesha/', '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <Card className="max-w-2xl mx-auto text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-900 mb-4">
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-8">
              Have questions or want to collaborate? Connect with the creators of PaperHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleVikaslLinkedInClick}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect with Vikas
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleAyeshaLinkedInClick}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect with Ayesha
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
