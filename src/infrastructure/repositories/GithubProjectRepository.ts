import { IProjectRepository } from '@domain/repositories/IProjectRepository';
import { Project } from '@domain/entities/Project';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage: string;
  updated_at: string;
  topics: string[];
}

export class GithubProjectRepository implements IProjectRepository {
  private readonly baseUrl = 'https://api.github.com';
  private readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  async getAll(): Promise<Project[]> {
    try {
      const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
      };

      // Adiciona token se disponível (para repositórios privados)
      const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(
        `${this.baseUrl}/users/${this.username}/repos?sort=updated&per_page=100&type=all`,
        {
          headers,
          next: { revalidate: 3600 }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const repos: GithubRepo[] = await response.json();
      return repos.map(this.mapToProject);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      return [];
    }
  }

  async getByLanguage(language: string): Promise<Project[]> {
    const allProjects = await this.getAll();
    return allProjects.filter(
      (project) => project.language.toLowerCase() === language.toLowerCase()
    );
  }

  async getFeatured(): Promise<Project[]> {
    const allProjects = await this.getAll();
    return allProjects
      .filter((project) => project.stars > 0 || project.topics.length > 0)
      .slice(0, 6);
  }

  private mapToProject(repo: GithubRepo): Project {
    return {
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description || 'No description available',
      language: repo.language || 'Unknown',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      url: repo.html_url,
      homepage: repo.homepage || undefined,
      updatedAt: new Date(repo.updated_at),
      topics: repo.topics || [],
    };
  }
}
