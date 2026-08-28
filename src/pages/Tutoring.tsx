import { useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { TutoringHero } from '../components/tutoring/TutoringHero';
import { WhyMe } from '../components/tutoring/WhyMe';
import { SubjectsSection } from '../components/tutoring/SubjectsSection';
import { HowItWorks } from '../components/tutoring/HowItWorks';
import { PricingSection } from '../components/tutoring/PricingSection';
import { CoverageSection } from '../components/tutoring/CoverageSection';
import { FaqSection } from '../components/tutoring/FaqSection';
import { BookingForm } from '../components/tutoring/BookingForm';
import { faqs, stations, tutoringSections } from '../data/tutoring';

const DEFAULT_TITLE = 'Alfred Leigh - Aspiring Aerospace Engineer';
const PAGE_TITLE = 'GCSE Tutoring — Maths, Physics & Computer Science | Alfred Leigh';

// Structured data for Google: the tutoring service + FAQ rich results.
// Injected at runtime (Google renders JS); static meta lives in the
// prerendered /tutoring/index.html written by scripts/postbuild-tutoring.mjs.
const buildJsonLd = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'GCSE Tutoring with Alfred Leigh',
      serviceType: 'Tutoring',
      description:
        'GCSE tutoring in Maths, Physics and Computer Science — online, or in person near Central line stations from Epping to Woodford. Free diagnostic first session.',
      url: 'https://alfred-leigh.co.uk/tutoring',
      provider: {
        '@type': 'Person',
        name: 'Alfred Leigh',
        url: 'https://alfred-leigh.co.uk/',
        email: 'alfie@alfred-leigh.co.uk',
      },
      areaServed: stations.map((s) => ({ '@type': 'Place', name: `${s}, London` })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
});

const Tutoring = () => {
  useEffect(() => {
    document.title = PAGE_TITLE;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'tutoring-jsonld';
    script.textContent = JSON.stringify(buildJsonLd());
    document.head.appendChild(script);
    window.scrollTo(0, 0);

    return () => {
      document.title = DEFAULT_TITLE;
      document.getElementById('tutoring-jsonld')?.remove();
    };
  }, []);

  return (
    <Layout sections={tutoringSections}>
      <TutoringHero />
      <WhyMe />
      <SubjectsSection />
      <HowItWorks />
      <PricingSection />
      <CoverageSection />
      <FaqSection />
      <BookingForm />
    </Layout>
  );
};

export default Tutoring;
