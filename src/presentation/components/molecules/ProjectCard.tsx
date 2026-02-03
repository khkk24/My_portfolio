import React from 'react';
import { Card } from '../molecules/Card';
import { Text } from '../atoms/Text';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { Project } from '@domain/entities/Project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <Text variant="h4" className="text-primary">
          {project.name}
        </Text>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-primary transition-colors"
        >
          <ExternalLink size={20} />
        </a>
      </div>

      <Text variant="body" className="text-accent mb-4 flex-grow">
        {project.description}
      </Text>

      <div className="flex items-center gap-4 text-sm text-accent">
        {project.language && (
          <span className="px-3 py-1 bg-primary text-secondary rounded-full">
            {project.language}
          </span>
        )}
        <div className="flex items-center gap-1">
          <Star size={16} />
          <span>{project.stars}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork size={16} />
          <span>{project.forks}</span>
        </div>
      </div>

      {project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {project.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="text-xs px-2 py-1 border border-accent-light rounded"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
};
