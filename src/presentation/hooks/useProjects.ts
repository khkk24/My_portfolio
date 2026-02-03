'use client';

import { useQuery } from '@tanstack/react-query';
import { GithubProjectRepository } from '@infrastructure/repositories/GithubProjectRepository';
import { GetGithubProjects } from '@application/usecases/GetGithubProjects';

const GITHUB_USERNAME = 'khkk24';

export const useProjects = () => {
  return useQuery({
    queryKey: ['github-projects'],
    queryFn: async () => {
      const repository = new GithubProjectRepository(GITHUB_USERNAME);
      const useCase = new GetGithubProjects(repository);
      return await useCase.execute();
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
