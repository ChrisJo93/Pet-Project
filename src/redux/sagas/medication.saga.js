import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* medicationSaga() {
  yield takeLatest('GET_MEDICATION', getMedication);
  yield takeLatest('GET_MEDICATION_DETAIL', getMedicationDetail);
  yield takeLatest('POST_MEDICATION', postMedication);
  yield takeLatest('PUT_MEDICATION', putMedication);
  yield takeLatest('DELETE_MEDICATION', deleteMedication);
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

function* postMedication(action) {
  try {
    yield axios.post(`/api/medication/${action.payload.id}`, action.payload);
    yield put({ type: 'GET_MEDICATION', payload: action.payload.id });
  } catch (err) {
    console.log('ERROR POSTING medication:', action.payload.id);
  }
}

function* putMedication(action) {
  try {
    console.log('in put', action.payload);
    yield axios.put(
      `/api/medication/editMedication/${action.payload.id}`,
      action.payload
    );
    yield put({ type: 'GET_MEDICATION_DETAIL', payload: action.payload.petId });
  } catch (error) {
    console.log('Error in put food', error);
  }
}

function* deleteMedication(action) {
  try {
    yield axios.delete(`/api/medication/${action.payload.id}`);
    yield put({ type: 'GET_MEDICATION' });
    yield put({ type: 'GET_MEDICATION_DETAIL', payload: action.payload.petId });
  } catch (err) {
    console.log('error deleting MEDICATION:', action.payload);
  }
}

export default medicationSaga;
