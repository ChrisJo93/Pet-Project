const groomerReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GROOMER':
      return action.payload;
    case 'UNSET_GROOMER':
      return [];
    default:
      return state;
  }
};

export default groomerReducer;
