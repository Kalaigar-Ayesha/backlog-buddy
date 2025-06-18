
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthTabs from '@/components/auth/AuthTabs';
import StudentAuthForm from '@/components/auth/StudentAuthForm';
import AdminLoginForm from '@/components/auth/AdminLoginForm';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('student');
  const { user } = useAuth();
  const navigate = useNavigate();

  // Admin email
  const ADMIN_EMAIL = 'ayesha389922@gmail.com';

  useEffect(() => {
    if (user) {
      // Check if user is admin and redirect to dashboard
      if (user.email === ADMIN_EMAIL) {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <AuthHeader activeTab={activeTab} />
          <CardContent>
            <AuthTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {activeTab === 'student' ? (
              <StudentAuthForm loading={loading} setLoading={setLoading} />
            ) : (
              <AdminLoginForm loading={loading} setLoading={setLoading} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
