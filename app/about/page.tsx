import Section from '@/components/Section';
import SkillBar from '@/components/SkillBar';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <Section>
      <h2 className="text-3xl font-bold">About</h2>
      <p className="mt-4 max-w-3xl">
        I'm Siddhi Gaikwad, a Software Engineer and IIT Bombay graduate. Over the past year, I've built a supplier
        compliance platform, production APIs, and ML projects. I enjoy untangling data problems, designing RESTful
        flows, and collaborating across teams.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <SkillBar label="Java / Spring Boot" level={80} />
        <SkillBar label="Python / Data" level={75} />
        <SkillBar label="PostgreSQL / SQL" level={70} />
        <SkillBar label="AWS S3 / Cloud" level={65} />
        <SkillBar label="TensorFlow / DL" level={60} />
        <SkillBar label="Frontend (React/TS)" level={65} />
      </div>

      <div className="mt-8">
        <Link href="/Siddhi_Gaikwad_Resume.pdf" className="underline">Download Resume (PDF)</Link>
      </div>
    </Section>
  );
}