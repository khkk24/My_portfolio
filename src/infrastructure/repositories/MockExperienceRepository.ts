import { IExperienceRepository } from '@domain/repositories/IExperienceRepository';
import { Experience, ExperienceType } from '@domain/entities/Experience';

export class MockExperienceRepository implements IExperienceRepository {
  private experiences: Experience[] = [
    {
      id: '1',
      type: 'academic',
      title: 'Mestrado em Ciência da Computação',
      organization: 'UFPR , UTFPR',
      description: 'Pesquisa focada em Visão Computacional e Inteligência Artificial',
      startDate: new Date('2025-03-01'),
      current: true,
      location: 'Curitiba, PR',
      tags: ['Computer Vision', 'AI', 'Research'],
    },
    {
      id: '2',
      type: 'professional',
      title: 'Analista de Inteligência Artificial no Tribunal de Contas de Estado PR',
      organization: 'Empresa de Tecnologia',
      description: 'Desenvolvimento de soluções de IA para aplicações corporativas',
      startDate: new Date('2025-05-01'),
      current: true,
      location: 'Curitiba, PR',
      tags: ['AI', 'Data Science', 'Systems Analysis'],
    },
    {
      id: '3',
      type: 'academic',
      title: 'Graduação em Ciência da Computação',
      organization: 'UFPR',
      description: 'Formação sólida em fundamentos da computação',
      startDate: new Date('2018-02-01'),
      endDate: new Date('2023-12-15'),
      current: false,
      location: 'Curitiba, PR',
      tags: ['Computer Science', 'Software Engineering'],
    },
  ];

  async getAll(): Promise<Experience[]> {
    return this.experiences;
  }

  async getByType(type: string): Promise<Experience[]> {
    return this.experiences.filter((exp) => exp.type === type);
  }

  async getTimeline(): Promise<Experience[]> {
    return this.experiences.sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }
}
