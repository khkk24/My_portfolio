import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false 
}) => {
  return (
    <div
      className={`
        bg-secondary border border-accent-light rounded-lg p-6
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:scale-105' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
