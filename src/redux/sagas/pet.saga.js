import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* petSaga() {
  yield takeLatest('GET_PET', getPet);
  yield takeLatest('POST_PET', postPet);
}

function* getPet(action) {
  try {
    const response = yield axios.get('/api/pet');
    yield put({
      type: 'SET_PET',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem with PET GET',
    });
  }
}

function* postPet(action) {
  try {
    yield axios.post('/api/pet', action.payload);
    yield put({ type: 'GET_PET' });
  } catch (err) {
    console.log('ERROR POSTING PET:', action.payload);
  }
}

export default petSaga;
