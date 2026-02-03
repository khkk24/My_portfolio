export type AcademicType = 'degree' | 'diploma' | 'certification' | 'award';

export interface Academic {
  id: string;
  type: AcademicType;
  title: string;
  institution: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  location?: string;
  degree?: string;
  fieldOfStudy?: string;
  honors?: string;
  grade?: string;
}
