
import React, { useState, useMemo } from 'react';
import { GraduationCap } from 'lucide-react';
import BranchCard from './papers/BranchCard';
import SearchBar from './papers/SearchBar';
import { usePapers } from '@/hooks/usePapers';

const BranchSection = () => {
  const [openBranches, setOpenBranches] = useState<{ [key: string]: boolean }>({});
  const [openSemesters, setOpenSemesters] = useState<{ [key: string]: boolean }>({});
  const [openSubjects, setOpenSubjects] = useState<{ [key: string]: boolean }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const { branchData } = usePapers();

  const toggleBranch = (branch: string) => {
    setOpenBranches(prev => ({
      ...prev,
      [branch]: !prev[branch]
    }));
  };

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

  // Filter branches and subjects based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return branchData;
    }

    const searchLower = searchTerm.toLowerCase();
    const filtered: typeof branchData = {};

    Object.entries(branchData).forEach(([branch, semesters]) => {
      // Check if branch matches search term
      const branchMatches = branch.toLowerCase().includes(searchLower);

      // Filter semesters and subjects
      const filteredSemesters: typeof semesters = {};
      Object.entries(semesters).forEach(([semester, subjects]) => {
        const semesterMatches = semester.toLowerCase().includes(searchLower) ||
                               semester.match(/\d+/)?.[0]?.includes(searchTerm);

        const matchingSubjects = subjects.filter(subject => 
          subject.name.toLowerCase().includes(searchLower) ||
          subject.code.toLowerCase().includes(searchLower)
        );

        if (semesterMatches || matchingSubjects.length > 0) {
          filteredSemesters[semester] = semesterMatches ? subjects : matchingSubjects;
        }
      });

      if (branchMatches || Object.keys(filteredSemesters).length > 0) {
        filtered[branch] = branchMatches ? semesters : filteredSemesters;
      }
    });

    return filtered;
  }, [searchTerm, branchData]);

  // Auto-expand branches when searching
  React.useEffect(() => {
    if (searchTerm.trim()) {
      const newOpenBranches: { [key: string]: boolean } = {};
      const newOpenSemesters: { [key: string]: boolean } = {};
      Object.entries(filteredData).forEach(([branch, semesters]) => {
        newOpenBranches[branch] = true;
        Object.keys(semesters).forEach(semester => {
          newOpenSemesters[`${branch}-${semester}`] = true;
        });
      });
      setOpenBranches(newOpenBranches);
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
              Download Papers by Branch & Semester
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Access question papers organized by branches and semesters. Click on any branch to explore semesters and subjects.
          </p>
          
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search by branch, semester, or subject name..."
          />
        </div>
        
        <div className="max-w-6xl mx-auto space-y-6">
          {Object.keys(filteredData).length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-2">No results found</div>
              <div className="text-gray-400 text-sm">
                Try searching with different keywords like "CSE", "1st", "Mathematics", or "CS-101"
              </div>
            </div>
          ) : (
            Object.entries(filteredData).map(([branch, semesters]) => (
              <BranchCard
                key={branch}
                branch={branch}
                semesters={semesters}
                isOpen={openBranches[branch] || false}
                onToggle={() => toggleBranch(branch)}
                openSemesters={openSemesters}
                onSemesterToggle={toggleSemester}
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
              Clear search and show all branches
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BranchSection;
