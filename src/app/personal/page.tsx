'use client';

import React from 'react';
import { MainLayout } from '@presentation/components/templates/MainLayout';
import { AcademicTimeline } from '@presentation/components/organisms/AcademicTimeline';
import { useAcademicTimeline } from '@presentation/hooks/useAcademicTimeline';
import '@infrastructure/i18n/config';

export default function PersonalPage() {
  const { data: academics = [] } = useAcademicTimeline();

  return (
    <MainLayout>
      <div className="pt-16">
        <AcademicTimeline academics={academics} />
      </div>
    </MainLayout>
  );
}
