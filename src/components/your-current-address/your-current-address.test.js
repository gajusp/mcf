import { render, screen } from '@testing-library/react';
import React from 'react';
import * as ReactDOM from 'react-dom';

import YourCurrentAddress from './your-current-address';

test('should render your current address component', () => {
  render(<YourCurrentAddress></YourCurrentAddress>);

  const titleText = screen.getByText(/ASHDALE RAOD/i);
  expect(titleText).toBeInTheDocument();
});

test("should render button can't find my address", () => {
  const root = document.createElement('div');
  ReactDOM.render(<YourCurrentAddress />, root);

  expect(root.querySelector('button').textContent).toBe('This is not my current address');
});
