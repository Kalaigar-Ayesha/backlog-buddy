
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Download, BookOpen, GraduationCap } from 'lucide-react';
import { toast } from 'sonner';

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

interface SemesterData {
  [key: string]: Subject[];
}

// Mock data for all 8 semesters
const mockSemesterData: SemesterData = {
  "1st Semester": [
    {
      name: "Mathematics I",
      papers: {
        first_ia: [{ id: "1", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample1", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "2", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample2", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "3", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample3", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "4", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample4", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Physics",
      papers: {
        first_ia: [{ id: "5", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample5", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "6", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample6", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "7", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample7", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "8", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample8", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Chemistry",
      papers: {
        first_ia: [{ id: "9", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample9", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "10", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample10", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "11", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample11", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "12", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample12", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Engineering Graphics",
      papers: {
        first_ia: [{ id: "13", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample13", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "14", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample14", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "15", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample15", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "16", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample16", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Basic Electronics",
      papers: {
        first_ia: [{ id: "17", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample17", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "18", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample18", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "19", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample19", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "20", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample20", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "2nd Semester": [
    {
      name: "Mathematics II",
      papers: {
        first_ia: [{ id: "21", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample21", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "22", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample22", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "23", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample23", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "24", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample24", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Engineering Mechanics",
      papers: {
        first_ia: [{ id: "25", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample25", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "26", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample26", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "27", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample27", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "28", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample28", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Programming in C",
      papers: {
        first_ia: [{ id: "29", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample29", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "30", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample30", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "31", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample31", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "32", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample32", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Material Science",
      papers: {
        first_ia: [{ id: "33", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample33", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "34", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample34", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "35", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample35", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "36", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample36", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "3rd Semester": [
    {
      name: "Data Structures",
      papers: {
        first_ia: [{ id: "37", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample37", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "38", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample38", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "39", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample39", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "40", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample40", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Computer Organization",
      papers: {
        first_ia: [{ id: "41", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample41", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "42", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample42", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "43", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample43", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "44", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample44", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Discrete Mathematics",
      papers: {
        first_ia: [{ id: "45", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample45", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "46", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample46", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "47", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample47", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "48", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample48", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "4th Semester": [
    {
      name: "Algorithms",
      papers: {
        first_ia: [{ id: "49", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample49", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "50", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample50", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "51", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample51", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "52", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample52", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Database Systems",
      papers: {
        first_ia: [{ id: "53", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample53", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "54", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample54", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "55", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample55", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "56", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample56", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "5th Semester": [
    {
      name: "Software Engineering",
      papers: {
        first_ia: [{ id: "57", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample57", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "58", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample58", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "59", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample59", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "60", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample60", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Computer Networks",
      papers: {
        first_ia: [{ id: "61", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample61", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "62", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample62", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "63", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample63", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "64", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample64", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "6th Semester": [
    {
      name: "Web Technologies",
      papers: {
        first_ia: [{ id: "65", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample65", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "66", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample66", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "67", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample67", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "68", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample68", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Mobile Computing",
      papers: {
        first_ia: [{ id: "69", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample69", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "70", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample70", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "71", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample71", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "72", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample72", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "7th Semester": [
    {
      name: "Machine Learning",
      papers: {
        first_ia: [{ id: "73", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample73", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "74", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample74", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "75", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample75", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "76", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample76", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Cloud Computing",
      papers: {
        first_ia: [{ id: "77", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample77", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "78", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample78", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "79", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample79", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "80", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample80", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "8th Semester": [
    {
      name: "Project Work",
      papers: {
        first_ia: [{ id: "81", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample81", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "82", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample82", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "83", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample83", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "84", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample84", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Industry Internship",
      papers: {
        first_ia: [{ id: "85", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample85", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "86", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample86", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "87", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample87", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "88", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample88", paper_type: "final", year: 2023 }]
      }
    }
  ]
};

const SemesterSection = () => {
  const [openSemesters, setOpenSemesters] = useState<{ [key: string]: boolean }>({});
  const [openSubjects, setOpenSubjects] = useState<{ [key: string]: boolean }>({});

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
    toast.success(`Opening ${paperName}`);
  };

  return (
    <section className="py-16 px-4 animate-fadeIn">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-2" />
            <h2 className="text-4xl font-bold text-gray-900">
              Download Papers by Semester
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access question papers from all 8 semesters. Click on any semester to explore subjects and download papers.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-6">
          {Object.entries(mockSemesterData).map(([semester, subjects]) => (
            <Card 
              key={semester} 
              className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-blue-500"
            >
              <Collapsible
                open={openSemesters[semester]}
                onOpenChange={() => toggleSemester(semester)}
              >
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
                          openSemesters[semester] ? 'rotate-180' : ''
                        }`} 
                      />
                    </CardTitle>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent className="transition-all duration-300">
                  <CardContent className="space-y-6 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {subjects.map((subject, index) => {
                        const subjectKey = `${semester}-${index}`;
                        return (
                          <Card key={subjectKey} className="border-l-4 border-l-indigo-400 hover:shadow-md transition-shadow duration-200">
                            <Collapsible
                              open={openSubjects[subjectKey]}
                              onOpenChange={() => toggleSubject(subjectKey)}
                            >
                              <CollapsibleTrigger asChild>
                                <CardHeader className="cursor-pointer hover:bg-indigo-50 transition-colors duration-200 pb-3">
                                  <CardTitle className="flex items-center justify-between text-lg">
                                    <span className="font-semibold text-gray-800">{subject.name}</span>
                                    <ChevronDown 
                                      className={`w-5 h-5 transition-transform duration-200 text-indigo-600 ${
                                        openSubjects[subjectKey] ? 'rotate-180' : ''
                                      }`} 
                                    />
                                  </CardTitle>
                                </CardHeader>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <CardContent className="pt-0">
                                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                                    {[
                                      { title: 'First IA', papers: subject.papers.first_ia, color: 'bg-green-50 border-green-200 hover:bg-green-100' },
                                      { title: 'Second IA', papers: subject.papers.second_ia, color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100' },
                                      { title: 'Third IA', papers: subject.papers.third_ia, color: 'bg-orange-50 border-orange-200 hover:bg-orange-100' },
                                      { title: 'Final', papers: subject.papers.final, color: 'bg-red-50 border-red-200 hover:bg-red-100' },
                                    ].map((category) => (
                                      <div key={category.title} className={`space-y-2 p-3 rounded-lg border ${category.color} transition-colors duration-200`}>
                                        <h4 className="font-semibold text-gray-800 text-center text-sm">
                                          {category.title}
                                        </h4>
                                        {category.papers.length > 0 ? (
                                          category.papers.map((paper, paperIndex) => (
                                            <Button
                                              key={paperIndex}
                                              variant="outline"
                                              size="sm"
                                              className="w-full text-xs hover:bg-white hover:border-blue-300 transition-all duration-200 transform hover:scale-105"
                                              onClick={() => handleDownload(paper.download_url, paper.paper_name)}
                                            >
                                              <Download className="w-3 h-3 mr-1" />
                                              {paper.paper_name}
                                            </Button>
                                          ))
                                        ) : (
                                          <div className="text-xs text-gray-500 text-center py-2">
                                            No papers available
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </CardContent>
                              </CollapsibleContent>
                            </Collapsible>
                          </Card>
                        );
                      })}
                    </div>
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
