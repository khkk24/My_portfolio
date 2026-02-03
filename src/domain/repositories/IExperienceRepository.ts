import { Experience } from '@domain/entities/Experience';

export interface IExperienceRepository {
  getAll(): Promise<Experience[]>;
  getByType(type: string): Promise<Experience[]>;
  getTimeline(): Promise<Experience[]>;
}
