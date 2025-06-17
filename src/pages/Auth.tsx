
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Shield, User } from 'lucide-react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('student');
  const { signUp, signIn, user } = useAuth();
  const navigate = useNavigate();

  // Admin credentials
  const ADMIN_EMAIL = 'ayesha389922@gmail.com';
  const ADMIN_PASSWORD = 'Ayesha@0101';

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (activeTab === 'admin') {
        // Admin login validation
        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
          toast.error('Invalid admin credentials');
          setLoading(false);
          return;
        }
        
        // Use the admin credentials to sign in
        const { error } = await signIn(ADMIN_EMAIL, ADMIN_PASSWORD);
        if (error) {
          toast.error('Admin login failed');
        } else {
          toast.success('Admin signed in successfully!');
          navigate('/dashboard');
        }
      } else {
        // Student login/signup
        if (isSignUp) {
          const { error } = await signUp(email, password, fullName);
          if (error) {
            toast.error(error.message);
          } else {
            toast.success('Account created successfully! Please check your email for verification.');
          }
        } else {
          const { error } = await signIn(email, password);
          if (error) {
            toast.error(error.message);
          } else {
            toast.success('Signed in successfully!');
            navigate('/');
          }
        }
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Reset form when switching tabs
  useEffect(() => {
    setEmail('');
    setPassword('');
    setFullName('');
    setIsSignUp(false);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
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
              {activeTab === 'admin' ? 'Admin Login' : (isSignUp ? 'Create Account' : 'Welcome Back')}
            </CardTitle>
            <CardDescription>
              {activeTab === 'admin' 
                ? 'Enter admin credentials to access dashboard'
                : (isSignUp 
                  ? 'Join PaperHub to access question papers' 
                  : 'Sign in to your account to continue'
                )
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Student</span>
                </TabsTrigger>
                <TabsTrigger value="admin" className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Admin</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && activeTab === 'student' && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={activeTab === 'admin' ? "Admin email" : "Enter your email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                disabled={loading}
              >
                {loading ? 'Please wait...' : (
                  activeTab === 'admin' ? 'Sign In as Admin' : 
                  (isSignUp ? 'Create Account' : 'Sign In as Student')
                )}
              </Button>
            </form>
            
            {activeTab === 'student' && (
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  {isSignUp 
                    ? 'Already have an account? Sign in' 
                    : "Don't have an account? Sign up"
                  }
                </button>
              </div>
            )}
            
            {activeTab === 'admin' && (
              <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                <p className="text-xs text-orange-700">
                  <Shield className="w-4 h-4 inline mr-1" />
                  Admin access is restricted to authorized personnel only.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
