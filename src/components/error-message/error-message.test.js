import { render, screen } from '@testing-library/react';
import React from 'react';

import ErrorMessage from './error-message';

test('should render error message', () => {
  render(<ErrorMessage>error message test</ErrorMessage>);

  const errorText = screen.getByText(/error message test/i);
  expect(errorText).toBeInTheDocument();
});
