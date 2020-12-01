import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* groomerSaga() {
  yield takeLatest('GET_GROOMER', getGroomer);
}

function* getGroomer(action) {
  try {
    const response = yield axios.get(`/api/groomer`);
    yield put({
      type: 'SET_GROOMER',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem with GROOMER GET',
    });
  }
}

export default groomerSaga;
