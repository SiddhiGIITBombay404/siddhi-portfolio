import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-tabby/30 py-10 text-sm">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center opacity-80">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>
          <Link href="/sitemap.xml" className="underline">Sitemap</Link> ·
          <Link href="/robots.txt" className="underline ml-2">Robots</Link>
        </p>
      </div>
    </footer>
  );
}