const scannerReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SCANNER':
      return action.payload;
    case 'STOP_SCANNER':
      return 'No data';
    default:
      return state;
  }
};

export default scannerReducer;
