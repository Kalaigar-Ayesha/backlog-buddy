
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 animate-fadeIn">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
            <span className="text-white font-bold text-sm">BB</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            BacklogBuddy
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          {user && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <User className="w-4 h-4" />
              <span>Welcome!</span>
            </div>
          )}
          <Button 
            variant="outline" 
            className="hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            onClick={handleAuthAction}
          >
            {user ? (
              <>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </>
            ) : (
              'Login'
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
