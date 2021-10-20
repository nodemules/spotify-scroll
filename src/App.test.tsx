import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders spotify link', () => {
  render(<App />);
  const linkElement = screen.getByText(/spotify/i);
  expect(linkElement).toBeInTheDocument();
});
