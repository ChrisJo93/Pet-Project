import { combineReducers } from 'redux';
import errors from './errors.reducer';
import food from './food.reducer';
import groomer from './groomer.reducer';
import groomerDetail from './groomerDetails.reducer';
import medication from './medication.reducer';
import medicationDetail from './medicationDetail.reducer';
import ownedPet from './ownedPet.reducer';
import petDetail from './petDetail.reducer';
import petRegistration from './petRegistration.reducer';
import registration from './registration.reducer';
import scannerReducer from './scanner.reducer';
import user from './user.reducer';
import vetReducer from './vet.reducer';
import vetDetail from './vetDetail.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  food,
  groomer,
  groomerDetail,
  medication,
  medicationDetail,
  ownedPet,
  petDetail,
  petRegistration,
  registration,
  scannerReducer,
  user, // will have an id and username if someone is logged in
  vetReducer,
  vetDetail,
});

export default rootReducer;
