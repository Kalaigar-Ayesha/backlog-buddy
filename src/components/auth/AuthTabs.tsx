
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Shield } from 'lucide-react';

interface AuthTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AuthTabs = ({ activeTab, setActiveTab }: AuthTabsProps) => {
  return (
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
  );
};

export default AuthTabs;
