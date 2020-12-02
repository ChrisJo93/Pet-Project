const vetDetailReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_VET_DETAIL':
      return action.payload;
    case 'UNSET_MEDICATION':
      return {};
    default:
      return state;
  }
};

export default vetDetailReducer;
