
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeedbackSection = () => {
  const handleFeedbackClick = () => {
    window.open('https://forms.google.com/your-feedback-form', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto">
        <Card className="max-w-2xl mx-auto text-center shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-900 mb-4">
              Help Us Improve
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700 mb-8">
              Your feedback helps us make BacklogBuddy better for all students. 
              Share your thoughts, suggestions, or report any issues.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleFeedbackClick}
            >
              Share Feedback
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeedbackSection;
