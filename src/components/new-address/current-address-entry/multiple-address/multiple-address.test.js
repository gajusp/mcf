import { render } from '@testing-library/react';
import React from 'react';

import MultipleAddress from './multiple-address';

test('should render Multiple address component', () => {
  const { getByText } = render(<MultipleAddress></MultipleAddress>);

  expect(getByText("What's your current address?")).toBeInTheDocument();
  expect(getByText('Postcode')).toBeInTheDocument();
  expect(getByText('Change')).toBeInTheDocument();

  expect(getByText("I can't find my address in the list")).toBeInTheDocument();
  expect(getByText('Save')).toBeInTheDocument();
});
