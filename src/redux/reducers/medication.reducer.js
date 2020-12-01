const medicationReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEDICATION':
      return action.payload;
    case 'UNSET_MEDICATION':
      return {};
    default:
      return state;
  }
};

export default medicationReducer;
