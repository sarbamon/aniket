import React from 'react';
import { MessageSquare } from 'lucide-react';

interface NavButtonProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function NavButton({ onClick }: NavButtonProps) {
  return (
    <a 
      href="#contact" 
      onClick={onClick}
      className="bg-[#47296d] text-white px-4 py-2 rounded-md flex items-center hover:bg-purple-700 transition-colors"
    >
      <MessageSquare className="w-4 h-4 mr-2" />
      Contact Us
    </a>
  );
}