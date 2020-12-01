const ownedPetReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PET':
      return action.payload;
    case 'UNSET_PET':
      return [];
    default:
      return state;
  }
};

export default ownedPetReducer;
