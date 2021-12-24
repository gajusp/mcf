import React, { useRef, useState } from 'react';

import ErrorMessage from '../../../error-message/error-message';
import './find-address.scss';

const FindAddress = (props) => {
  const [postcodeValue, setPostcodeValue] = useState(null);

  const postcodeRef = useRef(null);

  const onFindAddress = (event) => {
    event.preventDefault();

    props.toggleAddressComp({ postcode: postcodeValue });
  };

  const postcodeChange = (event) => {
    setPostcodeValue(postcodeRef?.current?.value);

    // postcodeValue = event.target.value;
  };

  return (
    <div className='find-address-content'>
      <strong>
        <label className='mb-2'>What's your current address?</label>
      </strong>

      <form onSubmit={onFindAddress.bind(this)}>
        <div className='enter-postcode mb-2'>
          <input type='text' placeholder='Enter postcode' className='form-control ' ref={postcodeRef} onChange={postcodeChange.bind(this)}></input>

          <button type='submit' className='btn primary find-address-btn'>
            Find address
          </button>
        </div>

        {props.errorMessage ? <ErrorMessage>{props.errorMessage}</ErrorMessage> : ''}
      </form>

      <button className='btn btn-green-link' onClick={props.toggleManualAddressComp}>
        Enter address manually
      </button>
    </div>
  );
};

export default FindAddress;
