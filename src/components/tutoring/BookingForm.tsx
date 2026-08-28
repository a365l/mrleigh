import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { theme } from '../../styles/theme';
import { stations, subjects, tutoringConfig } from '../../data/tutoring';
import { Section, SectionTitle, SectionIntro, fadeUp } from './shared';

const FormCard = styled(motion.form)`
  max-width: 720px;
  margin: 0 auto;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid rgba(246, 177, 122, 0.25);
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const Row = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.textLight};
  font-size: 0.9rem;
  font-weight: 500;

  input,
  select,
  textarea {
    background: rgba(42, 45, 62, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.body};
    font-size: 0.95rem;
    transition: border-color ${theme.transitions.default};

    &:focus {
      outline: none;
      border-color: ${theme.colors.accent};
    }
  }

  textarea {
    resize: vertical;
    min-height: 110px;
  }

  select option {
    background: ${theme.colors.primary};
  }
`;

const GroupLabel = styled.p`
  color: ${theme.colors.textLight};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: ${theme.spacing.xs};
`;

const ChoiceRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const Chip = styled.label<{ checked: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: 20px;
  border: 1px solid
    ${(props) => (props.checked ? theme.colors.accent : 'rgba(255, 255, 255, 0.2)')};
  background: ${(props) =>
    props.checked ? 'rgba(246, 177, 122, 0.18)' : 'transparent'};
  color: ${(props) => (props.checked ? theme.colors.accent : theme.colors.textLight)};
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all ${theme.transitions.default};
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${theme.colors.gradient.accent};
  color: ${theme.colors.textDark};
  font-weight: 700;
  font-size: 1.05rem;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: 30px;
  transition: all ${theme.transitions.default};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${theme.colors.overlay.dark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

const MicroCopy = styled.p`
  color: ${theme.colors.textLight};
  opacity: 0.6;
  font-size: 0.82rem;
  text-align: center;
  line-height: 1.6;
`;

const StatusPanel = styled(motion.div)<{ error?: boolean }>`
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid
    ${(props) => (props.error ? 'rgba(255, 120, 120, 0.5)' : theme.colors.accent)};
  padding: ${theme.spacing.xl};

  h3 {
    color: ${(props) => (props.error ? '#ff9d9d' : theme.colors.accent)};
    margin-bottom: ${theme.spacing.sm};
  }

  p {
    color: ${theme.colors.textLight};
    opacity: 0.9;
    line-height: 1.7;
  }

  a {
    color: ${theme.colors.accent};
    font-weight: 600;
  }
`;

const yearGroups = [
  'Year 11',
  'Year 10',
  'Year 9',
  'Year 8',
  'Year 7',
  'Primary',
  'Other',
];

const subjectOptions = [...subjects.map((s) => s.name), 'Other'];

interface FormState {
  role: string;
  name: string;
  email: string;
  phone: string;
  yearGroup: string;
  chosenSubjects: string[];
  format: string;
  station: string;
  message: string;
  times: string;
}

const initialState: FormState = {
  role: 'Parent / guardian',
  name: '',
  email: '',
  phone: '',
  yearGroup: 'Year 11',
  chosenSubjects: [],
  format: 'Online',
  station: '',
  message: '',
  times: '',
};

export const BookingForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));

  const toggleSubject = (name: string) =>
    setForm((f) => ({
      ...f,
      chosenSubjects: f.chosenSubjects.includes(name)
        ? f.chosenSubjects.filter((s) => s !== name)
        : [...f.chosenSubjects, name],
    }));

  const inPerson = form.format !== 'Online';

  const summaryLines = () => [
    `Enquiry from: ${form.name} (${form.role})`,
    `Email: ${form.email}`,
    form.phone ? `Phone: ${form.phone}` : '',
    `Student year group: ${form.yearGroup}`,
    `Subjects: ${form.chosenSubjects.join(', ') || 'Not specified'}`,
    `Format: ${form.format}`,
    inPerson && form.station ? `Nearest station: ${form.station}` : '',
    '',
    'What they would like help with:',
    form.message,
    '',
    form.times ? `Preferred days/times: ${form.times}` : '',
  ].filter((line, i, arr) => line !== '' || arr[i - 1] !== '');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: if the hidden field is filled, a bot did it. Pretend success.
    const honeypot = (e.currentTarget.elements.namedItem('botcheck') as HTMLInputElement)
      ?.value;
    if (honeypot) {
      setStatus('sent');
      return;
    }

    // No Web3Forms key yet — fall back to the visitor's email client.
    if (!tutoringConfig.web3formsAccessKey) {
      const body = encodeURIComponent(summaryLines().join('\n'));
      const subject = encodeURIComponent('Tutoring enquiry — alfred-leigh.co.uk');
      window.location.href = `mailto:${tutoringConfig.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: tutoringConfig.web3formsAccessKey,
          subject: 'New tutoring enquiry — alfred-leigh.co.uk',
          from_name: form.name,
          email: form.email,
          role: form.role,
          phone: form.phone || 'Not given',
          year_group: form.yearGroup,
          subjects: form.chosenSubjects.join(', ') || 'Not specified',
          format: form.format,
          nearest_station: inPerson ? form.station || 'Not given' : 'n/a (online)',
          message: form.message,
          preferred_times: form.times || 'Not given',
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <Section id="book" aria-label="Booking">
        <div className="container">
          <SectionTitle
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Book a free first session
          </SectionTitle>
          <StatusPanel initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h3>Thanks — enquiry on its way</h3>
            <p>
              I'll reply within 24 hours, usually sooner, and the first step
              will be arranging the free diagnostic session at a time that
              works for you.
            </p>
          </StatusPanel>
        </div>
      </Section>
    );
  }

  return (
    <Section id="book" aria-label="Booking">
      <div className="container">
        <SectionTitle
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Book a free first session
        </SectionTitle>
        <SectionIntro
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Two minutes, no commitment. I reply within 24 hours.
        </SectionIntro>
        <FormCard
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Honeypot — hidden from humans, tempting to bots */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            aria-hidden="true"
            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
          />

          <div>
            <GroupLabel>I am a…</GroupLabel>
            <ChoiceRow role="radiogroup" aria-label="Are you a parent or a student?">
              {['Parent / guardian', 'Student'].map((role) => (
                <Chip key={role} checked={form.role === role}>
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={form.role === role}
                    onChange={() => set({ role })}
                  />
                  {role}
                </Chip>
              ))}
            </ChoiceRow>
          </div>

          <Row>
            <Field>
              Your name *
              <input
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => set({ name: e.target.value })}
              />
            </Field>
            <Field>
              Email *
              <input
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => set({ email: e.target.value })}
              />
            </Field>
          </Row>

          <Row>
            <Field>
              Phone (optional)
              <input
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => set({ phone: e.target.value })}
              />
            </Field>
            <Field>
              Student's year group
              <select
                value={form.yearGroup}
                onChange={(e) => set({ yearGroup: e.target.value })}
              >
                {yearGroups.map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </Field>
          </Row>

          <div>
            <GroupLabel>Subject(s)</GroupLabel>
            <ChoiceRow aria-label="Subjects needed">
              {subjectOptions.map((name) => (
                <Chip key={name} checked={form.chosenSubjects.includes(name)}>
                  <input
                    type="checkbox"
                    checked={form.chosenSubjects.includes(name)}
                    onChange={() => toggleSubject(name)}
                  />
                  {name}
                </Chip>
              ))}
            </ChoiceRow>
          </div>

          <div>
            <GroupLabel>Format</GroupLabel>
            <ChoiceRow role="radiogroup" aria-label="Session format">
              {['Online', 'In person', 'Either'].map((format) => (
                <Chip key={format} checked={form.format === format}>
                  <input
                    type="radio"
                    name="format"
                    value={format}
                    checked={form.format === format}
                    onChange={() => set({ format })}
                  />
                  {format}
                </Chip>
              ))}
            </ChoiceRow>
          </div>

          {inPerson && (
            <Field>
              Nearest Central line station
              <select
                value={form.station}
                onChange={(e) => set({ station: e.target.value })}
              >
                <option value="">Choose a station…</option>
                {stations.map((s) => (
                  <option key={s}>{s}</option>
                ))}
                <option>Other / not sure</option>
              </select>
            </Field>
          )}

          <Field>
            What would you like help with? *
            <textarea
              required
              placeholder="e.g. Year 10, struggling with Physics equations and maths confidence before mocks…"
              value={form.message}
              onChange={(e) => set({ message: e.target.value })}
            />
          </Field>

          <Field>
            Preferred days / times (optional)
            <input
              type="text"
              placeholder="e.g. weekday evenings, Saturday mornings"
              value={form.times}
              onChange={(e) => set({ times: e.target.value })}
            />
          </Field>

          <SubmitButton
            type="submit"
            disabled={status === 'sending'}
            whileTap={{ scale: 0.97 }}
          >
            {status === 'sending' ? 'Sending…' : 'Send enquiry'}
          </SubmitButton>

          {status === 'error' && (
            <StatusPanel error initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3>That didn't send</h3>
              <p>
                Sorry — something went wrong. Please email me directly at{' '}
                <a href={`mailto:${tutoringConfig.email}`}>{tutoringConfig.email}</a>{' '}
                and I'll get straight back to you.
              </p>
            </StatusPanel>
          )}

          <MicroCopy>
            Under 16? Please ask a parent or guardian to send this, or include
            their contact details. Your details are only used to reply to this
            enquiry — nothing else.
          </MicroCopy>
        </FormCard>
      </div>
    </Section>
  );
};
