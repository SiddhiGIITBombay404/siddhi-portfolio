import Section from '@/components/Section';
import Button from '@/components/Button';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Section className="pt-24 text-center">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-tabby/20 px-4 py-2 text-sm">
          <span>🐱 Cat‑themed Portfolio</span>
          <span className="opacity-70">Built with Next.js + Tailwind</span>
        </p>
        <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">Hi, I&apos;m Siddhi — I ship reliable software, fast.</h1>
        <p className="mx-auto mt-4 max-w-2xl opacity-90">
          Software Engineer (IIT Bombay) with ~1 year experience building data platforms and APIs. I turn business rules
          into clean, testable code — with a sprinkle of cat energy.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/projects"><Button>View Projects</Button></Link>
          <Link href="#contact"><Button className="bg-tabby text-cream">Contact Me</Button></Link>
        </div>
      </Section>
    </>
  );
}