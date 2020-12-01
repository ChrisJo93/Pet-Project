import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* medicationSaga() {
  yield takeLatest('GET_MEDICATION', getMedication);
}

function* getMedication(action) {
  try {
    const response = yield axios.get(`/api/medication/${action.payload}`);
    yield put({
      type: 'SET_MEDICATION',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem with MEDICATION GET',
    });
  }
}

export default medicationSaga;
