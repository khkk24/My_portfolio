'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { StatCard } from '../molecules/StatCard';
import { Statistics } from '@domain/entities/Statistics';
import { motion } from 'framer-motion';

interface StatsBannerProps {
  stats: Statistics;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ stats }) => {
  const { t } = useTranslation();

  const statsData = [
    { value: stats.projectsCount, label: t('stats.projects') },
    { value: stats.yearsExperience, label: t('stats.experience') },
    { value: stats.publications, label: t('stats.publications') },
    { value: stats.institutions.length, label: t('stats.institutions') },
  ];

  return (
    <section className="bg-primary text-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
