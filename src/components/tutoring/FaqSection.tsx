import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { theme } from '../../styles/theme';
import { faqs, testimonials } from '../../data/tutoring';
import { Section, SectionTitle, fadeUp, stagger } from './shared';

const FaqList = styled(motion.div)`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const FaqItem = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
`;

const Question = styled.button<{ open: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  color: ${theme.colors.light};
  font-family: ${theme.fonts.heading};
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  transition: all ${theme.transitions.default};

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  span.chevron {
    color: ${theme.colors.accent};
    transition: transform ${theme.transitions.default};
    transform: rotate(${(props) => (props.open ? '45deg' : '0deg')});
    font-size: 1.3rem;
    line-height: 1;
    flex-shrink: 0;
  }
`;

const Answer = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  padding: 0 ${theme.spacing.lg} ${theme.spacing.md};
  color: ${theme.colors.textLight};
  opacity: 0.88;
  line-height: 1.75;
  font-size: 0.95rem;
`;

const TestimonialGrid = styled(motion.div)`
  display: grid;
  gap: ${theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 900px;
  margin: 0 auto ${theme.spacing.xl};
`;

const TestimonialCard = styled(motion.blockquote)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border-left: 4px solid ${theme.colors.accent};
  padding: ${theme.spacing.lg};

  p {
    color: ${theme.colors.textLight};
    font-style: italic;
    line-height: 1.7;
    margin-bottom: ${theme.spacing.sm};
  }

  footer {
    color: ${theme.colors.accent};
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" aria-label="Frequently asked questions">
      <div className="container">
        {testimonials.length > 0 && (
          <>
            <SectionTitle
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              What parents say
            </SectionTitle>
            <TestimonialGrid
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} variants={fadeUp}>
                  <p>“{t.quote}”</p>
                  <footer>
                    {t.name}
                    {t.detail ? `, ${t.detail}` : ''}
                  </footer>
                </TestimonialCard>
              ))}
            </TestimonialGrid>
          </>
        )}
        <SectionTitle
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Questions parents ask
        </SectionTitle>
        <FaqList
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <FaqItem key={faq.q} variants={fadeUp}>
                <Question
                  open={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                >
                  {faq.q}
                  <span className="chevron" aria-hidden="true">
                    +
                  </span>
                </Question>
                <Answer open={open} id={`faq-answer-${i}`} role="region">
                  {faq.a}
                </Answer>
              </FaqItem>
            );
          })}
        </FaqList>
      </div>
    </Section>
  );
};
