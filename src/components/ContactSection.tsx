
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const ContactSection = () => {
  const handleFeedbackClick = () => {
    window.open('https://forms.gle/tXUAwbp62oQYu6QX7', '_blank');
  };

  const handleUploadPapersClick = () => {
    window.open('https://forms.gle/F6x2ybHA5bodhebL7', '_blank');
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-900 mb-4">
              Help Us Grow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-8">
              Share your feedback or upload question papers to help fellow students at Kishkinda University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleFeedbackClick}
              >
                Share Feedback
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleUploadPapersClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Upload Papers
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
