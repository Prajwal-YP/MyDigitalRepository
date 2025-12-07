export interface Project {
  title: string;
  role?: string;
  period: string;
  description: string[];
  techStack: string[];
  type: "Professional" | "Academic" | "Personal";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  score: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}