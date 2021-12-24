import React from 'react';
import Modal from 'react-bootstrap/Modal';

import CurrentAddressEntry from '../current-address-entry/current-address-entry-container';
import './address-modal.scss';

const AddressModal = (props) => {
  const submitAddress = (value) => {
    props.closePopupEvent(value);
  };
  return (
    <div>
      <Modal show={props.showModal} onHide={props.closePopupEvent} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add a new address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CurrentAddressEntry submitAddress={submitAddress}></CurrentAddressEntry>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddressModal;
