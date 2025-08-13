'use client';
import { useEffect, useRef, useState } from 'react';
import { kb } from '@/lib/chatbotData';
import { bestMatch } from '@/lib/fuzzy';

export default function CatChatbot() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    { role: 'bot', text: 'Meow! I\'m Neko, your purr-sonal career guide. Ask about Siddhi\'s skills, projects, or experience.' }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  function ask(text: string) {
    const match = bestMatch(text, kb);
    const answer = match ? match.a : "Hmm… I'm just a little cat. Try asking about skills, projects, experience, or resume.";
    setMessages((m) => [...m, { role: 'user', text }, { role: 'bot', text: answer }]);
  }

  return (
    <div>
      <button
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        onClick={() => setOpen(!open)}
        className="btn-wiggle fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-paw text-2xl shadow-soft focus-visible:ring-2"
      >
        {open ? '✖' : '🐾'}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed bottom-24 right-5 z-50 w-80 rounded-2xl border border-tabby/40 bg-cream p-4 shadow-soft dark:bg-midnight"
        >
          <div className="mb-2 flex items-center gap-2">
            <span className="text-2xl">🐱</span>
            <div className="text-sm"><strong>Neko</strong> · Catbot</div>
          </div>
          <div className="mb-2 max-h-64 space-y-2 overflow-auto rounded-xl border border-tabby/30 p-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'bot' ? 'text-mocha' : 'text-midnight dark:text-cream'}>
                <span className="mr-1 select-none">{m.role === 'bot' ? '🐾' : '🙂'}</span>
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); if (q.trim()) { ask(q.trim()); setQ(''); } }}
            className="flex gap-2"
          >
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Ask about skills, projects…"
              className="flex-1 rounded-xl border border-tabby/40 bg-white/80 p-2 text-sm text-midnight focus-visible:ring-paw dark:bg-midnight"
            />
            <button className="rounded-xl bg-paw px-3 text-sm font-medium text-midnight">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}