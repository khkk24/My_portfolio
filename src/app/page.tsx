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
  const { data: profile } = useProfile();
  const { data: experiences = [] } = useTimeline();
  const { data: projects = [] } = useProjects();

  const stats = {
    projectsCount: projects.length,
    yearsExperience: 5,
    publications: 8,
    institutions: ['UFPR', 'UTFPR'],
  };

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Carregando...</div>
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
