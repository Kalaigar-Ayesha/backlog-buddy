
import { useState, useEffect } from 'react';
import { BranchData, Paper } from '@/types/papers';
import { initialBranchData } from '@/data/branchData';

const PAPERS_STORAGE_KEY = 'paperhub_branch_data';

// Function to load data from localStorage
const loadBranchData = (): BranchData => {
  try {
    const stored = localStorage.getItem(PAPERS_STORAGE_KEY);
    if (stored) {
      const parsedData = JSON.parse(stored);
      // Merge with initial data to ensure all branches/semesters exist
      return { ...initialBranchData, ...parsedData };
    }
  } catch (error) {
    console.error('Error loading papers from localStorage:', error);
  }
  return initialBranchData;
};

// Function to save data to localStorage
const saveBranchData = (data: BranchData) => {
  try {
    localStorage.setItem(PAPERS_STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving papers to localStorage:', error);
  }
};

export const usePapers = () => {
  const [branchData, setBranchData] = useState<BranchData>(loadBranchData);

  // Save to localStorage whenever branchData changes
  useEffect(() => {
    saveBranchData(branchData);
  }, [branchData]);

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
