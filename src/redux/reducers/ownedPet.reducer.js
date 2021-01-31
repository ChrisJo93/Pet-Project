import { combineReducers } from 'redux';

const ownedPet = (state = [], action) => {
  switch (action.type) {
    case 'SET_PET':
      return action.payload;
    case 'UNSET_PET':
      return [];
    default:
      return state;
  }
};

const petDetail = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PET_DETAIL':
      return action.payload;
    case 'UNSET_PET_DETAIL':
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  ownedPet,
  petDetail,
});
