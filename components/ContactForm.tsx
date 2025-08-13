'use client';
import { useState } from 'react';
import Button from './Button';

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    const res = await fetch('/api/contact', { method: 'POST', body: formData });
    const data = await res.json();
    setLoading(false);
    setStatus(data.ok ? 'Thanks! I\'ll get back to you soon.' : 'Something went wrong.');
  }

  return (
    <form action={onSubmit} className="space-y-4" noValidate>
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <div>
        <label className="block text-sm font-medium" htmlFor="name">Name</label>
        <input id="name" name="name" required minLength={2} className="mt-1 w-full rounded-xl border border-tabby/40 bg-white/70 p-3 text-midnight placeholder:opacity-60 focus-visible:ring-paw dark:bg-midnight" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-tabby/40 bg-white/70 p-3 text-midnight placeholder:opacity-60 focus-visible:ring-paw dark:bg-midnight" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="message">Message</label>
        <textarea id="message" name="message" required minLength={10} className="mt-1 w-full rounded-xl border border-tabby/40 bg-white/70 p-3 text-midnight placeholder:opacity-60 focus-visible:ring-paw dark:bg-midnight" rows={5} placeholder="How can I help?" />
      </div>
      <Button type="submit" disabled={loading}>{loading ? 'Sending…' : 'Send Message'}</Button>
      {status && <div role="status" className="text-sm opacity-80">{status}</div>}
    </form>
  );
}