
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, GraduationCap } from 'lucide-react';
import SemesterCard from './SemesterCard';

interface Paper {
  id: string;
  paper_name: string;
  download_url: string;
  paper_type: string;
  year: number;
}

interface Subject {
  name: string;
  code: string;
  papers: {
    first_ia: Paper[];
    second_ia: Paper[];
    third_ia: Paper[];
    final: Paper[];
  };
}

interface BranchCardProps {
  branch: string;
  semesters: { [key: string]: Subject[] };
  isOpen: boolean;
  onToggle: () => void;
  openSemesters: { [key: string]: boolean };
  onSemesterToggle: (key: string) => void;
  openSubjects: { [key: string]: boolean };
  onSubjectToggle: (key: string) => void;
}

const BranchCard = ({ 
  branch, 
  semesters, 
  isOpen, 
  onToggle, 
  openSemesters, 
  onSemesterToggle, 
  openSubjects, 
  onSubjectToggle 
}: BranchCardProps) => {
  const totalSemesters = Object.keys(semesters).length;
  
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-purple-500">
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 transition-all duration-200 rounded-t-lg">
            <CardTitle className="flex items-center justify-between text-2xl text-purple-600">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6" />
                <span>{branch}</span>
                <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  {totalSemesters} semesters
                </span>
              </div>
              <ChevronDown 
                className={`w-6 h-6 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`} 
              />
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent className="transition-all duration-300">
          <CardContent className="space-y-4 pt-0">
            {Object.entries(semesters).map(([semester, subjects]) => {
              const semesterKey = `${branch}-${semester}`;
              return (
                <SemesterCard
                  key={semesterKey}
                  semester={semester}
                  subjects={subjects}
                  isOpen={openSemesters[semesterKey] || false}
                  onToggle={() => onSemesterToggle(semesterKey)}
                  openSubjects={openSubjects}
                  onSubjectToggle={onSubjectToggle}
                />
              );
            })}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default BranchCard;
