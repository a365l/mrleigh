import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { useSk } from '../../i18n/lang';

interface Role {
  id: string;
  org: string;
  role: string;
  dates: string;
  summary: string;
  link?: { href: string; label: string };
}

const roles: Role[] = [
  {
    id: 'berkeley',
    org: 'Berkeley Group',
    role: 'Civil engineering placement',
    dates: 'Jun-Jul 2026',
    summary:
      'One week across two live London sites, Bermondsey Place and Trent Park: setting out with a Leica total station, concrete QC and cube testing, and rebar shape codes. Written up as a 20-slide technical report.',
  },
  {
    id: 'kras',
    org: 'Kras Carpentry',
    role: 'Paid commercial work',
    dates: '2024 - present',
    summary:
      'Carpentry with power tools, plus basic plumbing and electrical installation. I also designed, built and maintain the company website.',
    link: { href: 'https://krascarpentry.co.uk', label: 'krascarpentry.co.uk' },
  },
];

const WorkSection = styled.section`
  padding: ${theme.spacing.lg} 0;
`;

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 1.25rem;
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.md};
`;

const Grid = styled.div`
  display: grid;
  gap: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled(motion.article)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
`;

const Top = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${theme.spacing.sm};
  flex-wrap: wrap;
`;

const Org = styled.h3`
  color: ${theme.colors.light};
  font-size: 1.05rem;
`;

const Dates = styled.span`
  font-size: 0.8rem;
  color: ${theme.colors.textLight};
  opacity: 0.7;
`;

const RoleName = styled.p`
  font-size: 0.85rem;
  color: ${theme.colors.accent};
  margin: 2px 0 ${theme.spacing.sm};
`;

const Summary = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${theme.colors.textLight};
  opacity: 0.85;

  a {
    color: ${theme.colors.accent};
    text-decoration: underline;
  }
`;

const Work = () => {
  const sk = useSk();

  return (
    <WorkSection id="work" aria-label={sk ? sk.work.heading : 'Work experience'}>
      <div className="container">
        <Inner>
          <Heading>{sk ? sk.work.heading : 'Work Experience'}</Heading>
          <Grid>
            {roles.map((r) => {
              const tr = sk?.work.roles[r.id];
              return (
                <Card
                  key={r.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Top>
                    <Org>{r.org}</Org>
                    <Dates>{tr?.dates ?? r.dates}</Dates>
                  </Top>
                  <RoleName>{tr?.role ?? r.role}</RoleName>
                  <Summary>
                    {tr?.summary ?? r.summary}
                    {r.link && (
                      <>
                        {' '}
                        <a href={r.link.href} target="_blank" rel="noopener noreferrer">
                          {r.link.label}
                        </a>
                      </>
                    )}
                  </Summary>
                </Card>
              );
            })}
          </Grid>
        </Inner>
      </div>
    </WorkSection>
  );
};

export default Work;
