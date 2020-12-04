const scannerReducer = (state = '', action) => {
  switch (action.type) {
    case 'SCANNER':
      console.log('IN SCANNER', action.payload);
      return action.payload;
    case 'STOP_SCANNER':
      return 'No data';
    default:
      return state;
  }
};

export default scannerReducer;
