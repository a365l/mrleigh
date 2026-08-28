import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { tiers, tutoringConfig } from '../../data/tutoring';
import { Section, SectionTitle, SectionIntro, fadeUp, stagger } from './shared';

const TierGrid = styled(motion.div)`
  display: grid;
  gap: ${theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: stretch;
`;

const TierCard = styled(motion.div)<{ highlight?: boolean }>`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid
    ${(props) => (props.highlight ? theme.colors.accent : 'rgba(255, 255, 255, 0.06)')};
  box-shadow: ${(props) =>
    props.highlight
      ? '0 8px 32px rgba(246, 177, 122, 0.25)'
      : '0 8px 32px rgba(0, 0, 0, 0.15)'};
`;

const Ribbon = styled.span`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  font-size: 0.78rem;
  font-weight: 700;
  padding: 4px 16px;
  border-radius: 14px;
  white-space: nowrap;
`;

const TierName = styled.h3`
  color: ${theme.colors.light};
  font-size: 1.25rem;
  margin-bottom: ${theme.spacing.sm};
  text-align: center;
`;

const Price = styled.p`
  text-align: center;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.accent};

  strong {
    font-family: ${theme.fonts.heading};
    font-size: 2rem;
    font-weight: 700;
  }

  span {
    display: block;
    font-size: 0.85rem;
    color: ${theme.colors.textLight};
    opacity: 0.7;
  }
`;

const Tagline = styled.p`
  text-align: center;
  color: ${theme.colors.textLight};
  opacity: 0.85;
  font-size: 0.92rem;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

const Includes = styled.ul`
  list-style: none;
  margin-top: auto;

  li {
    color: ${theme.colors.textLight};
    opacity: 0.88;
    font-size: 0.9rem;
    line-height: 1.6;
    padding: ${theme.spacing.xs} 0 ${theme.spacing.xs} 1.4rem;
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: ${theme.colors.accent};
      font-weight: 700;
    }
  }
`;

const Banner = styled(motion.p)`
  text-align: center;
  color: ${theme.colors.textDark};
  background: ${theme.colors.gradient.accent};
  border-radius: 20px;
  font-weight: 600;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  max-width: 420px;
  margin: 0 auto ${theme.spacing.lg};
`;

const FreeNote = styled(motion.p)`
  text-align: center;
  color: ${theme.colors.textLight};
  opacity: 0.8;
  font-size: 0.95rem;
  margin-top: ${theme.spacing.lg};

  strong {
    color: ${theme.colors.accent};
  }
`;

export const PricingSection = () => (
  <Section id="pricing" aria-label="Pricing">
    <div className="container">
      <SectionTitle
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Pricing
      </SectionTitle>
      <SectionIntro
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Three levels, priced by what you actually get: an hour, a month of
        structure, or a full exam campaign.
      </SectionIntro>
      {tutoringConfig.slotsBanner && (
        <Banner
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tutoringConfig.slotsBanner}
        </Banner>
      )}
      <TierGrid
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {tiers.map((tier) => (
          <TierCard key={tier.id} highlight={tier.highlight} variants={fadeUp}>
            {tier.highlight && <Ribbon>Most useful</Ribbon>}
            <TierName>{tier.name}</TierName>
            <Price>
              from <strong>£{tier.price ?? 'TBD'}</strong>
              <span>{tier.unit}</span>
            </Price>
            <Tagline>{tier.tagline}</Tagline>
            <Includes>
              {tier.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Includes>
          </TierCard>
        ))}
      </TierGrid>
      <FreeNote
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <strong>The first session is always free.</strong> Prices are confirmed
        with you before anything is booked. No surprises.
      </FreeNote>
    </div>
  </Section>
);
