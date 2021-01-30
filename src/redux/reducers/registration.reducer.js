import { combineReducers } from 'redux';

const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_REGISTRATION':
      return { ...state, ...action.payload };
    case 'UNSET_USER_REGISTRATION':
      return {};
    default:
      return state;
  }
};

const petRegistrationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_PET_REGISTRATION':
      return { ...state, ...action.payload };
    case 'UNSET_PET_REGISTRATION':
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  registrationReducer,
  petRegistrationReducer,
});
