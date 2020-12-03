import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* groomerSaga() {
  yield takeLatest('GET_GROOMER', getGroomer);
  yield takeLatest('GET_GROOMER_DETAIL', getGroomerDetail);
  yield takeLatest('POST_GROOMER', postGroomer);
  yield takeLatest('DELETE_GROOMER', deleteGroomer);
  yield takeLatest('PUT_GROOMER', putGroomer);
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

function* postGroomer(action) {
  try {
    yield axios.post(`/api/groomer/${action.payload.id}`, action.payload);
    yield put({ type: 'GET_GROOMER', payload: action.payload.id });
  } catch (err) {
    console.log('ERROR POSTING groomer:', err, action.payload.id);
  }
}

function* deleteGroomer(action) {
  try {
    yield axios.delete(`/api/groomer/${action.payload}`);
    yield put({ type: 'GET_GROOMER' });
  } catch (err) {
    console.log('error deleting groomer:', action.payload);
  }
}

function* putGroomer(action) {
  try {
    console.log('in put', action.payload);
    yield axios.put(
      `/api/groomer/editGroomer/${action.payload.id}`,
      action.payload
    );
  } catch (error) {
    console.log('Error in put groomer', error);
  }
}

export default groomerSaga;
