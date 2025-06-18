
import React from 'react';
import { Card } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const AdminGuard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <Card className="p-8 text-center">
        <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Restricted</h2>
        <p className="text-gray-600">Admin privileges required to access this page.</p>
      </Card>
    </div>
  );
};

export default AdminGuard;
