const petDetailReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PET_DETAIL':
      return action.payload;
    case 'UNSET_PET_DETAIL':
      return [];
    default:
      return state;
  }
};

export default petDetailReducer;
