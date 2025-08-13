import { render, screen } from '@testing-library/react';
import ThemeToggle from '@/components/ThemeToggle';
import { ThemeProvider } from 'next-themes';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

test('renders theme toggle button', () => {
  render(
    <Wrapper>
      <ThemeToggle />
    </Wrapper>
  );
  const btn = screen.getByRole('button', { name: /toggle color theme/i });
  expect(btn).toBeInTheDocument();
});