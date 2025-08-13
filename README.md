# Siddhi — Cat‑Themed Next.js Portfolio

A production‑ready portfolio for a Software Engineer with ~1 year of experience. Built with Next.js (App Router), Tailwind CSS, and TypeScript. Includes a lightweight, client‑only cat chatbot.

## Quickstart

```bash
npm install
npm run dev
```

## Scripts
- `dev` — start local dev server
- `build` — production build
- `start` — run production server
- `test` — run unit tests (Vitest + RTL)

## Environment
No env vars required. Contact API currently logs only. Wire to an email provider (e.g., Resend, SES, Formspree) for production.

## SEO
- App Router metadata configured in `app/layout.tsx`
- `app/sitemap.ts` and `app/robots.ts` generate sitemap & robots
- Update `lib/siteConfig.ts` with your final domain and social URLs

## Deploy (Vercel)
1. Go to [vercel.com/new] and choose **Import Project**.
2. If you have a GitHub repo, import it. Or click **Upload** and drop this zip.
3. Build command: `npm run build`  | Output: `.next`
4. After it deploys, add your custom domain and update `lib/siteConfig.ts` (`url` field).

## Content
- Update blog posts under `content/blog/`
- Replace `public/og.png` and `public/favicon.ico`
- Your resume PDF is at `/public/Siddhi_Gaikwad_Resume.pdf`

## Chatbot
- Client‑only. Knowledge base: `lib/chatbotData.ts`
- Fuzzy matcher: `lib/fuzzy.ts`
- Runs entirely in the browser

## Accessibility
- Semantic HTML, focus-visible, contrast, keyboard‑navigable

## License
MIT