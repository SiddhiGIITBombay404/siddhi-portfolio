import { HTMLAttributes } from 'react';
import clsx from 'clsx';
export default function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={clsx('rounded-full bg-tabby/30 px-3 py-1 text-xs font-medium text-mocha dark:text-cream', className)}
    />
  );
}