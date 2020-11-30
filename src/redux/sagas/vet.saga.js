import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* vetSaga() {
  yield takeLatest('GET_VET', getVet);
}

function* getVet(action) {
  try {
    const response = yield axios.get(`/api/vet/${action.payload}`);
    yield put({
      type: 'SET_VET',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem with VET GET',
    });
  }
}

export default vetSaga;
