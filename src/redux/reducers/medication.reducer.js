import { combineReducers } from 'redux';

const medication = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEDICATION':
      return action.payload;
    case 'UNSET_MEDICATION':
      return {};
    default:
      return state;
  }
};

const medicationDetail = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEDICATION_DETAIL':
      return action.payload;
    case 'UNSET_MEDICATION':
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  medication,
  medicationDetail,
});
