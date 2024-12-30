import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './navigation/Logo';
import { NavLink } from './navigation/NavLink';
import { NavButton } from './navigation/NavButton';
import { MobileMenu } from './navigation/MobileMenu';
import { MENU_ITEMS } from './navigation/constants';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {MENU_ITEMS.map((item) => (
              <NavLink 
                key={item.label}
                href={item.href} 
                onClick={handleClick}
              >
                {item.label}
              </NavLink>
            ))}
            <NavButton onClick={handleClick} />
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-[#47296d] transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={isOpen}
        menuItems={MENU_ITEMS}
        onNavClick={handleClick}
      />
    </nav>
  );
}