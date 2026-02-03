'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '../atoms/Text';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Text variant="small" className="text-secondary-dark mb-2">
            © {currentYear} - {t('footer.rights')}
          </Text>
          <div className="flex items-center justify-center gap-2 text-secondary-dark mb-2">
            <span>Desenvolvido por Kokouvi Hola</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-secondary-dark">
            <span className="font-mono">Next.js + TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
