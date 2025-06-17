
import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import SemesterCard from './papers/SemesterCard';
import { mockSemesterData } from './papers/mockData';

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
            <SemesterCard
              key={semester}
              semester={semester}
              subjects={subjects}
              isOpen={openSemesters[semester] || false}
              onToggle={() => toggleSemester(semester)}
              openSubjects={openSubjects}
              onSubjectToggle={toggleSubject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SemesterSection;
