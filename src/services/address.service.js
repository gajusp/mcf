import { REQUEST_HEADERS } from '../constants/request-interceptor.constants';
import { API_ENDPOINT_CONSTANTS } from '../constants/api-endpoint.constants';
import { ERROR_MESSAGE_CONSTANT } from '../constants/error-message.constant';

const createRequestOptions = (url, method, headers) => {
  let payload = [
    url,
    {
      method,
      headers: { ...REQUEST_HEADERS, ...headers },
    },
  ];
  return payload;
};

const getAllAddress = async (postcode) => {
  try {
    const getAddressRequestOptions = createRequestOptions(`${API_ENDPOINT_CONSTANTS.API_BASE_URL}${API_ENDPOINT_CONSTANTS.GET_ADDRESS_URL}?postcode=${postcode}`, 'GET', { 'content-type': 'application/json' });
    const addressResponse = await fetch(...getAddressRequestOptions);
    let addressData = await addressResponse.json();
    if (addressResponse.ok && !addressData?.address?.errorMessage) {
      return addressData;
    } else {
      addressData = { ...addressData, ...{ address: { errorMessage: ERROR_MESSAGE_CONSTANT.ADDRESS_NOT_FOUND } } };

      return addressData;
    }
  } catch (error) {
    console.error(`There is an error occurred while fetching the address. Please try again. ${error.message || ''}`);

    return { errorMessage: 'There is an error occurred while fetching the address. Please try again' };
  }
};

const AddressService = {
  getAllAddress,
};

export default AddressService;
