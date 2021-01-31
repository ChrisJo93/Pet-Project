import { combineReducers } from 'redux';
import errors from './errors.reducer';
import food from './food.reducer';
import groomer from './groomer.reducer';
import medication from './medication.reducer';
import pet from './ownedPet.reducer';
import registration from './registration.reducer';
import scannerReducer from './scanner.reducer';
import showForm from './showForm.reducer';
import user from './user.reducer';
import vet from './vet.reducer';

const rootReducer = combineReducers({
  errors,
  food,
  groomer,
  medication,
  pet,
  registration,
  scannerReducer,
  showForm,
  user,
  vet,
});

export default rootReducer;
