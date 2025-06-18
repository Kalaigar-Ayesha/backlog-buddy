
export interface Paper {
  id: string;
  paper_name: string;
  download_url: string;
  paper_type: string;
  year: number;
}

export interface Subject {
  name: string;
  code: string;
  papers: {
    first_ia: Paper[];
    second_ia: Paper[];
    third_ia: Paper[];
    final: Paper[];
  };
}

export interface BranchData {
  [branch: string]: {
    [semester: string]: Subject[];
  };
}
