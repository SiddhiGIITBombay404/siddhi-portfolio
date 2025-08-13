'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 rounded-lg focus-visible:ring-2 focus-visible:ring-paw">
      <Image src="/cat.svg" alt="Cat logo" width={28} height={28} />
      <span className="font-semibold">Siddhi</span>
    </Link>
  );
}