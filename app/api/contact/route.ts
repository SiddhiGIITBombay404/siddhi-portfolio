import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const form = await req.formData();
  if (form.get('company')) return NextResponse.json({ ok: true });

  const name = String(form.get('name') || '');
  const email = String(form.get('email') || '');
  const message = String(form.get('message') || '');

  if (!name || !email || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  console.log({ name, email, message });
  return NextResponse.json({ ok: true });
}