'use client';

import { useQuery } from '@tanstack/react-query';
import { MockProfileRepository } from '@infrastructure/repositories/MockProfileRepository';
import { GetProfile } from '@application/usecases/GetProfile';

export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const repository = new MockProfileRepository();
      const useCase = new GetProfile(repository);
      return await useCase.execute();
    },
    staleTime: Infinity,
  });
};
