'use client';

import React, { useState, useEffect } from 'react';
import { MainLayout } from '@presentation/components/templates/MainLayout';
import { AcademicTimeline } from '@presentation/components/organisms/AcademicTimeline';
import { MockAcademicRepository } from '@infrastructure/repositories/MockAcademicRepository';
import { Academic } from '@domain/entities/Academic';
import '@infrastructure/i18n/config';

const academicRepo = new MockAcademicRepository();

export default function PersonalPage() {
  const [academics, setAcademics] = useState<Academic[]>([]);

  useEffect(() => {
    academicRepo.getAll().then((data) => {
      setAcademics(data);
    });
  }, []);

  return (
    <MainLayout>
      <div className="pt-16">
        <AcademicTimeline academics={academics} />
      </div>
    </MainLayout>
  );
}
