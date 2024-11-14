// types/resume.ts
export interface ResumeData {
    name: string;
    email: string;
    phone: string;
    summary: string;
    picture: string;
    experience: { company: string; position: string; duration: string; description: string }[];
    education: { institution: string; degree: string; year: string }[];
    skills: string[];
  }
  