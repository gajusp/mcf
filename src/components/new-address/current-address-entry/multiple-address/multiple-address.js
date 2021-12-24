import React, { useState } from 'react';

import './multiple-address.scss';

const MultipleAddress = (props) => {
  console.log('MultipleAddress --->>> ', props);

  const [selectedAddress, setSelectedAddress] = useState(undefined);

  const onSelectedAddress = (event) => {
    setSelectedAddress(event.target.value);
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

      <select className='form-control mb-4' onChange={onSelectedAddress}>
        <option>Select your address</option>
        {props.addressList?.possibleMatches.map((addressData, index) => {
          return (
            <option key={index} value={addressData.buildingName}>
              {addressData.buildingName}
            </option>
          );
        })}
      </select>

      <div className='mb-3'>
        <button className='btn btn-link btn-link-color ' onClick={props.toggleManualAddressComp}>
          I can't find my address in the list
        </button>
      </div>

      <div className='mb-2'>
        <button className='btn save-btn' onClick={props.submitAddress.bind(this, selectedAddress)}>
          Save
        </button>
      </div>
    </div>
  );
};

export default MultipleAddress;
