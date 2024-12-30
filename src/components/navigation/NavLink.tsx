import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`text-gray-700 hover:text-[#47296d] transition-colors ${className}`}
    >
      {children}
    </a>
  );
}