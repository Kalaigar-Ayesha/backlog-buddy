
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

export const mockSemesterData: SemesterData = {
  "1st Semester": [
    {
      name: "Engineering Mathematics-I",
      code: "MATH-101",
      papers: {
        first_ia: [{ id: "1", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample1", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "2", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample2", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "3", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample3", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "4", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample4", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Engineering Physics",
      code: "PHYS-101",
      papers: {
        first_ia: [{ id: "5", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample5", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "6", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample6", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "7", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample7", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "8", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample8", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Programming for Problem Solving (C Programming)",
      code: "CS-101",
      papers: {
        first_ia: [{ id: "9", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample9", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "10", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample10", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "11", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample11", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "12", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample12", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Basic Electrical Engineering",
      code: "EE-101",
      papers: {
        first_ia: [{ id: "13", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample13", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "14", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample14", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "15", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample15", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "16", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample16", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Engineering Graphics/Engineering Mechanics",
      code: "ME-101",
      papers: {
        first_ia: [{ id: "17", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample17", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "18", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample18", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "19", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample19", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "20", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample20", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Communication Skills / Environmental Studies",
      code: "HS-101",
      papers: {
        first_ia: [{ id: "21", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample21", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "22", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample22", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "23", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample23", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "24", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample24", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Programming Lab, Physics Lab, Electrical Lab",
      code: "LABs",
      papers: {
        first_ia: [{ id: "25", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample25", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "26", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample26", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "27", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample27", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "28", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample28", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "2nd Semester": [
    {
      name: "Engineering Mathematics-II",
      code: "MATH-102",
      papers: {
        first_ia: [{ id: "29", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample29", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "30", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample30", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "31", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample31", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "32", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample32", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Engineering Chemistry",
      code: "CHEM-101",
      papers: {
        first_ia: [{ id: "33", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample33", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "34", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample34", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "35", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample35", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "36", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample36", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Data Structures",
      code: "CS-102",
      papers: {
        first_ia: [{ id: "37", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample37", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "38", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample38", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "39", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample39", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "40", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample40", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Basic Electronics Engineering",
      code: "EC-101",
      papers: {
        first_ia: [{ id: "41", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample41", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "42", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample42", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "43", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample43", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "44", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample44", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Workshop Practices",
      code: "ME-102",
      papers: {
        first_ia: [{ id: "45", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample45", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "46", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample46", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "47", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample47", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "48", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample48", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "English/Professional Communication",
      code: "HS-102",
      papers: {
        first_ia: [{ id: "49", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample49", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "50", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample50", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "51", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample51", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "52", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample52", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Data Structures Lab, Chemistry Lab, Electronics Lab",
      code: "LABs",
      papers: {
        first_ia: [{ id: "53", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample53", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "54", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample54", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "55", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample55", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "56", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample56", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "3rd Semester": [
    {
      name: "Discrete Mathematics",
      code: "CS-201",
      papers: {
        first_ia: [{ id: "57", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample57", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "58", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample58", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "59", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample59", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "60", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample60", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Digital Logic Design",
      code: "CS-202",
      papers: {
        first_ia: [{ id: "61", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample61", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "62", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample62", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "63", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample63", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "64", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample64", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Object Oriented Programming (C++/Java)",
      code: "CS-203",
      papers: {
        first_ia: [{ id: "65", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample65", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "66", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample66", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "67", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample67", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "68", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample68", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Computer Organization and Architecture",
      code: "CS-204",
      papers: {
        first_ia: [{ id: "69", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample69", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "70", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample70", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "71", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample71", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "72", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample72", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Data Structures and Algorithms",
      code: "CS-205",
      papers: {
        first_ia: [{ id: "73", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample73", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "74", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample74", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "75", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample75", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "76", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample76", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Environmental Science/Ethics",
      code: "HS-201",
      papers: {
        first_ia: [{ id: "77", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample77", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "78", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample78", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "79", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample79", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "80", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample80", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "OOP Lab, DSA Lab, Digital Logic Lab",
      code: "LABs",
      papers: {
        first_ia: [{ id: "81", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample81", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "82", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample82", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "83", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample83", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "84", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample84", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "4th Semester": [
    {
      name: "Operating Systems",
      code: "CS-206",
      papers: {
        first_ia: [{ id: "85", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample85", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "86", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample86", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "87", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample87", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "88", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample88", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Database Management Systems (DBMS)",
      code: "CS-207",
      papers: {
        first_ia: [{ id: "89", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample89", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "90", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample90", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "91", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample91", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "92", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample92", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Software Engineering",
      code: "CS-208",
      papers: {
        first_ia: [{ id: "93", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample93", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "94", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample94", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "95", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample95", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "96", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample96", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Design and Analysis of Algorithms",
      code: "CS-209",
      papers: {
        first_ia: [{ id: "97", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample97", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "98", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample98", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "99", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample99", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "100", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample100", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Microprocessors and Interfacing",
      code: "CS-210",
      papers: {
        first_ia: [{ id: "101", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample101", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "102", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample102", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "103", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample103", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "104", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample104", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Economics/Managerial Skills",
      code: "HS-202",
      papers: {
        first_ia: [{ id: "105", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample105", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "106", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample106", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "107", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample107", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "108", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample108", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "OS Lab, DBMS Lab, DAA Lab",
      code: "LABs",
      papers: {
        first_ia: [{ id: "109", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample109", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "110", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample110", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "111", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample111", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "112", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample112", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "5th Semester": [
    {
      name: "Computer Networks",
      code: "CS-301",
      papers: {
        first_ia: [{ id: "113", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample113", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "114", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample114", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "115", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample115", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "116", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample116", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Theory of Computation",
      code: "CS-302",
      papers: {
        first_ia: [{ id: "117", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample117", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "118", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample118", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "119", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample119", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "120", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample120", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Compiler Design",
      code: "CS-303",
      papers: {
        first_ia: [{ id: "121", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample121", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "122", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample122", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "123", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample123", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "124", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample124", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Web Technologies",
      code: "CS-304",
      papers: {
        first_ia: [{ id: "125", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample125", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "126", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample126", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "127", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample127", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "128", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample128", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Professional Elective I (Cloud Computing, ML Basics)",
      code: "CS-305",
      papers: {
        first_ia: [{ id: "129", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample129", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "130", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample130", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "131", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample131", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "132", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample132", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "CN Lab, Web Tech Lab, Compiler Lab",
      code: "LABs",
      papers: {
        first_ia: [{ id: "133", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample133", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "134", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample134", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "135", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample135", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "136", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample136", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "6th Semester": [
    {
      name: "Artificial Intelligence or Machine Learning",
      code: "CS-306",
      papers: {
        first_ia: [{ id: "137", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample137", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "138", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample138", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "139", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample139", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "140", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample140", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Internet of Things (IoT) / Data Science",
      code: "CS-307",
      papers: {
        first_ia: [{ id: "141", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample141", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "142", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample142", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "143", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample143", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "144", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample144", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Software Project Management",
      code: "CS-308",
      papers: {
        first_ia: [{ id: "145", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample145", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "146", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample146", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "147", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample147", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "148", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample148", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Open Elective I (Cybersecurity, Blockchain)",
      code: "CS-309",
      papers: {
        first_ia: [{ id: "149", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample149", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "150", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample150", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "151", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample151", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "152", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample152", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Mini Project / Industrial Training",
      code: "CS-310",
      papers: {
        first_ia: [{ id: "153", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample153", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "154", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample154", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "155", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample155", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "156", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample156", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "AI/ML Lab, IoT Lab, Project Lab",
      code: "LABs",
      papers: {
        first_ia: [{ id: "157", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample157", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "158", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample158", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "159", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample159", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "160", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample160", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "7th Semester": [
    {
      name: "Distributed Systems / Big Data Analytics",
      code: "CS-401",
      papers: {
        first_ia: [{ id: "161", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample161", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "162", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample162", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "163", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample163", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "164", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample164", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Information Security / Advanced Databases",
      code: "CS-402",
      papers: {
        first_ia: [{ id: "165", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample165", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "166", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample166", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "167", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample167", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "168", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample168", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Professional Elective II",
      code: "CS-403",
      papers: {
        first_ia: [{ id: "169", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample169", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "170", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample170", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "171", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample171", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "172", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample172", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Open Elective II",
      code: "CS-404",
      papers: {
        first_ia: [{ id: "173", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample173", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "174", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample174", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "175", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample175", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "176", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample176", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Major Project Phase I",
      code: "CS-405",
      papers: {
        first_ia: [{ id: "177", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample177", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "178", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample178", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "179", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample179", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "180", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample180", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Project Lab, Elective Lab",
      code: "LABs",
      papers: {
        first_ia: [{ id: "181", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample181", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "182", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample182", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "183", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample183", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "184", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample184", paper_type: "final", year: 2023 }]
      }
    }
  ],
  "8th Semester": [
    {
      name: "Major Project Phase II",
      code: "CS-406",
      papers: {
        first_ia: [{ id: "185", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample185", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "186", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample186", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "187", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample187", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "188", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample188", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Seminar / Research Paper Presentation",
      code: "CS-407",
      papers: {
        first_ia: [{ id: "189", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample189", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "190", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample190", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "191", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample191", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "192", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample192", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Internship / Industrial Visit Report",
      code: "CS-408",
      papers: {
        first_ia: [{ id: "193", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample193", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "194", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample194", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "195", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample195", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "196", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample196", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Professional Elective III",
      code: "CS-409",
      papers: {
        first_ia: [{ id: "197", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample197", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "198", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample198", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "199", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample199", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "200", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample200", paper_type: "final", year: 2023 }]
      }
    },
    {
      name: "Open Elective III",
      code: "CS-410",
      papers: {
        first_ia: [{ id: "201", paper_name: "First IA 2023", download_url: "https://drive.google.com/file/d/sample201", paper_type: "first_ia", year: 2023 }],
        second_ia: [{ id: "202", paper_name: "Second IA 2023", download_url: "https://drive.google.com/file/d/sample202", paper_type: "second_ia", year: 2023 }],
        third_ia: [{ id: "203", paper_name: "Third IA 2023", download_url: "https://drive.google.com/file/d/sample203", paper_type: "third_ia", year: 2023 }],
        final: [{ id: "204", paper_name: "Final Exam 2023", download_url: "https://drive.google.com/file/d/sample204", paper_type: "final", year: 2023 }]
      }
    }
  ]
};
