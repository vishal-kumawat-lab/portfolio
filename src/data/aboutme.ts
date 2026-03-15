export interface AboutMe {
  name: string;
  title: string;
  // institution: string;
  description: string;
  email: string;
  imageUrl?: string ;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  // institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Vishal Kumawat",
  title: "DevOps & DEveloper",
  // institution: "Stanford University",
  // Note that links work in the description
  description:
    "I’m a Cloud & DevSecOps Engineer with a mission to bridge the gap between application development and infrastructure security. My background as a Java Developer allows me to understand the application lifecycle deeply, while my RHCSA® certification ensures the underlying systems are hardened and optimized.",
  email: "Kumawatvishal0376@gmail.com",
  imageUrl: "/Vishal-kumawat-photo.jpg" ,
  // googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "vishal-kumawat-lab",
  linkedinUsername: "vishal-kumawat-94a6b0225",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  cvUrl: "https://drive.google.com/file/d/1CHN0zLmeWi-w1WM7A3z6VXz7z_6pcs7b/view",
  // institutionUrl: "https://www.stanford.edu",
  // altName: "",
  secretDescription: "I like Cat's.",
};
