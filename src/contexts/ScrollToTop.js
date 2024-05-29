// ScrollContext.js
import React, { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTopSmoothly = () => {
      const totalScrollDistance = window.scrollY;
      const duration = 600; // Total duration of the scroll in milliseconds
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        const position = totalScrollDistance * (1 - easeInOutQuad(progress));

        window.scrollTo(0, position);

        if (elapsed < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    scrollToTopSmoothly();
  }, [location]);

  return (
    <ScrollContext.Provider value={{}}>
      {children}
    </ScrollContext.Provider>
  );
};
