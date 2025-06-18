
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { usePapers } from '@/hooks/usePapers';
import { Shield } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import StatsCards from '@/components/dashboard/StatsCards';
import PaperManagement from '@/components/dashboard/PaperManagement';
import AdminGuard from '@/components/dashboard/AdminGuard';

const Dashboard = () => {
  const { user } = useAuth();
  const { branchData, addPaper } = usePapers();
  const navigate = useNavigate();

  // Check if user is admin
  const isAdmin = user?.email === 'ayesha389922@gmail.com';

  // Redirect non-admin users
  React.useEffect(() => {
    if (user && !isAdmin) {
      navigate('/');
      toast.error('Access denied. Admin privileges required.');
    }
  }, [user, isAdmin, navigate]);

  if (!user || !isAdmin) {
    return <AdminGuard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="w-8 h-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <p className="text-gray-600">Manage question papers for all branches and semesters - changes reflect instantly on the website</p>
        </div>

        <StatsCards branchData={branchData} />
        <PaperManagement branchData={branchData} onAddPaper={addPaper} />
      </div>
    </div>
  );
};

export default Dashboard;
