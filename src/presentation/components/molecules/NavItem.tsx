import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ href, label, active = false }) => {
  return (
    <Link
      href={href}
      className={`
        px-4 py-2 text-sm font-medium uppercase tracking-wider
        transition-all duration-300
        ${active 
          ? 'text-primary border-b-2 border-primary' 
          : 'text-accent hover:text-primary'
        }
      `}
    >
      {label}
    </Link>
  );
};
