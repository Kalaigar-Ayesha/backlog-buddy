
import React, { useState, useMemo } from 'react';
import { GraduationCap } from 'lucide-react';
import SemesterCard from './papers/SemesterCard';
import SearchBar from './papers/SearchBar';
import { usePapers } from '@/hooks/usePapers';

const SemesterSection = () => {
  const [openSemesters, setOpenSemesters] = useState<{ [key: string]: boolean }>({});
  const [openSubjects, setOpenSubjects] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const { semesterData } = usePapers();

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

  // Filter semesters and subjects based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return semesterData;
    }

    const searchLower = searchTerm.toLowerCase();
    const filtered: typeof semesterData = {};

    Object.entries(semesterData).forEach(([semester, subjects]) => {
      // Check if semester matches search term
      const semesterMatches = semester.toLowerCase().includes(searchLower) ||
                             semester.match(/\d+/)?.[0]?.includes(searchTerm);

      // Filter subjects that match search term
      const matchingSubjects = subjects.filter(subject => 
        subject.name.toLowerCase().includes(searchLower) ||
        subject.code.toLowerCase().includes(searchLower)
      );

      // Include semester if either semester name matches or has matching subjects
      if (semesterMatches || matchingSubjects.length > 0) {
        filtered[semester] = semesterMatches ? subjects : matchingSubjects;
      }
    });

    return filtered;
  }, [searchTerm, semesterData]);

  // Auto-expand semesters when searching
  React.useEffect(() => {
    if (searchTerm.trim()) {
      const newOpenSemesters: { [key: string]: boolean } = {};
      Object.keys(filteredData).forEach(semester => {
        newOpenSemesters[semester] = true;
      });
      setOpenSemesters(newOpenSemesters);
    }
  }, [searchTerm, filteredData]);

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
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Access question papers from all 8 semesters. Click on any semester to explore subjects and download papers.
          </p>
          
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search by semester number or subject name..."
          />
        </div>
        
        <div className="max-w-6xl mx-auto space-y-6">
          {Object.keys(filteredData).length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-2">No results found</div>
              <div className="text-gray-400 text-sm">
                Try searching with different keywords like "1st", "Mathematics", or "CS-101"
              </div>
            </div>
          ) : (
            Object.entries(filteredData).map(([semester, subjects]) => (
              <SemesterCard
                key={semester}
                semester={semester}
                subjects={subjects}
                isOpen={openSemesters[semester] || false}
                onToggle={() => toggleSemester(semester)}
                openSubjects={openSubjects}
                onSubjectToggle={toggleSubject}
              />
            ))
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
  );
};

export default SemesterSection;
