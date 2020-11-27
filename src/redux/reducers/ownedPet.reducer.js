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

//may need to delete this. Not certain how it's used in conjunction with pet details
