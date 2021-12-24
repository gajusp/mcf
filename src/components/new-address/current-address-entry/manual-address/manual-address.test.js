import { render } from '@testing-library/react';
import React from 'react';

import ManualAddress from './manual-address';

test('should render manual address component', () => {
  const { getByText } = render(<ManualAddress toggleManualAddressComp={() => {}} submitAddress={() => {}}></ManualAddress>);

  expect(getByText('Flat Number')).toBeInTheDocument();
});
