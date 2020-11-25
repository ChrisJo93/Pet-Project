const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REGISTRATION':
      return { ...action.payload };
    case 'UNSET_REGISTRATION':
      return {};
    default:
      return state;
  }
};

export default registrationReducer;
