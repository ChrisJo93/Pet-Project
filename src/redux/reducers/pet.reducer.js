const petReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PET':
      console.log('IM SUUUUPEER IMPORTANT', action.payload);
      return action.payload;
    case 'UNSET_PET':
      return {};
    default:
      return state;
  }
};

export default petReducer;
