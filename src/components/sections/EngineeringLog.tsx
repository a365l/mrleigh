import { Fragment, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import {
  FaBalanceScale,
  FaChevronDown,
  FaCodeBranch,
  FaFileAlt,
  FaFlag,
  FaHourglassHalf,
  FaRedo,
  FaSquareRootAlt,
} from 'react-icons/fa';
import { theme } from '../../styles/theme';
import type { LogDepth, LogEntry, LogEntryType } from '../../data/engineeringLog';

/* ---------------------------------- meta ---------------------------------- */

const typeMeta: Record<LogEntryType, { label: string; icon: React.ReactNode }> = {
  milestone: { label: 'Milestone', icon: <FaFlag aria-hidden="true" /> },
  process: { label: 'Process', icon: <FaFileAlt aria-hidden="true" /> },
  derivation: { label: 'Derivation', icon: <FaSquareRootAlt aria-hidden="true" /> },
  decision: { label: 'Trade study', icon: <FaBalanceScale aria-hidden="true" /> },
  failure: { label: 'Failure → redo', icon: <FaRedo aria-hidden="true" /> },
  planned: { label: 'Up next', icon: <FaHourglassHalf aria-hidden="true" /> },
};

const depthLabel: Record<LogDepth, string> = {
  1: 'Process',
  2: 'Applied engineering',
  3: 'First principles',
};

type Lens = 'all' | 'first-principles' | 'decisions' | 'failures';

const lenses: { id: Lens; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'first-principles', label: 'First-principles work' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'failures', label: 'Failures & redos' },
];

const matchesLens = (entry: LogEntry, lens: Lens): boolean => {
  switch (lens) {
    case 'all':
      return true;
    case 'first-principles':
      return entry.depth === 3;
    case 'decisions':
      return entry.type === 'decision';
    case 'failures':
      return entry.type === 'failure';
  }
};

/** Renders `^{...}` as superscript and `_{...}` as subscript. */
const renderMath = (expr: string): React.ReactNode[] =>
  expr.split(/(\^\{[^}]*\}|_\{[^}]*\})/g).map((part, i) => {
    if (part.startsWith('^{')) return <sup key={i}>{part.slice(2, -1)}</sup>;
    if (part.startsWith('_{')) return <sub key={i}>{part.slice(2, -1)}</sub>;
    return <Fragment key={i}>{part}</Fragment>;
  });

/* --------------------------------- styles --------------------------------- */

const mono = "'Cascadia Code', 'JetBrains Mono', Consolas, 'SF Mono', monospace";

const Section = styled.section`
  padding: ${theme.spacing.xl} 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.sm};
  position: relative;
  padding-bottom: ${theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

const SectionIntro = styled(motion.p)`
  color: ${theme.colors.textLight};
  opacity: 0.85;
  line-height: 1.7;
  max-width: 760px;
  margin-bottom: ${theme.spacing.md};
`;

const StatStrip = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm} ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  font-size: 0.85rem;
  color: ${theme.colors.textLight};
  opacity: 0.7;
  font-family: ${mono};
`;

const LensRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const LensChip = styled.button<{ active: boolean }>`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid ${({ active }) => (active ? 'transparent' : 'rgba(246, 177, 122, 0.35)')};
  background: ${({ active }) => (active ? theme.colors.gradient.accent : 'transparent')};
  color: ${({ active }) => (active ? theme.colors.textDark : theme.colors.accent)};
  transition: all ${theme.transitions.default};

  &:hover {
    background: ${({ active }) => (active ? theme.colors.gradient.accent : theme.colors.glass.card)};
    transform: translateY(-1px);
  }
`;

const Rail = styled.div`
  position: relative;
  padding-left: 56px;

  @media (min-width: ${theme.breakpoints.md}) {
    padding-left: 72px;
  }
`;

const RailTrack = styled.div`
  position: absolute;
  left: 20px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: rgba(246, 177, 122, 0.12);
  border-radius: 1px;

  @media (min-width: ${theme.breakpoints.md}) {
    left: 24px;
  }
`;

const RailProgress = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, ${theme.colors.accent}, rgba(246, 177, 122, 0.35));
  border-radius: 1px;
  transform-origin: top;
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 5px rgba(42, 45, 62, 0.9), 0 0 12px 2px rgba(246, 177, 122, 0.25); }
  50% { box-shadow: 0 0 0 5px rgba(42, 45, 62, 0.9), 0 0 18px 5px rgba(246, 177, 122, 0.5); }
`;

const EntryRow = styled.article<{ dimmed: boolean }>`
  position: relative;
  margin-bottom: ${theme.spacing.lg};
  opacity: ${({ dimmed }) => (dimmed ? 0.25 : 1)};
  transition: opacity 0.4s ease;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const EntryMotion = styled(motion.div)`
  position: relative;
`;

const Marker = styled.div<{ ghost: boolean }>`
  position: absolute;
  left: -56px;
  top: 2px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  z-index: 1;
  background: ${({ ghost }) => (ghost ? 'transparent' : theme.colors.gradient.accent)};
  border: ${({ ghost }) => (ghost ? `2px dashed rgba(246, 177, 122, 0.5)` : 'none')};
  color: ${({ ghost }) => (ghost ? theme.colors.accent : theme.colors.textDark)};
  box-shadow: 0 0 0 5px rgba(42, 45, 62, 0.9);

  @media (min-width: ${theme.breakpoints.md}) {
    left: -72px;
    margin-left: 4px;
  }

  &[data-deep='true'] {
    animation: ${glowPulse} 3.2s ease-in-out infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

const Card = styled.div<{ variant: 'default' | 'failure' | 'planned' }>`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: ${({ variant }) =>
    variant === 'failure'
      ? '1px dashed rgba(246, 177, 122, 0.55)'
      : variant === 'planned'
        ? '1px dashed rgba(255, 255, 255, 0.15)'
        : '1px solid transparent'};
  opacity: ${({ variant }) => (variant === 'planned' ? 0.75 : 1)};
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.12);
  }
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xs};
`;

const DateLabel = styled.span`
  font-family: ${mono};
  font-size: 0.8rem;
  font-weight: 600;
  color: ${theme.colors.accent};
  letter-spacing: 0.04em;
`;

const PhaseTag = styled.span`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${theme.colors.textLight};
  opacity: 0.55;
`;

const TypeBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${theme.colors.accent};
  background: ${theme.colors.glass.card};
  border-radius: 12px;
  padding: 3px 10px;
  margin-left: auto;

  svg {
    font-size: 0.7rem;
  }
`;

const FlagBadge = styled(TypeBadge)`
  margin-left: 0;
  border: 1px dashed rgba(246, 177, 122, 0.5);
  background: transparent;
`;

const EntryTitle = styled.h3`
  color: ${theme.colors.light};
  font-size: 1.15rem;
  line-height: 1.35;
  margin-bottom: ${theme.spacing.sm};
`;

const RigourRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
`;

const RigourBars = styled.div`
  display: flex;
  gap: 3px;
`;

const RigourBar = styled.span<{ filled: boolean; deep: boolean }>`
  width: 18px;
  height: 5px;
  border-radius: 3px;
  background: ${({ filled, deep }) =>
    filled
      ? deep
        ? theme.colors.gradient.accent
        : 'rgba(246, 177, 122, 0.55)'
      : 'rgba(255, 255, 255, 0.12)'};
`;

const RigourLabel = styled.span`
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${theme.colors.textLight};
  opacity: 0.6;
`;

const Summary = styled.p`
  color: ${theme.colors.textLight};
  opacity: 0.88;
  line-height: 1.65;
  font-size: 0.95rem;
`;

const ExpandToggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: ${theme.spacing.sm};
  color: ${theme.colors.accent};
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 20px;
  padding: 4px 12px;
  background: ${theme.colors.glass.card};
  cursor: pointer;
  transition: all ${theme.transitions.default};

  svg {
    font-size: 0.7rem;
    transition: transform ${theme.transitions.default};
  }

  &:hover,
  &[aria-expanded='true'] {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
  }

  &[aria-expanded='true'] svg {
    transform: rotate(180deg);
  }
`;

const Expanded = styled(motion.div)`
  overflow: hidden;
`;

const DetailList = styled.ul`
  margin-top: ${theme.spacing.md};
  padding-left: 1.1rem;
  display: grid;
  gap: ${theme.spacing.sm};

  li {
    color: ${theme.colors.textLight};
    opacity: 0.82;
    line-height: 1.6;
    font-size: 0.9rem;

    &::marker {
      color: ${theme.colors.accent};
    }
  }
`;

const EquationBlock = styled.div`
  margin-top: ${theme.spacing.md};
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const Equation = styled.span`
  font-family: Georgia, 'Times New Roman', serif;
  font-style: italic;
  font-size: 1rem;
  color: ${theme.colors.light};
  background: rgba(246, 177, 122, 0.08);
  border-left: 3px solid ${theme.colors.accent};
  border-radius: 0 10px 10px 0;
  padding: ${theme.spacing.sm} ${theme.spacing.md};

  sub,
  sup {
    font-size: 0.7em;
  }
`;

const NumberGrid = styled.div`
  margin-top: ${theme.spacing.md};
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const NumberChip = styled.div`
  background: ${theme.colors.glass.card};
  border-radius: 10px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};

  dt {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: ${theme.colors.textLight};
    opacity: 0.6;
    margin-bottom: 2px;
  }

  dd {
    font-family: ${mono};
    font-size: 0.88rem;
    font-weight: 600;
    color: ${theme.colors.accent};
    margin: 0;
  }
`;

const EvidenceRow = styled.div`
  margin-top: ${theme.spacing.md};
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const EvidenceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${theme.colors.textLight};
  background: ${theme.colors.glass.card};
  border: 1px solid rgba(246, 177, 122, 0.25);
  border-radius: 20px;
  padding: 5px 12px;
  transition: all ${theme.transitions.default};

  svg {
    color: ${theme.colors.accent};
    font-size: 0.75rem;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);

    svg {
      color: ${theme.colors.textDark};
    }
  }
`;

/* -------------------------------- component ------------------------------- */

const entryVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface EngineeringLogProps {
  entries: LogEntry[];
}

const EngineeringLog = ({ entries }: EngineeringLogProps) => {
  const [lens, setLens] = useState<Lens>('all');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const railRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ['start 0.8', 'end 0.45'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  const stats = useMemo(() => {
    const logged = entries.filter((e) => e.type !== 'planned');
    const deep = logged.filter((e) => e.depth === 3).length;
    return { total: logged.length, deep };
  }, [entries]);

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });

  return (
    <Section aria-label="Engineering log">
      <div className="container">
        <SectionTitle initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Engineering Log
        </SectionTitle>
        <SectionIntro
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The session-by-session record of the work, held to the same rule as the project itself:
          nothing is claimed without an artefact to point at. Every entry links to the commit,
          calculation, or document that proves it - including the failures.
        </SectionIntro>

        <StatStrip
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span>{stats.total} sessions logged</span>
          <span>{stats.deep} at first-principles depth</span>
          <span>every claim evidence-linked</span>
        </StatStrip>

        <LensRow role="group" aria-label="Filter log entries">
          {lenses.map((l) => (
            <LensChip key={l.id} type="button" active={lens === l.id} aria-pressed={lens === l.id} onClick={() => setLens(l.id)}>
              {l.label}
            </LensChip>
          ))}
        </LensRow>

        <Rail ref={railRef}>
          <RailTrack aria-hidden="true">
            <RailProgress style={{ scaleY: prefersReducedMotion ? 1 : progress }} />
          </RailTrack>

          {entries.map((entry) => {
            const meta = typeMeta[entry.type];
            const isOpen = openIds.has(entry.id);
            const dimmed = !matchesLens(entry, lens);
            const ghost = entry.type === 'planned';
            const hasExpandable = Boolean(entry.detail?.length || entry.equations?.length || entry.numbers?.length || entry.evidence?.length);
            const variant = entry.type === 'failure' ? 'failure' : ghost ? 'planned' : 'default';

            return (
              <EntryRow key={entry.id} dimmed={dimmed}>
                <EntryMotion
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={entryVariants}
                >
                <Marker ghost={ghost} data-deep={entry.depth === 3 && !ghost}>
                  {meta.icon}
                </Marker>
                <Card variant={variant}>
                  <MetaRow>
                    <DateLabel>{entry.dateLabel}</DateLabel>
                    <PhaseTag>{entry.phase}</PhaseTag>
                    {entry.flag && <FlagBadge>{entry.flag}</FlagBadge>}
                    <TypeBadge>
                      {meta.icon}
                      {meta.label}
                    </TypeBadge>
                  </MetaRow>

                  <EntryTitle>{entry.title}</EntryTitle>

                  <RigourRow aria-label={`Rigour: ${depthLabel[entry.depth]}`}>
                    <RigourBars aria-hidden="true">
                      {([1, 2, 3] as const).map((level) => (
                        <RigourBar key={level} filled={level <= entry.depth} deep={entry.depth === 3} />
                      ))}
                    </RigourBars>
                    <RigourLabel>{depthLabel[entry.depth]}</RigourLabel>
                  </RigourRow>

                  <Summary>{entry.summary}</Summary>

                  {hasExpandable && (
                    <>
                      <ExpandToggle type="button" aria-expanded={isOpen} onClick={() => toggle(entry.id)}>
                        {isOpen ? 'Close' : 'Working, numbers & evidence'}
                        <FaChevronDown aria-hidden="true" />
                      </ExpandToggle>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <Expanded
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {entry.detail && entry.detail.length > 0 && (
                              <DetailList>
                                {entry.detail.map((line) => (
                                  <li key={line}>{line}</li>
                                ))}
                              </DetailList>
                            )}

                            {entry.equations && entry.equations.length > 0 && (
                              <EquationBlock>
                                {entry.equations.map((eq) => (
                                  <Equation key={eq}>{renderMath(eq)}</Equation>
                                ))}
                              </EquationBlock>
                            )}

                            {entry.numbers && entry.numbers.length > 0 && (
                              <NumberGrid as="dl">
                                {entry.numbers.map((num) => (
                                  <NumberChip key={num.label}>
                                    <dt>{num.label}</dt>
                                    <dd>{num.value}</dd>
                                  </NumberChip>
                                ))}
                              </NumberGrid>
                            )}

                            {entry.evidence && entry.evidence.length > 0 && (
                              <EvidenceRow>
                                {entry.evidence.map((ev) => (
                                  <EvidenceLink key={ev.url} href={ev.url} target="_blank" rel="noopener noreferrer">
                                    {ev.kind === 'commit' ? <FaCodeBranch aria-hidden="true" /> : <FaFileAlt aria-hidden="true" />}
                                    {ev.label}
                                  </EvidenceLink>
                                ))}
                              </EvidenceRow>
                            )}
                          </Expanded>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </Card>
                </EntryMotion>
              </EntryRow>
            );
          })}
        </Rail>
      </div>
    </Section>
  );
};

export default EngineeringLog;
