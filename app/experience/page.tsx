import Section from '@/components/Section';
import Timeline from '@/components/Timeline';

export default function ExperiencePage() {
  const items = [
    {
      role: 'Software Engineer (Data Analyst)',
      org: 'Cargill',
      period: 'Jun 2024 – Jan 2025 · Bangalore, IN',
      bullets: [
        'Built scalable compliance APIs for supplier traceability (upload, inline edit, delete, realtime reporting).',
        'Centralized records across PostgreSQL and AWS S3 improving data integrity and security.',
        'Delivered MVP in 18 weeks; reduced manual processing by ~70%.'
      ]
    },
    {
      role: 'Data Analyst Intern',
      org: 'World Of Steel',
      period: 'May 2023 – Jul 2023 · Mumbai, IN',
      bullets: [
        'Analyzed product data of 10K+ firms; identified high‑ROI leads via Salesforce and Excel.',
        'Designed WordPress pages, added meta tags improving SEO visibility.',
        'Integrated global dataset across 50+ countries; grew customer DB by ~15%.'
      ]
    }
  ];
  return (
    <Section>
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="mt-8">
        <Timeline items={items} />
      </div>
    </Section>
  );
}