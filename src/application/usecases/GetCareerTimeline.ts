import { IExperienceRepository } from '@domain/repositories/IExperienceRepository';
import { Experience } from '@domain/entities/Experience';

export class GetCareerTimeline {
  constructor(private readonly experienceRepository: IExperienceRepository) {}

  async execute(): Promise<Experience[]> {
    const experiences = await this.experienceRepository.getTimeline();
    return experiences.sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }

  async executeByType(type: string): Promise<Experience[]> {
    return await this.experienceRepository.getByType(type);
  }
}
