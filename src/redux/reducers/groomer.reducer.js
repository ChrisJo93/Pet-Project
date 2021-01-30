import { combineReducers } from 'redux';

const groomer = (state = [], action) => {
  switch (action.type) {
    case 'SET_GROOMER':
      return action.payload;
    case 'UNSET_GROOMER':
      return [];
    default:
      return state;
  }
};

const groomerDetail = (state = [], action) => {
  switch (action.type) {
    case 'SET_GROOMER_DETAIL':
      return action.payload;
    case 'UNSET_GROOMER_DETAIL':
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  groomer,
  groomerDetail,
});
