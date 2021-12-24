import React, { useRef } from 'react';

import './manual-address.scss';

const ManualAddress = (props) => {
  const flatNumberRef = useRef(null);
  const buildingNumberRef = useRef(null);
  const buildingNameRef = useRef(null);
  const streetRef = useRef(null);
  const townRef = useRef(null);
  const postcodeRef = useRef(null);

  const onSubmitAddress = (event) => {
    event.preventDefault();

    const address = { flatNumber: flatNumberRef?.current?.value, buildingNumber: buildingNumberRef?.current?.value, buildingName: buildingNameRef?.current?.value, street: streetRef?.current?.value, town: townRef?.current?.value, postcode: postcodeRef?.current?.value };

    console.log(address);

    props.submitAddress(address);
  };

  return (
    <form onSubmit={onSubmitAddress.bind(this)}>
      <div className='form-group'>
        <label htmlFor='flatNumber'>Flat Number</label>
        <input id='flatNumber' name='flatNumber' ref={flatNumberRef} type='text' className='form-control' required />
      </div>

      <div className='form-group'>
        <label htmlFor='buildingNumber'>Building Number</label>
        <input id='buildingNumber' name='buildingNumber' ref={buildingNumberRef} type='text' className='form-control' required />
      </div>

      <div className='form-group'>
        <label htmlFor='buildingName'>Building Name</label>
        <input id='buildingName' name='buildingName' ref={buildingNameRef} type='text' className='form-control' required />
      </div>

      <div className='form-group'>
        <label htmlFor='street'>Street</label>
        <input id='street' name='street' ref={streetRef} type='text' className='form-control' />
      </div>

      <div className='form-group'>
        <label htmlFor='town'>Town</label>
        <input id='town' name='town' ref={townRef} type='text' className='form-control' required />
      </div>

      <div className='form-group'>
        <label htmlFor='postcode'>Postcode</label>
        <input id='postcode' name='postcode' ref={postcodeRef} type='text' className='form-control' required />
      </div>

      <div className='action-btn'>
        <button type='submit' className='submit-address-btn'>
          Submit
        </button>
        <button type='submit' className='cancel-address-btn' onClick={props.toggleManualAddressComp}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ManualAddress;
