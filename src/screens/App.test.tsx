import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders swapper Fi intro', () => {
  render(<App />);
  const linkElement = screen.getByText(/Swapper fi - All in one Defi Tracker for Ethereum and BSC/i);
  expect(linkElement).toBeInTheDocument();
});
