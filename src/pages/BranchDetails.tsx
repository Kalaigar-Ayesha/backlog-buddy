import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BranchCard from '@/components/papers/BranchCard';
import SearchBar from '@/components/papers/SearchBar';
import { usePapers } from '@/hooks/usePapers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BranchDetails = () => {
  const { branchName } = useParams<{ branchName: string }>();
  const navigate = useNavigate();
  const [openSemesters, setOpenSemesters] = useState<{ [key: string]: boolean }>({});
  const [openSubjects, setOpenSubjects] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const { branchData } = usePapers();

  const decodedBranchName = branchName ? decodeURIComponent(branchName) : '';
  const branchSemesters = branchData[decodedBranchName];

  const toggleSemester = (key: string) => {
    setOpenSemesters(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleSubject = (key: string) => {
    setOpenSubjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Filter semesters and subjects based on search term
  const filteredSemesters = useMemo(() => {
    if (!searchTerm.trim() || !branchSemesters) {
      return branchSemesters;
    }

    const searchLower = searchTerm.toLowerCase();
    const filtered: typeof branchSemesters = {};

    Object.entries(branchSemesters).forEach(([semester, subjects]) => {
      const semesterMatches = semester.toLowerCase().includes(searchLower) ||
                             semester.match(/\d+/)?.[0]?.includes(searchTerm);

      const matchingSubjects = subjects.filter(subject => 
        subject.name.toLowerCase().includes(searchLower) ||
        subject.code.toLowerCase().includes(searchLower)
      );

      if (semesterMatches || matchingSubjects.length > 0) {
        filtered[semester] = semesterMatches ? subjects : matchingSubjects;
      }
    });

    return filtered;
  }, [searchTerm, branchSemesters]);

  // Auto-expand semesters when searching
  React.useEffect(() => {
    if (searchTerm.trim() && filteredSemesters) {
      const newOpenSemesters: { [key: string]: boolean } = {};
      Object.keys(filteredSemesters).forEach(semester => {
        newOpenSemesters[`${decodedBranchName}-${semester}`] = true;
      });
      setOpenSemesters(newOpenSemesters);
    }
  }, [searchTerm, filteredSemesters, decodedBranchName]);

  if (!branchSemesters) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Branch Not Found</h1>
            <p className="text-gray-600 mb-6">The requested branch could not be found.</p>
            <Button onClick={() => navigate('/')} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <Button 
              onClick={() => navigate('/')} 
              variant="outline" 
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Branches
            </Button>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-2" />
                <h1 className="text-4xl font-bold text-gray-900">
                  {decodedBranchName}
                </h1>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Browse through semesters and subjects to find the question papers you need.
              </p>
              
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Search by semester or subject name..."
              />
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {!filteredSemesters || Object.keys(filteredSemesters).length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-2">No results found</div>
                <div className="text-gray-400 text-sm">
                  Try searching with different keywords like "1st", "Mathematics", or "CS-101"
                </div>
              </div>
            ) : (
              <BranchCard
                branch={decodedBranchName}
                semesters={filteredSemesters}
                isOpen={true}
                onToggle={() => {}}
                openSemesters={openSemesters}
                onSemesterToggle={toggleSemester}
                openSubjects={openSubjects}
                onSubjectToggle={toggleSubject}
              />
            )}
          </div>
          
          {searchTerm && (
            <div className="text-center mt-8">
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                Clear search and show all semesters
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BranchDetails;