
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import PaperCard from './PaperCard';

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

interface SubjectCardProps {
  subject: Subject;
  subjectKey: string;
  isOpen: boolean;
  onToggle: () => void;
}

const SubjectCard = ({ subject, subjectKey, isOpen, onToggle }: SubjectCardProps) => {
  const paperCategories = [
    { title: 'First IA', papers: subject.papers.first_ia, color: 'bg-green-50 border-green-200' },
    { title: 'Second IA', papers: subject.papers.second_ia, color: 'bg-yellow-50 border-yellow-200' },
    { title: 'Third IA', papers: subject.papers.third_ia, color: 'bg-orange-50 border-orange-200' },
    { title: 'Final', papers: subject.papers.final, color: 'bg-red-50 border-red-200' },
  ];

  return (
    <Card className="border-l-4 border-l-indigo-400 hover:shadow-md transition-shadow duration-200">
      <Collapsible open={isOpen} onOpenChange={onToggle}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-indigo-50 transition-colors duration-200 pb-3">
            <CardTitle className="flex items-center justify-between text-lg">
              <span className="font-semibold text-gray-800">{subject.name}</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 text-indigo-600 ${
                  isOpen ? 'rotate-180' : ''
                }`} 
              />
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="space-y-4">
              {paperCategories.map((category) => (
                <PaperCard
                  key={category.title}
                  title={category.title}
                  papers={category.papers}
                  color={category.color}
                />
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default SubjectCard;
