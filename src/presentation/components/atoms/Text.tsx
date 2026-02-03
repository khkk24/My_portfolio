import React from 'react';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ 
  variant = 'body', 
  className = '', 
  children 
}) => {
  const styles = {
    h1: 'text-5xl md:text-6xl lg:text-7xl font-bold',
    h2: 'text-4xl md:text-5xl font-bold',
    h3: 'text-3xl md:text-4xl font-semibold',
    h4: 'text-2xl md:text-3xl font-semibold',
    body: 'text-base md:text-lg',
    small: 'text-sm md:text-base',
  };

  const Tag = variant.startsWith('h') ? variant : 'p';

  return React.createElement(
    Tag,
    { className: `${styles[variant]} ${className}` },
    children
  );
};
