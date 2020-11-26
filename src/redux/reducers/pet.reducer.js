const petReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PET_REGISTRATION':
      console.log('wtf is happening', state, action.payload);
      return { ...state, ...action.payload };
    case 'UNSET_PET_REGISTRATION':
      return {};
    default:
      return state;
  }
};

export default petReducer;
