'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div aria-hidden />;
  const isDark = (resolvedTheme ?? theme) === 'dark';
  return (
    <button
      className="rounded-full p-2 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-paw"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}