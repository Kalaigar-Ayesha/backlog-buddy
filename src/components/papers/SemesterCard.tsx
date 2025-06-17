
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, BookOpen } from 'lucide-react';
import SubjectCard from './SubjectCard';

interface Paper {
  id: string;
  paper_name: string;
  download_url: string;
  paper_type: string;
  year: number;
}

interface Subject {
  name: string;
  papers: {
    first_ia: Paper[];
    second_ia: Paper[];
    third_ia: Paper[];
    final: Paper[];
  };
}

interface SemesterCardProps {
  semester: string;
  subjects: Subject[];
  isOpen: boolean;
  onToggle: () => void;
  openSubjects: { [key: string]: boolean };
  onSubjectToggle: (key: string) => void;
}

const SemesterCard = ({ 
  semester, 
  subjects, 
  isOpen, 
  onToggle, 
  openSubjects, 
  onSubjectToggle 
}: SemesterCardProps) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-blue-500">
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 rounded-t-lg">
            <CardTitle className="flex items-center justify-between text-2xl text-blue-600">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-6 h-6" />
                <span>{semester}</span>
                <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {subjects.length} subjects
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
          <CardContent className="space-y-6 pt-0">
            <div className="grid grid-cols-1 gap-6">
              {subjects.map((subject, index) => {
                const subjectKey = `${semester}-${index}`;
                return (
                  <SubjectCard
                    key={subjectKey}
                    subject={subject}
                    subjectKey={subjectKey}
                    isOpen={openSubjects[subjectKey] || false}
                    onToggle={() => onSubjectToggle(subjectKey)}
                  />
                );
              })}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default SemesterCard;
