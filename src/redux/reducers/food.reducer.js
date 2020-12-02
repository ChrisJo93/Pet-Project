const foodReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FOOD':
      return action.payload;
    case 'UNSET_FOOD':
      return {};
    default:
      return state;
  }
};

export default foodReducer;
