import React from 'react';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: Array<{ href: string; label: string; }>;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function MobileMenu({ isOpen, menuItems, onNavClick }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            href={item.href}
            onClick={onNavClick}
            className="block px-3 py-2"
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink
          href="#contact"
          onClick={onNavClick}
          className="block px-3 py-2"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}