'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../atoms/Text';
import { Card } from '../molecules/Card';
import { Experience } from '@domain/entities/Experience';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineProps {
  experiences: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const { t } = useTranslation();

  const formatDate = (date: Date, current: boolean) => {
    if (current) return t('timeline.present');
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <section id="professional" className="py-20 bg-secondary-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="text-primary mb-4">
            {t('timeline.title')}
          </Text>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-light transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
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
                    {formatDate(exp.startDate, false)} - {exp.current ? t('timeline.current') : formatDate(exp.endDate!, false)}
                  </span>
                </div>

                <Text variant="h4" className="text-primary mb-2">
                  {exp.title}
                </Text>

                <Text variant="body" className="text-accent-light mb-2">
                  {exp.organization}
                </Text>

                {exp.location && (
                  <div className="flex items-center gap-2 text-sm text-accent mb-3">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                )}

                <Text variant="small" className="text-accent mb-4">
                  {exp.description}
                </Text>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary text-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className={`
                    inline-block mt-3 px-3 py-1 text-xs rounded-full
                    ${exp.type === 'professional' ? 'bg-blue-100 text-blue-800' : ''}
                    ${exp.type === 'academic' ? 'bg-green-100 text-green-800' : ''}
                    ${exp.type === 'project' ? 'bg-purple-100 text-purple-800' : ''}
                    ${exp.type === 'achievement' ? 'bg-yellow-100 text-yellow-800' : ''}
                  `}
                >
                  {exp.type}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
