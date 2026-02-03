'use client';

import React, { useState, useEffect } from 'react';
import { MainLayout } from '@presentation/components/templates/MainLayout';
import { ProjectsGrid } from '@presentation/components/organisms/ProjectsGrid';
import { GithubProjectRepository } from '@infrastructure/repositories/GithubProjectRepository';
import { Project } from '@domain/entities/Project';
import '@infrastructure/i18n/config';

const projectRepo = new GithubProjectRepository('khkk24');

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    projectRepo.getAll().then((data) => {
      setProjects(data);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <MainLayout>
      <div className="pt-16">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="text-xl text-accent">Carregando projetos...</div>
          </div>
        ) : (
          <ProjectsGrid projects={projects} />
        )}
      </div>
    </MainLayout>
  );
}
