import { Project } from '@domain/entities/Project';

export interface IProjectRepository {
  getAll(): Promise<Project[]>;
  getByLanguage(language: string): Promise<Project[]>;
  getFeatured(): Promise<Project[]>;
}
