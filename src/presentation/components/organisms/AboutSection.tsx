'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../atoms/Text';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Text variant="h2" className="text-primary mb-4">
            {t('about.title')}
          </Text>
          <Text variant="h4" className="text-accent">
            {t('about.subtitle')}
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Text variant="body" className="text-accent leading-relaxed text-justify">
            {t('about.bio')}
          </Text>
        </motion.div>
      </div>
    </section>
  );
};
