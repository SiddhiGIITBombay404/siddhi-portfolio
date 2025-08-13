import { HTMLAttributes } from 'react';
import clsx from 'clsx';
export default function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section {...props} className={clsx('mx-auto max-w-5xl px-6 py-16', className)} />
  );
}