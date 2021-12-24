import React, { useState } from 'react';

import './current-address-entry-container.scss';
import FindAddress from './find-address/find-address';
import ManualAddress from './manual-address/manual-address';
import MultipleAddress from './multiple-address/multiple-address';
import AddressService from '../../../services/address.service';

// const initialValue = {
//   toggleFindMultipleAddress: true,
//   toggleManualAddress: false,
//   submitting: false,
//   data: {},
// };

const CurrentAddressEntry = (props) => {
  let lastOpenAddressComp = '';

  const [toggleFindMultipleAddress, setToggleFindMultipleAddress] = useState(true);
  const [toggleManualAddress, setToggleManualAddress] = useState(false);
  const [postcodeValue, setPostcodeValue] = useState('');
  const [addressList, setAddressList] = useState(null);

  const toggleAddressComp = (value) => {
    lastOpenAddressComp = 'multipleAddress';

    if (toggleFindMultipleAddress) {
      setPostcodeValue(value.postcode);

      AddressService.getAllAddress(value.postcode).then((addressRes) => {
        console.log(addressRes);

        setAddressList(addressRes);

        setToggleFindMultipleAddress(!toggleFindMultipleAddress);
      });

      lastOpenAddressComp = 'findAddress';
    } else {
      setToggleFindMultipleAddress(!toggleFindMultipleAddress);
    }
  };

  const toggleManualAddressComp = (value) => {
    setToggleManualAddress(!toggleManualAddress);
  };

  const submitAddress = (value) => {
    console.log('CurrentAddressEntry - toggleAddressComp', value);

    const addressOb = {
      flatNumber: '',
      buildingNumber: '',
      buildingName: value,
      street: addressList?.address?.address1,
      town: addressList?.address?.town,
      postcode: addressList?.address?.postcode,
    };

    props.submitAddress(addressOb);
  };

  return <div>{!toggleManualAddress ? toggleFindMultipleAddress && lastOpenAddressComp !== 'findAddress' ? <FindAddress toggleAddressComp={toggleAddressComp} toggleManualAddressComp={toggleManualAddressComp} /> : <MultipleAddress addressList={addressList} postcodeValue={postcodeValue} toggleAddressComp={toggleAddressComp} toggleManualAddressComp={toggleManualAddressComp} submitAddress={submitAddress} /> : <ManualAddress toggleManualAddressComp={toggleManualAddressComp} submitAddress={submitAddress} />}</div>;
};

export default CurrentAddressEntry;
