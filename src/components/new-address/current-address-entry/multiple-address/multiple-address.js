import React, { useState } from 'react';
import ErrorMessage from '../../../error-message/error-message';
import { ERROR_MESSAGE_CONSTANT } from '../../../../constants/error-message.constant';

import './multiple-address.scss';

const MultipleAddress = (props) => {
  const [selectedAddress, setSelectedAddress] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(null);

  const onAddressChange = (event) => {
    setSelectedAddress(event.target.value);

    setErrorMessage(null);
  };

  const onSubmitAddress = (event) => {
    event.preventDefault();

    if (!selectedAddress || selectedAddress === 'Select your address') {
      setErrorMessage(ERROR_MESSAGE_CONSTANT.SELECT_ADDRESS_REQUIRED);

      return;
    }

    props.submitAddress(selectedAddress);
  };

  return (
    <div className='multiple-address-content'>
      <div className='postcode-content mb-4'>
        <div className='title-postcode'>
          <div>
            <strong>Postcode</strong>
          </div>
          <div className='postcode'>
            <strong>{props.postcodeValue}</strong>
          </div>
        </div>
        <div className='change-btn'>
          <button className='btn btn-link btn-link-color' onClick={props.toggleAddressComp}>
            Change
          </button>
        </div>
      </div>

      <select className='form-control mb-2' onChange={onAddressChange}>
        <option>Select your address</option>
        {props.addressList?.possibleMatches?.length > 0 &&
          props.addressList?.possibleMatches.map((addressData, index) => {
            return (
              <option key={index} value={addressData.buildingName}>
                {addressData.buildingName}
              </option>
            );
          })}
      </select>

      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : ''}

      <div className='mb-3'>
        <button className='btn btn-link btn-link-color ' onClick={props.toggleManualAddressComp}>
          I can't find my address in the list
        </button>
      </div>

      <div className='mb-2'>
        <button className='btn save-btn' onClick={onSubmitAddress}>
          Save
        </button>
      </div>
    </div>
  );
};

export default MultipleAddress;
