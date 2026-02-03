export type ExperienceType = 'professional' | 'academic' | 'project' | 'achievement';

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  location?: string;
  tags: string[];
}
