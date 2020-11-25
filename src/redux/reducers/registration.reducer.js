import { combineReducers } from 'redux';

const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REGISTRATION':
      return { ...action.payload };
    case 'UNSET_REGISTRATION':
      return {};
    default:
      return state;
  }
};

const registrationStepReducer = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return state + 1;
    case 'BACK_STEP':
      return state - 1;
  }
};

export default combineReducers({
  registrationReducer,
  registrationStepReducer,
});
