import React, { useState } from 'react';

import AddressModal from '../new-address/address-modal/address-modal';

import './your-current-address.scss';

const YourCurrentAddress = () => {
  const [showModal, setShowModal] = useState(false);
  const [addressObj, setAddressObj] = useState(null);

  const onAddressPopup = (selectedAddress) => {
    console.log('YourCurrentAddress ---> onAddressPopup--- ', selectedAddress);

    if (selectedAddress?.postcode) {
      setAddressObj(selectedAddress);
    }

    setShowModal(!showModal);
  };

  return (
    <div className='your-address-container'>
      {addressObj && addressObj?.buildingName ? (
        <div>
          <div>{addressObj?.flatNumber || addressObj?.buildingName || ''}</div>
          <div>{addressObj?.street || ''} </div>
          <div>{addressObj?.town || ''} </div>
          <div>{addressObj?.postcode || ''} </div>
        </div>
      ) : (
        <div>
          <div>57</div>
          <div>ASHDALE RAOD</div>
          <div>LIVERPOOL</div>
          <div>L9 2AA</div>
        </div>
      )}

      <div className='mb-4'>Moved in: 2018-01-10</div>

      <button type='button' className='btn btn-link not-my-current-address' onClick={onAddressPopup}>
        This is not my current address
      </button>

      <div>
        <AddressModal showModal={showModal} closePopupEvent={onAddressPopup.bind(this)}></AddressModal>
      </div>
    </div>
  );
};

export default YourCurrentAddress;
