import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders game', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Legendary Tic Tac Toe/i);
  expect(headerElement).toBeInTheDocument();
});
