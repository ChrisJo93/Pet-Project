import { all } from 'redux-saga/effects';
import barcodeSaga from './barcode.saga';
import foodSaga from './food.saga';
import groomerSaga from './groomer.saga';
import loginSaga from './login.saga';
import medicationSaga from './medication.saga';
import petSaga from './pet.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import vetSaga from './vet.saga';

export default function* rootSaga() {
  yield all([
    barcodeSaga(),
    foodSaga(),
    groomerSaga(),
    loginSaga(),
    medicationSaga(),
    petSaga(),
    registrationSaga(),
    userSaga(),
    vetSaga(),
  ]);
}
