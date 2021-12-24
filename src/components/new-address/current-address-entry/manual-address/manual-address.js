import { useFormik } from 'formik';
import React from 'react';

import { ERROR_MESSAGE_CONSTANT } from '../../../../constants/error-message.constant';
import ErrorMessage from '../../../error-message/error-message';
import './manual-address.scss';

const ManualAddress = (props) => {
  const validate = (values) => {
    const errors = {};

    if (!values.flatNumber) {
      errors.flatNumber = ERROR_MESSAGE_CONSTANT.FLAT_NUM_REQUIRED;
    } else if (values.flatNumber.length < 2) {
      errors.flatNumber = ERROR_MESSAGE_CONSTANT.FLAT_NUM_INVALID;
    }

    if (!values.buildingName) {
      errors.buildingName = ERROR_MESSAGE_CONSTANT.BUILDING_NAME_REQUIRED;
    } else if (values.buildingName.length < 2) {
      errors.buildingName = ERROR_MESSAGE_CONSTANT.BUILDING_NAME_INVALID;
    }

    if (!values.town) {
      errors.town = ERROR_MESSAGE_CONSTANT.TOWN_REQUIRED;
    } else if (values.town.length < 2) {
      errors.town = ERROR_MESSAGE_CONSTANT.TOWN_INVALID;
    }

    if (!values.postcode) {
      errors.postcode = ERROR_MESSAGE_CONSTANT.POSTCODE_REQUIRED;
    } else if (values.postcode.length < 3) {
      errors.postcode = ERROR_MESSAGE_CONSTANT.POSTCODE_INVALID;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      flatNumber: '',
      buildingNumber: '',
      buildingName: '',
      street: '',
      town: '',
      postcode: '',
    },
    validate,
    onSubmit: (value) => {
      props.submitAddress(value);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="flatNumber">Flat Number</label>
        <input
          id="flatNumber"
          name="flatNumber"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.flatNumber}
        />
        {formik.touched.flatNumber && formik.errors.flatNumber ? <ErrorMessage>{formik.errors.flatNumber}</ErrorMessage> : ''}
      </div>

      <div className="form-group">
        <label htmlFor="buildingNumber">Building Number</label>
        <input
          id="buildingNumber"
          name="buildingNumber"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.buildingNumber}
        />
      </div>

      <div className="form-group">
        <label htmlFor="buildingName">Building Name</label>
        <input
          id="buildingName"
          name="buildingName"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.buildingName}
        />
        {formik.touched.buildingName && formik.errors.buildingName ? <ErrorMessage>{formik.errors.buildingName}</ErrorMessage> : ''}
      </div>

      <div className="form-group">
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.street}
        />
      </div>

      <div className="form-group">
        <label htmlFor="town">Town</label>
        <input
          id="town"
          name="town"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.town}
        />
        {formik.touched.town && formik.errors.town ? <ErrorMessage>{formik.errors.town}</ErrorMessage> : ''}
      </div>

      <div className="form-group">
        <label htmlFor="postcode">Postcode</label>
        <input
          id="postcode"
          name="postcode"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postcode}
        />
        {formik.touched.postcode && formik.errors.postcode ? <ErrorMessage>{formik.errors.postcode}</ErrorMessage> : ''}
      </div>

      <div className="action-btn">
        <button type="submit" className="btn primary submit-address-btn">
          Submit
        </button>
        <button type="submit" className="btn secondary cancel-address-btn" onClick={props.toggleManualAddressComp}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ManualAddress;
