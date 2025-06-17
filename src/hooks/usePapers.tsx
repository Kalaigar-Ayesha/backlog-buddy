import { useState, useEffect } from 'react';

interface Paper {
  id: string;
  paper_name: string;
  download_url: string;
  paper_type: string;
  year: number;
}

interface Subject {
  name: string;
  code: string;
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

// This would be replaced with actual Supabase data in production
const initialMockData: SemesterData = {
  "1st Semester": [
    {
      name: "Engineering Mathematics-I",
      code: "MATH-101",
      papers: {
        first_ia: [
          {
            id: "1",
            paper_name: "First IA 2023 - Calculus and Linear Algebra",
            download_url: "https://drive.google.com/file/d/1example/view",
            paper_type: "first_ia",
            year: 2023
          }
        ],
        second_ia: [
          {
            id: "2",
            paper_name: "Second IA 2023 - Differential Equations",
            download_url: "https://drive.google.com/file/d/2example/view",
            paper_type: "second_ia",
            year: 2023
          }
        ],
        third_ia: [],
        final: [
          {
            id: "3",
            paper_name: "Final Exam 2023 - Complete Syllabus",
            download_url: "https://drive.google.com/file/d/3example/view",
            paper_type: "final",
            year: 2023
          }
        ]
      }
    },
    {
      name: "Engineering Physics",
      code: "PHYS-101",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Programming for Problem Solving (C Programming)",
      code: "CS-101",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Basic Electrical Engineering",
      code: "EE-101",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Engineering Graphics/Engineering Mechanics",
      code: "ME-101",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Communication Skills / Environmental Studies",
      code: "HS-101",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "LABs (Programming Lab, Physics Lab, Electrical Lab)",
      code: "LAB-101",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    }
  ],
  "2nd Semester": [
    {
      name: "Engineering Mathematics-II",
      code: "MATH-102",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Engineering Chemistry",
      code: "CHEM-102",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Data Structures and Algorithms",
      code: "CS-102",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Basic Electronics Engineering",
      code: "EC-102",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Engineering Mechanics/Engineering Graphics",
      code: "ME-102",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Environmental Studies / Communication Skills",
      code: "HS-102",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "LABs (Data Structures Lab, Chemistry Lab, Electronics Lab)",
      code: "LAB-102",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    }
  ],
  "3rd Semester": [
    {
      name: "Discrete Mathematical Structures",
      code: "MATH-201",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Digital System Design",
      code: "EC-201",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Object Oriented Programming",
      code: "CS-201",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Computer Organization and Architecture",
      code: "CS-202",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Data Communication",
      code: "EC-202",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "LABs (OOP Lab, Digital System Design Lab)",
      code: "LAB-201",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    }
  ],
  "4th Semester": [
    {
      name: "Probability and Statistics",
      code: "MATH-202",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Microprocessor and Microcontroller",
      code: "EC-203",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Design and Analysis of Algorithms",
      code: "CS-203",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Operating Systems",
      code: "CS-204",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Database Management Systems",
      code: "CS-205",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "LABs (Microprocessor Lab, Algorithms Lab, Database Lab)",
      code: "LAB-202",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    }
  ],
  "5th Semester": [
    {
      name: "Formal Languages and Automata Theory",
      code: "CS-301",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Software Engineering",
      code: "CS-302",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Computer Networks",
      code: "CS-303",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Web Technology",
      code: "CS-304",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "LABs (Software Engineering Lab, Networks Lab, Web Tech Lab)",
      code: "LAB-301",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    }
  ],
  "6th Semester": [
    {
      name: "Compiler Design",
      code: "CS-305",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Mobile Computing",
      code: "CS-306",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Data Warehousing and Data Mining",
      code: "CS-307",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "LABs (Compiler Design Lab, Mobile Computing Lab)",
      code: "LAB-302",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Elective I",
      code: "ELEC-301",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    }
  ],
  "7th Semester": [
    {
      name: "Artificial Intelligence",
      code: "CS-401",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Cloud Computing",
      code: "CS-402",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "LABs (AI Lab, Cloud Computing Lab)",
      code: "LAB-401",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Elective II",
      code: "ELEC-402",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Project-I",
      code: "PROJ-401",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    }
  ],
  "8th Semester": [
    {
      name: "Machine Learning",
      code: "CS-403",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Big Data Analytics",
      code: "CS-404",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "LABs (ML Lab, Big Data Lab)",
      code: "LAB-402",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Elective III",
      code: "ELEC-403",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    },
    {
      name: "Project-II",
      code: "PROJ-402",
      papers: {
        first_ia: [],
        second_ia: [],
        third_ia: [],
        final: []
      }
    }
  ]
};

export const usePapers = () => {
  const [semesterData, setSemesterData] = useState<SemesterData>(initialMockData);

  const addPaper = (semester: string, subjectCode: string, paperType: string, paper: Omit<Paper, 'id'>) => {
    const newPaper: Paper = {
      ...paper,
      id: Date.now().toString() // Simple ID generation
    };

    setSemesterData(prevData => {
      const updatedData = { ...prevData };
      const semesterSubjects = updatedData[semester];
      
      if (semesterSubjects) {
        const subjectIndex = semesterSubjects.findIndex(subject => subject.code === subjectCode);
        if (subjectIndex !== -1) {
          const updatedSubjects = [...semesterSubjects];
          const subject = { ...updatedSubjects[subjectIndex] };
          subject.papers = { ...subject.papers };
          subject.papers[paperType as keyof typeof subject.papers] = [
            ...subject.papers[paperType as keyof typeof subject.papers],
            newPaper
          ];
          updatedSubjects[subjectIndex] = subject;
          updatedData[semester] = updatedSubjects;
        }
      }
      
      return updatedData;
    });

    return newPaper;
  };

  return {
    semesterData,
    addPaper
  };
};
