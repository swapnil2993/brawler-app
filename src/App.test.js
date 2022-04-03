import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Brawler app text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Brawler app/i);
  expect(linkElement).toBeInTheDocument();
});
