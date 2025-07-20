
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">BB</span>
          </div>
          <h3 className="text-2xl font-bold">BacklogBuddy</h3>
        </div>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Helping students succeed by providing easy access to past question papers. 
          Study smart, not hard.
        </p>
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500">
            © 2025 BacklogBuddy. Made with ❤️ for Kishkinda University students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
