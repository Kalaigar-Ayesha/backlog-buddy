
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Upload, Shield } from 'lucide-react';
import { BranchData } from '@/types/papers';

interface StatsCardsProps {
  branchData: BranchData;
}

const StatsCards = ({ branchData }: StatsCardsProps) => {
  // Get all subjects with their branch and semester info
  const allSubjects = Object.entries(branchData).flatMap(([branch, semesters]) =>
    Object.entries(semesters).flatMap(([semester, subjects]) =>
      subjects.map(subject => ({ ...subject, branch, semester }))
    )
  );

  // Get papers count
  const totalPapers = Object.values(branchData).reduce((total, semesters) => {
    return total + Object.values(semesters).reduce((semesterTotal, subjects) => {
      return semesterTotal + subjects.reduce((subjectTotal, subject) => {
        return subjectTotal + 
          subject.papers.first_ia.length + 
          subject.papers.second_ia.length + 
          subject.papers.third_ia.length + 
          subject.papers.final.length;
      }, 0);
    }, 0);
  }, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Total Papers</p>
              <p className="text-2xl font-bold">{totalPapers}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-200" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Total Subjects</p>
              <p className="text-2xl font-bold">{allSubjects.length}</p>
            </div>
            <Upload className="w-8 h-8 text-green-200" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100">Branches</p>
              <p className="text-2xl font-bold">{Object.keys(branchData).length}</p>
            </div>
            <Shield className="w-8 h-8 text-orange-200" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Total Semesters</p>
              <p className="text-2xl font-bold">48</p>
            </div>
            <FileText className="w-8 h-8 text-purple-200" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCards;
