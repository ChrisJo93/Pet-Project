import { combineReducers } from 'redux';
import errors from './errors.reducer';
import food from './food.reducer';
import groomer from './groomer.reducer';
import medication from './medication.reducer';
import ownedPet from './ownedPet.reducer';
import petDetail from './petDetail.reducer';
import registration from './registration.reducer';
import scannerReducer from './scanner.reducer';
import showForm from './showForm.reducer';
import user from './user.reducer';
import vet from './vet.reducer';
import vetDetail from './vetDetail.reducer';

const rootReducer = combineReducers({
  errors,
  food,
  groomer,
  medication,
  ownedPet,
  petDetail,
  registration,
  scannerReducer,
  showForm,
  user,
  vet,
  vetDetail,
});

export default rootReducer;
