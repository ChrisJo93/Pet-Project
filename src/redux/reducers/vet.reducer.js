import { combineReducers } from 'redux';

const vet = (state = [], action) => {
  switch (action.type) {
    case 'SET_VET':
      return action.payload;
    case 'UNSET_VET':
      return [];
    default:
      return state;
  }
};

const vetDetail = (state = [], action) => {
  switch (action.type) {
    case 'SET_VET_DETAIL':
      return action.payload;
    case 'UNSET_MEDICATION':
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  vet,
  vetDetail,
});
