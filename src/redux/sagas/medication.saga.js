import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* medicationSaga() {
  yield takeLatest('GET_MEDICATION', getMedication);
  yield takeLatest('GET_MEDICATION_DETAIL', getMedicationDetail);
  yield takeLatest('PUT_MEDICATION', putMedication);
}

function* getMedication(action) {
  try {
    const response = yield axios.get(`/api/medication`);
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

function* getMedicationDetail(action) {
  try {
    const response = yield axios.get(
      `/api/medication/details/${action.payload}`
    );
    yield put({
      type: 'SET_MEDICATION_DETAIL',
      payload: response.data[0],
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem with MEDICATION GET',
    });
  }
}

function* putMedication(action) {
  try {
    console.log('in put', action.payload);
    yield axios.put(
      `/api/medication/editMedication/${action.payload.id}`,
      action.payload
    );
  } catch (error) {
    console.log('Error in put food', error);
  }
}

export default medicationSaga;
