'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { NavItem } from '../molecules/NavItem';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/#professional', label: t('nav.professional') },
    { href: '/#academic', label: t('nav.academic') },
    { href: '/personal', label: t('nav.personal') },
  ];

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary border-b border-accent-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Kokouvi Hola
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}

            <div className="flex items-center gap-2 ml-4 border-l border-accent-light pl-4">
              <Globe size={18} className="text-accent" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`
                    px-2 py-1 text-sm font-medium transition-colors
                    ${i18n.language === lang.code 
                      ? 'text-primary underline' 
                      : 'text-accent hover:text-primary'
                    }
                  `}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-accent-light">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-primary hover:bg-secondary-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-3 border-t border-accent-light">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`
                    px-3 py-2 text-sm font-medium transition-colors
                    ${i18n.language === lang.code 
                      ? 'bg-primary text-secondary' 
                      : 'bg-secondary-light text-primary'
                    }
                  `}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
