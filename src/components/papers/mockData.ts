
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

export const mockSemesterData: SemesterData = {
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
