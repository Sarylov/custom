import { useEffect, useState } from 'react';

const MOBILE_WIDTH = 768;

function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export const useScreen = () => {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth < MOBILE_WIDTH
  );

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidthScreen(window.innerWidth);
      if (window.innerWidth < MOBILE_WIDTH) {
        setIsMobileScreen(true);
      } else setIsMobileScreen(false);
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { widthScreen, isMobileScreen };
};
