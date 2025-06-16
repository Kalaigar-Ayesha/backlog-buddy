
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Download } from 'lucide-react';

interface Paper {
  name: string;
  downloadUrl: string;
}

interface Subject {
  name: string;
  papers: {
    firstIA: Paper[];
    secondIA: Paper[];
    thirdIA: Paper[];
    final: Paper[];
  };
}

const SemesterSection = () => {
  const [openSemesters, setOpenSemesters] = useState<{ [key: string]: boolean }>({});
  const [openSubjects, setOpenSubjects] = useState<{ [key: string]: boolean }>({});

  const semesterData = {
    '1st Semester': [
      {
        name: 'Mathematics I',
        papers: {
          firstIA: [{ name: 'First IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample1' }],
          secondIA: [{ name: 'Second IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample2' }],
          thirdIA: [{ name: 'Third IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample3' }],
          final: [{ name: 'Final Exam 2023', downloadUrl: 'https://drive.google.com/file/d/sample4' }],
        },
      },
      {
        name: 'Physics',
        papers: {
          firstIA: [{ name: 'First IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample5' }],
          secondIA: [{ name: 'Second IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample6' }],
          thirdIA: [{ name: 'Third IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample7' }],
          final: [{ name: 'Final Exam 2023', downloadUrl: 'https://drive.google.com/file/d/sample8' }],
        },
      },
    ],
    '2nd Semester': [
      {
        name: 'Mathematics II',
        papers: {
          firstIA: [{ name: 'First IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample9' }],
          secondIA: [{ name: 'Second IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample10' }],
          thirdIA: [{ name: 'Third IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample11' }],
          final: [{ name: 'Final Exam 2023', downloadUrl: 'https://drive.google.com/file/d/sample12' }],
        },
      },
      {
        name: 'Chemistry',
        papers: {
          firstIA: [{ name: 'First IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample13' }],
          secondIA: [{ name: 'Second IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample14' }],
          thirdIA: [{ name: 'Third IA 2023', downloadUrl: 'https://drive.google.com/file/d/sample15' }],
          final: [{ name: 'Final Exam 2023', downloadUrl: 'https://drive.google.com/file/d/sample16' }],
        },
      },
    ],
  };

  const toggleSemester = (semester: string) => {
    setOpenSemesters(prev => ({
      ...prev,
      [semester]: !prev[semester]
    }));
  };

  const toggleSubject = (key: string) => {
    setOpenSubjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleDownload = (url: string, paperName: string) => {
    window.open(url, '_blank');
    console.log(`Downloading: ${paperName} from ${url}`);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Download Papers by Semester
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {Object.entries(semesterData).map(([semester, subjects]) => (
            <Card key={semester} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Collapsible
                open={openSemesters[semester]}
                onOpenChange={() => toggleSemester(semester)}
              >
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
                    <CardTitle className="flex items-center justify-between text-2xl text-blue-600">
                      {semester}
                      <ChevronDown 
                        className={`w-6 h-6 transition-transform duration-200 ${
                          openSemesters[semester] ? 'rotate-180' : ''
                        }`} 
                      />
                    </CardTitle>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="space-y-6">
                    {subjects.map((subject, index) => {
                      const subjectKey = `${semester}-${index}`;
                      return (
                        <Card key={subjectKey} className="border-l-4 border-l-blue-500">
                          <Collapsible
                            open={openSubjects[subjectKey]}
                            onOpenChange={() => toggleSubject(subjectKey)}
                          >
                            <CollapsibleTrigger asChild>
                              <CardHeader className="cursor-pointer hover:bg-blue-50 transition-colors">
                                <CardTitle className="flex items-center justify-between text-lg">
                                  {subject.name}
                                  <ChevronDown 
                                    className={`w-5 h-5 transition-transform duration-200 ${
                                      openSubjects[subjectKey] ? 'rotate-180' : ''
                                    }`} 
                                  />
                                </CardTitle>
                              </CardHeader>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                  {[
                                    { title: 'First IA', papers: subject.papers.firstIA },
                                    { title: 'Second IA', papers: subject.papers.secondIA },
                                    { title: 'Third IA', papers: subject.papers.thirdIA },
                                    { title: 'Final', papers: subject.papers.final },
                                  ].map((category) => (
                                    <div key={category.title} className="space-y-3">
                                      <h4 className="font-semibold text-gray-800 text-center">
                                        {category.title}
                                      </h4>
                                      {category.papers.map((paper, paperIndex) => (
                                        <Button
                                          key={paperIndex}
                                          variant="outline"
                                          size="sm"
                                          className="w-full hover:bg-blue-50 hover:border-blue-300 transition-colors"
                                          onClick={() => handleDownload(paper.downloadUrl, paper.name)}
                                        >
                                          <Download className="w-4 h-4 mr-2" />
                                          {paper.name}
                                        </Button>
                                      ))}
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </CollapsibleContent>
                          </Collapsible>
                        </Card>
                      );
                    })}
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemesterSection;
