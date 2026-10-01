import { ReactNode, useEffect } from 'react';
import { LangContext } from '../i18n/lang';
import { sk } from '../i18n/sk';

const DEFAULT_TITLE = 'Alfred Leigh - Aspiring Aerospace Engineer';

// Wraps the normal pages for the unlisted Slovak version (/sk). The pages
// themselves are the same components as the English site; this only supplies
// the Slovak copy and keeps the Slovak URLs out of search engines.
const SkSite = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // The static copies written by scripts/postbuild-sk.mjs carry the same
    // tags; everything is restored if the visitor moves on to the English site.
    const robots = document.querySelector('meta[name="robots"]');
    const previousRobots = robots?.getAttribute('content') ?? null;
    const previousLang = document.documentElement.lang;

    document.title = sk.meta.title;
    document.documentElement.lang = 'sk';
    robots?.setAttribute('content', 'noindex, nofollow');

    return () => {
      document.title = DEFAULT_TITLE;
      document.documentElement.lang = previousLang;
      if (previousRobots !== null) robots?.setAttribute('content', previousRobots);
    };
  }, []);

  return <LangContext.Provider value={sk}>{children}</LangContext.Provider>;
};

export default SkSite;
