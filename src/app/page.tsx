'use client';

import React, { useState, useEffect } from 'react';
import { MainLayout } from '@presentation/components/templates/MainLayout';
import { HeroBanner } from '@presentation/components/organisms/HeroBanner';
import { StatsBanner } from '@presentation/components/organisms/StatsBanner';
import { AboutSection } from '@presentation/components/organisms/AboutSection';
import { Timeline } from '@presentation/components/organisms/Timeline';
import { MockProfileRepository } from '@infrastructure/repositories/MockProfileRepository';
import { MockExperienceRepository } from '@infrastructure/repositories/MockExperienceRepository';
import { Profile } from '@domain/entities/Profile';
import { Experience } from '@domain/entities/Experience';
import '@infrastructure/i18n/config';

const profileRepo = new MockProfileRepository();
const experienceRepo = new MockExperienceRepository();

export default function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    Promise.all([
      profileRepo.get(),
      experienceRepo.getAll()
    ]).then(([profileData, experiencesData]) => {
      setProfile(profileData);
      setExperiences(experiencesData);
    });
  }, []);

  const stats = {
    projectsCount: 15,
    yearsExperience: 5,
    publications: 8,
    institutions: ['UFPR', 'UTFPR'],
  };

  if (!profile) {
    return null;
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
