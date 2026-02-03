'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../atoms/Text';
import { Card } from '../molecules/Card';
import { Academic } from '@domain/entities/Academic';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

interface AcademicTimelineProps {
  academics: Academic[];
}

export const AcademicTimeline: React.FC<AcademicTimelineProps> = ({ academics }) => {
  const { t } = useTranslation();

  const formatDate = (date: Date, current: boolean) => {
    if (current) return t('timeline.present');
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return <GraduationCap size={20} />;
      case 'diploma':
      case 'certification':
        return <Award size={20} />;
      default:
        return <Award size={20} />;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      degree: t('academic.degree'),
      diploma: t('academic.diploma'),
      certification: t('academic.certification'),
      award: t('academic.award'),
    };
    return labels[type] || type;
  };

  return (
    <section id="academic" className="py-20 bg-secondary-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="text-primary mb-4">
            {t('academic.title')}
          </Text>
          <Text variant="body" className="text-accent">
            {t('academic.subtitle')}
          </Text>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-light transform md:-translate-x-1/2" />

          {academics.map((academic, index) => (
            <motion.div
              key={academic.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                relative mb-12 md:w-1/2
                ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}
              `}
            >
              <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 -translate-y-1/2 border-4 border-secondary" />

              <Card hover>
                <div className="flex items-center gap-2 text-sm text-accent mb-2">
                  <Calendar size={16} />
                  <span>
                    {formatDate(academic.startDate, false)} - {academic.current ? t('timeline.current') : formatDate(academic.endDate!, false)}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  {getTypeIcon(academic.type)}
                  <Text variant="h4" className="text-primary">
                    {academic.title}
                  </Text>
                </div>

                <Text variant="body" className="text-accent-light mb-2">
                  {academic.institution}
                </Text>

                {academic.degree && academic.fieldOfStudy && (
                  <Text variant="small" className="text-accent mb-2">
                    {academic.degree} • {academic.fieldOfStudy}
                  </Text>
                )}

                {academic.location && (
                  <div className="flex items-center gap-2 text-sm text-accent mb-3">
                    <MapPin size={16} />
                    <span>{academic.location}</span>
                  </div>
                )}

                <Text variant="small" className="text-accent mb-4">
                  {academic.description}
                </Text>

                {academic.honors && (
                  <div className="mb-3 p-3 bg-yellow-50 rounded-lg">
                    <Text variant="small" className="text-yellow-800 font-semibold">
                      {academic.honors}
                    </Text>
                  </div>
                )}

                <span
                  className={`
                    inline-block px-3 py-1 text-xs rounded-full
                    ${academic.type === 'degree' ? 'bg-blue-100 text-blue-800' : ''}
                    ${academic.type === 'diploma' ? 'bg-green-100 text-green-800' : ''}
                    ${academic.type === 'certification' ? 'bg-purple-100 text-purple-800' : ''}
                    ${academic.type === 'award' ? 'bg-yellow-100 text-yellow-800' : ''}
                  `}
                >
                  {getTypeLabel(academic.type)}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
