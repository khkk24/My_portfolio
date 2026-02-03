'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { SocialLinks } from '../molecules/SocialLinks';
import { motion } from 'framer-motion';

interface HeroBannerProps {
  name: string;
  title: string;
  subtitle: string;
  github: string;
  linkedin: string;
  email: string;
  avatar?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  name,
  title,
  subtitle,
  github,
  linkedin,
  email,
  avatar,
}) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-secondary pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            {avatar && (
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 mb-8 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <Text variant="body" className="text-accent mb-2">
              {t('hero.greeting')}
            </Text>
            <Text variant="h1" className="text-primary mb-4">
              {name}
            </Text>
            <Text variant="h3" className="text-accent mb-2">
              {title}
            </Text>
            <Text variant="h4" className="text-accent-light mb-8">
              {subtitle}
            </Text>

            <div className="flex justify-center md:justify-start mb-8">
              <SocialLinks
                github={github}
                linkedin={linkedin}
                email={email}
                size="lg"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/projects">
                <Button variant="primary" size="lg">
                  {t('hero.viewProjects')}
                </Button>
              </Link>
              <a href={`mailto:${email}`}>
                <Button variant="outline" size="lg">
                  {t('hero.contactMe')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
