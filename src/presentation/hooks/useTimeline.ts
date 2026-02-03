'use client';

import { useQuery } from '@tanstack/react-query';
import { MockExperienceRepository } from '@infrastructure/repositories/MockExperienceRepository';
import { GetCareerTimeline } from '@application/usecases/GetCareerTimeline';

export const useTimeline = () => {
  return useQuery({
    queryKey: ['career-timeline'],
    queryFn: async () => {
      const repository = new MockExperienceRepository();
      const useCase = new GetCareerTimeline(repository);
      return await useCase.execute();
    },
    staleTime: Infinity,
  });
};
