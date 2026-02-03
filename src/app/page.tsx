'use client';

import React, { useEffect } from 'react';
import { MainLayout } from '@presentation/components/templates/MainLayout';
import { HeroBanner } from '@presentation/components/organisms/HeroBanner';
import { StatsBanner } from '@presentation/components/organisms/StatsBanner';
import { AboutSection } from '@presentation/components/organisms/AboutSection';
import { Timeline } from '@presentation/components/organisms/Timeline';
import { useProfile } from '@presentation/hooks/useProfile';
import { useTimeline } from '@presentation/hooks/useTimeline';
import { useProjects } from '@presentation/hooks/useProjects';
import '@infrastructure/i18n/config';

export default function Home() {
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: experiences = [] } = useTimeline();
  const { data: projects = [] } = useProjects();

  const stats = {
    projectsCount: projects.length || 0,
    yearsExperience: 5,
    publications: 8,
    institutions: ['UFPR', 'UTFPR'],
  };

  if (profileLoading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-4">Carregando...</div>
          <div className="text-sm text-accent">Inicializando portfólio</div>
        </div>
      </div>
    );
  }

  return (
    <MainLayout>
      <HeroBanner
        name={profile.name}
        title={profile.title}
        subtitle={profile.subtitle}
        github={profile.github}
        linkedin={profile.linkedin}
        email={profile.email}
        avatar={profile.avatar}
      />

      <StatsBanner stats={stats} />

      <AboutSection />

      <Timeline experiences={experiences} />
    </MainLayout>
  );
}
