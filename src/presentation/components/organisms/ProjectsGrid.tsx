'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { ProjectCard } from '../molecules/ProjectCard';
import { Project } from '@domain/entities/Project';
import { motion } from 'framer-motion';

interface ProjectsGridProps {
  projects: Project[];
  loading?: boolean;
  error?: string;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ 
  projects, 
  loading = false,
  error 
}) => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Text variant="h2" className="text-primary mb-4">
            {t('projects.title')}
          </Text>
          <Text variant="body" className="text-accent">
            {t('projects.subtitle')}
          </Text>
        </motion.div>

        {loading && (
          <div className="text-center">
            <Text variant="body" className="text-accent">
              {t('projects.loading')}
            </Text>
          </div>
        )}

        {error && (
          <div className="text-center">
            <Text variant="body" className="text-red-600">
              {t('projects.error')}
            </Text>
          </div>
        )}

        {!loading && !error && visibleProjects.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>

            {hasMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mt-12"
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={loadMore}
                >
                  {t('projects.loadMore')} ({projects.length - visibleCount} {t('projects.remaining')})
                </Button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
