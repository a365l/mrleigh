import { createContext, useContext } from 'react';
import type { SkCopy } from './sk';

// Holds the Slovak copy on the /sk pages and null everywhere else. The
// dictionary itself is only imported by the lazy /sk wrapper (pages/SkSite),
// so English visitors never download it.
export const LangContext = createContext<SkCopy | null>(null);

/** Slovak copy when rendering under /sk, otherwise null (English). */
export const useSk = () => useContext(LangContext);
