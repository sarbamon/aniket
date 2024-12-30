import { useCallback } from 'react';

export function useNavigation() {
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    if (href?.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (window.location.pathname !== '/') {
        window.location.href = `/#${id}`;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return { handleNavClick };
}