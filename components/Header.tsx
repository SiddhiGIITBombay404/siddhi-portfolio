'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-tabby/30 backdrop-blur supports-[backdrop-filter]:bg-cream/80 dark:supports-[backdrop-filter]:bg-midnight/60">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Logo />
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                className={`text-sm ${pathname === l.href ? 'font-semibold underline decoration-paw' : 'opacity-90 hover:opacity-100'}`}
                href={l.href}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}