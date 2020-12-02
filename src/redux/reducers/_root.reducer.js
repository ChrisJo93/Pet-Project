import { combineReducers } from 'redux';
import errors from './errors.reducer';
import foodReducer from './food.reducer';
import groomerReducer from './groomer.reducer';
import groomerDetailReducer from './groomerDetails.reducer';
import medication from './medication.reducer';
import medicationDetail from './medicationDetail.reducer';
import ownedPetReducer from './ownedPet.reducer';
import petDetailReducer from './petDetail.reducer';
import petRegistration from './petRegistration.reducer';
import registrationReducer from './registration.reducer';
import scannerReducer from './scanner.reducer';
import user from './user.reducer';
import vetReducer from './vet.reducer';
import vetDetailReducer from './vetDetail.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  foodReducer,
  groomerReducer,
  groomerDetailReducer,
  medication,
  medicationDetail,
  ownedPetReducer,
  petDetailReducer,
  petRegistration,
  registrationReducer,
  scannerReducer,
  user, // will have an id and username if someone is logged in
  vetReducer,
  vetDetailReducer,
});

export default rootReducer;
