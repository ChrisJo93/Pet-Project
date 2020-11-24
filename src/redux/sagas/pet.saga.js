import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* petSaga() {
  yield takeLatest('GET_PET', getPet);
}

function* getPet(action) {
  try {
    const response = yield axios.get('/api/pet');
    yield put({
      type: 'SET_PET',
      payload: response.data,
    });
    console.log('IM IMPORTTANTNTNT', response.data);
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem with PET GET',
    });
  }
}

export default petSaga;
