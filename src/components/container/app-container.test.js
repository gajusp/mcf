import { render, screen } from '@testing-library/react';
import React from 'react';

import AppContainer from './app-container';

test('should render container', () => {
  render(
    <AppContainer>
      <h2>This is sample test message</h2>
      <div>This container is responsive</div>
    </AppContainer>
  );

  const titleText = screen.getByText(/This is sample test message/i);
  expect(titleText).toBeInTheDocument();
});
