const groomerDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_GROOMER_DETAIL':
      return action.payload;
    case 'UNSET_GROOMER_DETAIL':
      return [];
    default:
      return state;
  }
};

export default groomerDetailReducer;
