import AddressService from './address.service';

test('should load the address', async () => {
  const fakeUserResponse = {
    address: {
      address1: 'Alencon Link',
      address2: '',
      town: 'Basingstoke',
      county: 'Hampshire',
      postcode: 'RG21 7TY',
      premiseData:
        '|10 Crown Heights|;|12 Crown Heights|;|14 Crown Heights|;|16 Crown Heights|;|18 Crown Heights|;|2 Crown Heights|;|20 Crown Heights|;|22 Crown Heights|;|24 Crown Heights|;|26 Crown Heights|;|28 Crown Heights|;|30 Crown Heights|;|32 Crown Heights|;|34 Crown Heights|;|36 Crown Heights|;|38 Crown Heights|;|4 Crown Heights|;|40 Crown Heights|;|42 Crown Heights|;|44 Crown Heights|;|46 Crown Heights|;|48 Crown Heights|;|50 Crown Heights|;|52 Crown Heights|;|54 Crown Heights|;|56 Crown Heights|;|58 Crown Heights|;|6 Crown Heights|;|60 Crown Heights|;|62 Crown Heights|;|64 Crown Heights|;|66 Crown Heights|;|68 Crown Heights|;|70 Crown Heights|;|72 Crown Heights|;|74 Crown Heights|;|76 Crown Heights|;|78 Crown Heights|;|8 Crown Heights|;|80 Crown Heights|;|82 Crown Heights|;|84 Crown Heights|;|86 Crown Heights|;|88 Crown Heights|;|90 Crown Heights|;|92 Crown Heights|;|94 Crown Heights|;|96 Crown Heights|;',
      errorNumber: 0,
      errorMessage: '',
    },
    possibleMatches: [
      { organisation: '', buildingName: '10 Crown Heights', flatNumber: '', buildingNumber: '' },
      { organisation: '', buildingName: '12 Crown Heights', flatNumber: '', buildingNumber: '' },
      { organisation: '', buildingName: '14 Crown Heights', flatNumber: '', buildingNumber: '' },
      { organisation: '', buildingName: '16 Crown Heights', flatNumber: '', buildingNumber: '' },
      { organisation: '', buildingName: '18 Crown Heights', flatNumber: '', buildingNumber: '' },
    ],
  };

  var apiFunc = jest.spyOn(AddressService, 'getAllAddress').mockImplementationOnce(() => {
    return Promise.resolve(Promise.resolve(fakeUserResponse));
  });

  const addressRes = await apiFunc();

  expect(addressRes.address.postcode).toEqual(fakeUserResponse.address.postcode);
});
