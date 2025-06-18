
import { useState } from 'react';
import { BranchData, Paper } from '@/types/papers';
import { initialBranchData } from '@/data/branchData';

export const usePapers = () => {
  const [branchData, setBranchData] = useState<BranchData>(initialBranchData);

  const addPaper = (branch: string, semester: string, subjectCode: string, paperType: string, paper: Omit<Paper, 'id'>) => {
    const newPaper: Paper = {
      ...paper,
      id: Date.now().toString() // Simple ID generation
    };

    setBranchData(prevData => {
      const updatedData = { ...prevData };
      const branchSemesters = updatedData[branch];
      
      if (branchSemesters && branchSemesters[semester]) {
        const semesterSubjects = branchSemesters[semester];
        const subjectIndex = semesterSubjects.findIndex(subject => subject.code === subjectCode);
        
        if (subjectIndex !== -1) {
          const updatedSemesters = { ...branchSemesters };
          const updatedSubjects = [...semesterSubjects];
          const subject = { ...updatedSubjects[subjectIndex] };
          subject.papers = { ...subject.papers };
          subject.papers[paperType as keyof typeof subject.papers] = [
            ...subject.papers[paperType as keyof typeof subject.papers],
            newPaper
          ];
          updatedSubjects[subjectIndex] = subject;
          updatedSemesters[semester] = updatedSubjects;
          updatedData[branch] = updatedSemesters;
        }
      }
      
      return updatedData;
    });

    return newPaper;
  };

  // For backward compatibility with existing components
  const semesterData = branchData["Computer Science & Engineering (CSE)"] || {};

  return {
    branchData,
    semesterData,
    addPaper
  };
};
