import React, { useState } from 'react';

import { ERROR_MESSAGE_CONSTANT } from '../../../constants/error-message.constant';
import AddressService from '../../../services/address.service';
import FindAddress from './find-address/find-address';
import ManualAddress from './manual-address/manual-address';
import MultipleAddress from './multiple-address/multiple-address';

const CurrentAddressEntry = (props) => {
  let lastOpenAddressComp = '';

  const [toggleFindMultipleAddress, setToggleFindMultipleAddress] = useState(true);
  const [toggleManualAddress, setToggleManualAddress] = useState(false);
  const [postcodeValue, setPostcodeValue] = useState('');
  const [addressList, setAddressList] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleAddressComp = (value) => {
    lastOpenAddressComp = 'multipleAddress';

    if (toggleFindMultipleAddress) {
      if (!value.postcode) {
        setErrorMessage(ERROR_MESSAGE_CONSTANT.POSTCODE_REQUIRED);

        return;
      }
      setPostcodeValue(value.postcode);

      AddressService.getAllAddress(value.postcode).then((addressRes) => {
        if (addressRes?.possibleMatches?.length > 0) {
          setAddressList(addressRes);

          setErrorMessage(null);

          setToggleFindMultipleAddress(!toggleFindMultipleAddress);
        } else {
          setErrorMessage(addressRes?.address?.errorMessage);
        }
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

    let addressOb = {
      flatNumber: '',
      buildingNumber: '',
      buildingName: '',
      street: addressList?.address?.address1,
      town: addressList?.address?.town,
      postcode: addressList?.address?.postcode,
    };

    if (typeof value === 'string') {
      addressOb = { ...addressOb, ...{ buildingName: value, street: addressList?.address?.address1, town: addressList?.address?.town, postcode: addressList?.address?.postcode } };
    } else {
      addressOb = value;
    }

    props.submitAddress(addressOb);
  };

  return <div>{!toggleManualAddress ? toggleFindMultipleAddress && lastOpenAddressComp !== 'findAddress' ? <FindAddress toggleAddressComp={toggleAddressComp} toggleManualAddressComp={toggleManualAddressComp} errorMessage={errorMessage} /> : <MultipleAddress addressList={addressList} postcodeValue={postcodeValue} toggleAddressComp={toggleAddressComp} toggleManualAddressComp={toggleManualAddressComp} submitAddress={submitAddress} /> : <ManualAddress toggleManualAddressComp={toggleManualAddressComp} submitAddress={submitAddress} />}</div>;
};

export default CurrentAddressEntry;
