import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLinksProps {
  github: string;
  linkedin: string;
  email: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  github,
  linkedin,
  email,
  size = 'md',
}) => {
  const sizeMap = {
    sm: 20,
    md: 24,
    lg: 28,
  };

  const iconSize = sizeMap[size];

  return (
    <div className="flex gap-4 items-center">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-accent transition-colors duration-300"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-accent transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href={`mailto:${email}`}
        className="text-primary hover:text-accent transition-colors duration-300"
        aria-label="Email"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
};
