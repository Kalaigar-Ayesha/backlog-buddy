
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import AddPaperForm from './AddPaperForm';
import { BranchData } from '@/types/papers';

interface PaperManagementProps {
  branchData: BranchData;
  onAddPaper: (branch: string, semester: string, subjectCode: string, paperType: string, paper: any) => void;
}

const PaperManagement = ({ branchData, onAddPaper }: PaperManagementProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Question Papers Management</CardTitle>
          <AddPaperForm branchData={branchData} onAddPaper={onAddPaper} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8 text-gray-500">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>Papers added through this dashboard will appear instantly on the main website.</p>
          <p className="text-sm mt-2">Use the "Add Paper" button above to start adding question papers by branch and semester.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaperManagement;
