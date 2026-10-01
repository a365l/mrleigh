import { useEffect } from 'react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import {
  skContact,
  skEducation,
  skHero,
  skJourney,
  skMeta,
  skMilestones,
  skOtherResults,
  skProjects,
  skProjectsHeading,
  skSideProjects,
  skSkills,
  skSkillsHeading,
  skStemResults,
  type SkPhoto,
  type SkResult,
} from '../data/sk';

// Unlisted Slovak one-page version of the site. Deliberately standalone: it
// does not use Layout or any English section component, so nothing here can
// change the English pages. Larger type, no menus, photos always visible.

const DEFAULT_TITLE = 'Alfred Leigh - Aspiring Aerospace Engineer';

const Page = styled.div`
  min-height: 100vh;
  /* px, not rem: the global mobile rule shrinks rem, and this page is meant
     to be easy to read on a phone. */
  font-size: 19px;
  line-height: 1.75;
  color: ${theme.colors.text};
  padding: ${theme.spacing.lg} ${theme.spacing.md} ${theme.spacing.xl};
`;

const Column = styled.main`
  max-width: 780px;
  margin: 0 auto;
`;

const HeroBlock = styled.header`
  text-align: center;
  padding: ${theme.spacing.xl} 0 ${theme.spacing.lg};

  h1 {
    font-size: clamp(2.4rem, 8vw, 3.6rem);
    color: ${theme.colors.accent};
    line-height: 1.15;
  }

  h2 {
    font-size: clamp(1.3rem, 4vw, 1.8rem);
    font-weight: 500;
    margin-top: ${theme.spacing.sm};
  }
`;

const MetaLine = styled.p`
  margin-top: ${theme.spacing.md};
  font-size: 0.9em;
  opacity: 0.85;
`;

const Intro = styled.p`
  margin-top: ${theme.spacing.md};
`;

const Button = styled.a`
  display: inline-block;
  margin-top: ${theme.spacing.lg};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: 30px;
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  font-weight: 600;
`;

const SectionBlock = styled.section`
  padding: ${theme.spacing.lg} 0;
`;

const SectionHeading = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.3rem);
  color: ${theme.colors.accent};
  margin-bottom: ${theme.spacing.md};
  padding-bottom: ${theme.spacing.sm};
  border-bottom: 3px solid ${theme.colors.accent};
`;

const SubHeading = styled.h3`
  font-size: 1.2em;
  color: ${theme.colors.accent};
  margin: ${theme.spacing.lg} 0 ${theme.spacing.md};
`;

const Card = styled.article`
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: ${theme.spacing.lg} ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.lg};
  }

  h3 {
    font-size: 1.25em;
    color: ${theme.colors.text};
    margin-bottom: ${theme.spacing.sm};
  }
`;

const Badge = styled.span`
  display: inline-block;
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  font-weight: 700;
  font-size: 0.85em;
  border-radius: 14px;
  padding: 2px 14px;
  margin-bottom: ${theme.spacing.sm};
`;

const PhotoGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: ${theme.spacing.md};

  figure {
    margin: 0;
  }

  img {
    width: 100%;
    border-radius: 12px;
  }

  figcaption {
    font-size: 0.85em;
    opacity: 0.8;
    margin-top: ${theme.spacing.xs};
    line-height: 1.5;
  }
`;

const WideImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: ${theme.spacing.md};
`;

const Tagline = styled.p`
  color: ${theme.colors.accent};
  font-weight: 600;
  margin-bottom: ${theme.spacing.md};
`;

const FactList = styled.dl`
  display: grid;
  gap: ${theme.spacing.sm} ${theme.spacing.md};
  grid-template-columns: 1fr;
  margin: ${theme.spacing.md} 0;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: max-content 1fr;
  }

  dt {
    font-weight: 600;
    color: ${theme.colors.accent};
  }

  dd {
    margin: 0;
  }
`;

const BulletList = styled.ul`
  margin: ${theme.spacing.md} 0 0 1.3rem;

  li {
    margin-bottom: ${theme.spacing.sm};
  }
`;

const NumberedList = styled.ol`
  margin: 0 0 0 1.4rem;

  li {
    margin-bottom: ${theme.spacing.md};
  }

  strong {
    color: ${theme.colors.accent};
  }
`;

const Problem = styled.div`
  margin-bottom: ${theme.spacing.md};

  strong {
    color: ${theme.colors.accent};
  }
`;

const Note = styled.p`
  background: rgba(246, 177, 122, 0.14);
  border-left: 4px solid ${theme.colors.accent};
  border-radius: 8px;
  padding: ${theme.spacing.md};
  margin: ${theme.spacing.md} 0;
`;

const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.sm};
  margin: ${theme.spacing.md} 0;
  text-align: center;

  div {
    background: rgba(255, 255, 255, 0.07);
    border-radius: 14px;
    padding: ${theme.spacing.md} ${theme.spacing.xs};
  }

  strong {
    display: block;
    font-family: ${theme.fonts.heading};
    font-size: 1.8em;
    line-height: 1.2;
    color: ${theme.colors.accent};
  }

  span {
    font-size: 0.85em;
  }
`;

const ResultTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    padding: ${theme.spacing.sm} 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }

  td:last-of-type {
    text-align: right;
    font-weight: 700;
    font-size: 1.2em;
    color: ${theme.colors.accent};
    width: 3rem;
  }

  small {
    display: block;
    opacity: 0.75;
    font-size: 0.85em;
  }
`;

const TextLink = styled.a`
  color: ${theme.colors.accent};
  font-weight: 600;
  text-decoration: underline;
  word-break: break-word;
`;

const FooterBlock = styled.footer`
  text-align: center;
  padding-top: ${theme.spacing.lg};
  font-size: 0.85em;
  opacity: 0.8;
`;

const Photos = ({ photos }: { photos: SkPhoto[] }) => (
  <PhotoGrid>
    {photos.map((photo) => (
      <figure key={photo.src}>
        <img src={photo.src} alt={photo.caption} loading="lazy" />
        <figcaption>{photo.caption}</figcaption>
      </figure>
    ))}
  </PhotoGrid>
);

const Results = ({ results }: { results: SkResult[] }) => (
  <ResultTable>
    <tbody>
      {results.map((result) => (
        <tr key={result.subject}>
          <td>
            {result.subject}
            {result.note && <small>{result.note}</small>}
          </td>
          <td>{result.grade}</td>
        </tr>
      ))}
    </tbody>
  </ResultTable>
);

const allResults = [...skStemResults, ...skOtherResults];
const gradeEights = allResults.filter((r) => r.grade === 8).length;
const gradeSevenPlus = allResults.filter((r) => r.grade >= 7).length;

const Sk = () => {
  useEffect(() => {
    // Keep this page out of search engines and tell the browser it is Slovak.
    // The static copy written by scripts/postbuild-sk.mjs carries the same
    // tags; everything is restored if the visitor moves on to the English site.
    const robots = document.querySelector('meta[name="robots"]');
    const previousRobots = robots?.getAttribute('content') ?? null;
    const previousLang = document.documentElement.lang;

    document.title = skMeta.title;
    document.documentElement.lang = 'sk';
    robots?.setAttribute('content', 'noindex, nofollow');
    window.scrollTo(0, 0);

    return () => {
      document.title = DEFAULT_TITLE;
      document.documentElement.lang = previousLang;
      if (previousRobots !== null) robots?.setAttribute('content', previousRobots);
    };
  }, []);

  return (
    <Page>
      <Column>
        <HeroBlock>
          <h1>{skHero.greeting}</h1>
          <h2>{skHero.role}</h2>
          <MetaLine>{skHero.meta}</MetaLine>
          <Intro>{skHero.intro}</Intro>
        </HeroBlock>

        <SectionBlock>
          <SectionHeading>{skJourney.heading}</SectionHeading>
          <p>{skJourney.intro}</p>
          {skMilestones.map((milestone) => (
            <Card key={milestone.title}>
              <Badge>{milestone.age}</Badge>
              <h3>{milestone.title}</h3>
              <p>{milestone.text}</p>
              {milestone.photos && <Photos photos={milestone.photos} />}
            </Card>
          ))}

          <SubHeading>{skJourney.sideHeading}</SubHeading>
          {skSideProjects.map((project) => (
            <Card key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <Photos photos={project.photos} />
            </Card>
          ))}
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>{skProjectsHeading}</SectionHeading>
          {skProjects.map((project) => (
            <Card key={project.title}>
              <WideImage src={project.image} alt={project.imageAlt} loading="lazy" />
              <h3>{project.title}</h3>
              <Tagline>{project.tagline}</Tagline>
              <p>{project.summary}</p>
              <FactList>
                {project.stats.map((stat) => (
                  <div key={stat.label} style={{ display: 'contents' }}>
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </FactList>
              <BulletList>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </BulletList>

              <SubHeading>{project.phasesHeading}</SubHeading>
              <NumberedList>
                {project.phases.map((phase) => (
                  <li key={phase.title}>
                    <strong>{phase.title}</strong>
                    <br />
                    {phase.text}
                  </li>
                ))}
              </NumberedList>

              {project.problems && (
                <>
                  <SubHeading>Problémy a ako som ich vyriešil</SubHeading>
                  {project.problems.map((item) => (
                    <Problem key={item.problem}>
                      <p>
                        <strong>Problém:</strong> {item.problem}
                      </p>
                      <p>
                        <strong>Riešenie:</strong> {item.solution}
                      </p>
                    </Problem>
                  ))}
                </>
              )}

              {project.outcomeImage && project.outcomeText && (
                <>
                  <SubHeading>Výsledok</SubHeading>
                  <WideImage src={project.outcomeImage} alt={project.title} loading="lazy" />
                  <p>{project.outcomeText}</p>
                </>
              )}
            </Card>
          ))}
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>{skEducation.heading}</SectionHeading>
          <p>{skEducation.intro}</p>
          <Note>{skEducation.gradeNote}</Note>
          <StatRow>
            <div>
              <strong>{allResults.length}</strong>
              <span>skúšok GCSE</span>
            </div>
            <div>
              <strong>{gradeEights}</strong>
              <span>známky 8</span>
            </div>
            <div>
              <strong>
                {gradeSevenPlus}/{allResults.length}
              </strong>
              <span>známka 7 a viac</span>
            </div>
          </StatRow>
          <Card>
            <h3>{skEducation.stemHeading}</h3>
            <Results results={skStemResults} />
          </Card>
          <Card>
            <h3>{skEducation.otherHeading}</h3>
            <Results results={skOtherResults} />
          </Card>
          <Card>
            <h3>{skEducation.nowHeading}</h3>
            <p>{skEducation.nowText}</p>
          </Card>
          <p style={{ marginTop: theme.spacing.md }}>{skEducation.tutoring}</p>
          <p style={{ marginTop: theme.spacing.sm, fontSize: '0.85em', opacity: 0.75 }}>
            {skEducation.footnote}
          </p>
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>{skSkillsHeading}</SectionHeading>
          {skSkills.map((group) => (
            <Card key={group.title}>
              <h3>{group.title}</h3>
              <BulletList>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}:</strong> {item.text}
                  </li>
                ))}
              </BulletList>
            </Card>
          ))}
        </SectionBlock>

        <SectionBlock>
          <SectionHeading>{skContact.heading}</SectionHeading>
          <p>{skContact.text}</p>
          <p style={{ marginTop: theme.spacing.md }}>
            <TextLink href={`mailto:${skMeta.email}`}>{skMeta.email}</TextLink>
          </p>
          <p style={{ marginTop: theme.spacing.sm }}>
            <TextLink href="https://github.com/a365l" target="_blank" rel="noopener noreferrer">
              {skContact.github}
            </TextLink>
          </p>
          <p style={{ marginTop: theme.spacing.sm }}>
            <TextLink
              href="https://www.linkedin.com/in/alfie-leigh-b02ba1385/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {skContact.linkedin}
            </TextLink>
          </p>
          <Button href="/Alfred-Leigh-CV.pdf" download>
            {skHero.cvLabel}
          </Button>
        </SectionBlock>

        <FooterBlock>
          <p>
            <TextLink href="/">{skContact.english}</TextLink>
          </p>
          <p style={{ marginTop: theme.spacing.sm }}>
            © {new Date().getFullYear()} Alfie Leigh
          </p>
        </FooterBlock>
      </Column>
    </Page>
  );
};

export default Sk;
