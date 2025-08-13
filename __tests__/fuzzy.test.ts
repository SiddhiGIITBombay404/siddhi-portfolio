import { bestMatch } from '@/lib/fuzzy';

const kb = [
  { q: 'skills', a: '…' },
  { q: 'projects', a: '…' }
];

test('bestMatch prefers close string', () => {
  const res = bestMatch('skill', kb);
  expect(res?.q).toBe('skills');
});