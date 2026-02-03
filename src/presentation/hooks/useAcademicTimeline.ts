'use client';

import { useQuery } from '@tanstack/react-query';
import { MockAcademicRepository } from '@infrastructure/repositories/MockAcademicRepository';
import { IAcademicRepository } from '@domain/repositories/IAcademicRepository';

class GetAcademicTimeline {
  constructor(private readonly academicRepository: IAcademicRepository) {}

  async execute() {
    return await this.academicRepository.getTimeline();
  }
}

export const useAcademicTimeline = () => {
  return useQuery({
    queryKey: ['academic-timeline'],
    queryFn: async () => {
      const repository = new MockAcademicRepository();
      const useCase = new GetAcademicTimeline(repository);
      return await useCase.execute();
    },
    staleTime: Infinity,
  });
};
