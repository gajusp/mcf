import { render, screen } from '@testing-library/react';
import React from 'react';

import AddressModal from './address-modal';

test('should render address modal component', () => {
  render(<AddressModal showModal={true} closePopupEvent={() => {}}></AddressModal>);

  const titleText = screen.getByText(/Add a new address/i);
  expect(titleText).toBeInTheDocument();
});
