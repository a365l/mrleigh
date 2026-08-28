import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the element named by the URL hash (e.g. /#projects) once it
// exists. Retries because homepage sections are lazy-loaded, so the target
// may not be in the DOM when the page first mounts.
export const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    let cancelled = false;
    let tries = 0;

    const attempt = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      if (++tries < 40) setTimeout(attempt, 100);
    };

    attempt();
    return () => {
      cancelled = true;
    };
  }, [hash]);
};
