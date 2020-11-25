const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REGISTRATION':
      return { ...state, ...action.payload };
    case 'UNSET_REGISTRATION':
      return {};
    default:
      return state;
  }
};

export default registrationReducer;
