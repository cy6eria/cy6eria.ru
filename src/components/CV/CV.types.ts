export interface Settings {
  workHistory: {
    title: string;
    items: {
      responsibilities: string;
      achievements: string;
      technologies: string;
    };
  };
  keySkills: {
    title: string;
    year: string;
  };
  language: {
    title: string;
  };
  education: {
    title: string;
  };
  highlights: {
    title: string;
  };
}

export interface Data {
  name: string;
  position: string;
  contacts: Array<{
    type: string;
    value: string;
  }>;
  summary: string;
  workHistory: {
    companyName: string;
    location: string;
    position: string;
    startDate: Date;
    endDate: Date | null;
    description?: string;
    responsibilities?: string;
    achievements?: string;
    technologies: string[];
  }[];
  education: {
    name: string;
    startDate: Date;
    endDate: Date;
    degree: string;
  }[];
  keySkills: { label: string, value: string }[];
  language: { label: string, value: string }[];
  highlights: string[];
}
