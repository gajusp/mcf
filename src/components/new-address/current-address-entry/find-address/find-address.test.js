import { render } from '@testing-library/react';
import React from 'react';

import FindAddress from './find-address';

test('should render find address component', () => {
  const { getByText } = render(<FindAddress></FindAddress>);

  expect(getByText("What's your current address?")).toBeInTheDocument();
  expect(getByText('Find address')).toBeInTheDocument();
  expect(getByText('Enter address manually')).toBeInTheDocument();
});
