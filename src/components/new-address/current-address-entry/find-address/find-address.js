import React from 'react';
import './find-address.scss';

const FindAddress = (props) => {
  let postcodeValue;

  const onFindAddress = (event) => {
    event.preventDefault();

    props.toggleAddressComp({ postcode: postcodeValue });
  };

  const postcodeChange = (event) => {
    console.log(event.target.value);
    postcodeValue = event.target.value;
  };

  return (
    <div className='find-address-content'>
      <strong>
        <label className='mb-2'>What's your current address</label>
      </strong>

      <form onSubmit={onFindAddress.bind(this)}>
        <div className='enter-postcode mb-2'>
          <input type='text' placeholder='Enter postcode' className='form-control' onChange={postcodeChange.bind(this)} required></input>
          {/* <span style={{ color: "red" }}></span> */}

          <button type='submit' className='find-address-btn'>
            Find address
          </button>
        </div>
      </form>

      <button className='btn btn-link btn-link-color' onClick={props.toggleManualAddressComp}>
        Enter address manually
      </button>
    </div>
  );
};

export default FindAddress;
