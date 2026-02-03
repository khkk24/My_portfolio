'use client';

import React from 'react';
import { MainLayout } from '@presentation/components/templates/MainLayout';
import { ProjectsGrid } from '@presentation/components/organisms/ProjectsGrid';
import { useProjects } from '@presentation/hooks/useProjects';
import '@infrastructure/i18n/config';

export default function ProjectsPage() {
  const { data: projects = [], isLoading, error } = useProjects();

  return (
    <MainLayout>
      <div className="pt-16">
        <ProjectsGrid 
          projects={projects} 
          loading={isLoading}
          error={error ? 'Error loading projects' : undefined}
        />
      </div>
    </MainLayout>
  );
}
