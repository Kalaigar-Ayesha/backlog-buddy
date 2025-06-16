
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Download, BookOpen, GraduationCap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
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

const SemesterSection = () => {
  const [openSemesters, setOpenSemesters] = useState<{ [key: string]: boolean }>({});
  const [openSubjects, setOpenSubjects] = useState<{ [key: string]: boolean }>({});
  const [semesterData, setSemesterData] = useState<SemesterData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const { data: papers, error } = await supabase
        .from('papers')
        .select('*')
        .order('semester', { ascending: true })
        .order('subject_name', { ascending: true });

      if (error) throw error;

      // Group papers by semester and subject
      const grouped: SemesterData = {};
      
      papers?.forEach((paper) => {
        const semesterKey = `${paper.semester}${getSemesterSuffix(paper.semester)} Semester`;
        
        if (!grouped[semesterKey]) {
          grouped[semesterKey] = [];
        }

        // Find or create subject
        let subject = grouped[semesterKey].find(s => s.name === paper.subject_name);
        if (!subject) {
          subject = {
            name: paper.subject_name,
            papers: {
              first_ia: [],
              second_ia: [],
              third_ia: [],
              final: []
            }
          };
          grouped[semesterKey].push(subject);
        }

        // Add paper to appropriate category
        const paperObj = {
          id: paper.id,
          paper_name: paper.paper_name,
          download_url: paper.download_url,
          paper_type: paper.paper_type,
          year: paper.year
        };

        if (paper.paper_type === 'first_ia') {
          subject.papers.first_ia.push(paperObj);
        } else if (paper.paper_type === 'second_ia') {
          subject.papers.second_ia.push(paperObj);
        } else if (paper.paper_type === 'third_ia') {
          subject.papers.third_ia.push(paperObj);
        } else if (paper.paper_type === 'final') {
          subject.papers.final.push(paperObj);
        }
      });

      setSemesterData(grouped);
    } catch (error) {
      console.error('Error fetching papers:', error);
      toast.error('Failed to load papers');
    } finally {
      setLoading(false);
    }
  };

  const getSemesterSuffix = (semester: number) => {
    if (semester === 1) return 'st';
    if (semester === 2) return 'nd';
    if (semester === 3) return 'rd';
    return 'th';
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
    toast.success(`Opening ${paperName}`);
  };

  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading papers...</span>
          </div>
        </div>
      </section>
    );
  }

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
          {Object.entries(semesterData).map(([semester, subjects]) => (
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
