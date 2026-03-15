export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2021 - 2025",
    institution: "Techno India NJR Institute of Technology",
    degree: "B.Tech in Computer Science",
    advisor: "7.3",
  },
];
