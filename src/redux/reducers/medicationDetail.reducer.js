const medicationDetailReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEDICATION_DETAIL':
      return action.payload;
    case 'UNSET_MEDICATION':
      return [];
    default:
      return state;
  }
};

export default medicationDetailReducer;
