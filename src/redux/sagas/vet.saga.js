import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* vetSaga() {
  yield takeLatest('GET_VET', getVet);
  yield takeLatest('GET_VET_DETAIL', getVetDetail);
}

function* getVet(action) {
  try {
    const response = yield axios.get(`/api/vet`);
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

function* getVetDetail(action) {
  try {
    const response = yield axios.get(`/api/vet/details/${action.payload}`);
    yield put({
      type: 'SET_VET_DETAIL',
      payload: response.data[0],
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
