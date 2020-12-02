import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* groomerSaga() {
  yield takeLatest('GET_GROOMER', getGroomer);
  yield takeLatest('GET_GROOMER_DETAIL', getGroomerDetail);
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

function* getGroomerDetail(action) {
  try {
    const response = yield axios.get(`/api/groomer/details/${action.payload}`);
    yield put({
      type: 'SET_GROOMER_DETAIL',
      payload: response.data[0],
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'SET_ERROR',
      payload: 'Could not get groomer details',
    });
  }
}

export default groomerSaga;
