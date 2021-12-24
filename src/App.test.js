import { render, screen } from '@testing-library/react';

import App from './App';

test('renders app tile', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Community Finance - Address component test/i);
  expect(linkElement).toBeInTheDocument();
});
