import { IProjectRepository } from '@domain/repositories/IProjectRepository';
import { Project } from '@domain/entities/Project';

export class GetGithubProjects {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(): Promise<Project[]> {
    return await this.projectRepository.getAll();
  }

  async executeByLanguage(language: string): Promise<Project[]> {
    return await this.projectRepository.getByLanguage(language);
  }

  async executeFeatured(): Promise<Project[]> {
    return await this.projectRepository.getFeatured();
  }
}
