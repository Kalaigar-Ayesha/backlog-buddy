
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Shield } from 'lucide-react';

interface AdminLoginFormProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const AdminLoginForm = ({ loading, setLoading }: AdminLoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  // Admin credentials
  const ADMIN_EMAIL = 'ayesha389922@gmail.com';
  const ADMIN_PASSWORD = 'Ayesha@0101';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
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
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Admin email"
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
          {loading ? 'Please wait...' : 'Sign In as Admin'}
        </Button>
      </form>
      
      <div className="mt-4 p-3 bg-orange-50 rounded-lg">
        <p className="text-xs text-orange-700">
          <Shield className="w-4 h-4 inline mr-1" />
          Admin access is restricted to authorized personnel only.
        </p>
      </div>
    </>
  );
};

export default AdminLoginForm;
