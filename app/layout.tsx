import '@/styles/globals.css';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { siteConfig } from '@/lib/siteConfig';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatChatbot from '@/components/CatChatbot';
import { ThemeProvider } from 'next-themes';
import type { Metadata, Viewport } from 'next';

const inter = Inter({ subsets: ['latin'] });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const viewport: Viewport = {
  themeColor: '#F2C14E'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website'
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrains.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:rounded focus:bg-paw focus:px-3 focus:py-2 focus:text-midnight">Skip to content</a>
          <Header />
          <main id="content">{children}</main>
          <Footer />
          <CatChatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
