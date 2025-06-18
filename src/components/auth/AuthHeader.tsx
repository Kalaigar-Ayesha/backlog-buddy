
import React from 'react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface AuthHeaderProps {
  activeTab: string;
}

const AuthHeader = ({ activeTab }: AuthHeaderProps) => {
  return (
    <CardHeader className="space-y-1 text-center">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">PH</span>
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          PaperHub
        </h1>
      </div>
      <CardTitle className="text-2xl font-bold">
        {activeTab === 'admin' ? 'Admin Login' : 'Welcome to PaperHub'}
      </CardTitle>
      <CardDescription>
        {activeTab === 'admin' 
          ? 'Enter admin credentials to access dashboard'
          : 'Join PaperHub to access question papers'
        }
      </CardDescription>
    </CardHeader>
  );
};

export default AuthHeader;
