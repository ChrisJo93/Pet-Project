import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* foodSaga() {
  yield takeLatest('GET_FOOD', getFood);
}

function* getFood(action) {
  try {
    const response = yield axios.get(`/api/food/${action.payload.id}`);
    yield put({
      type: 'SET_PET',
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'ERROR_MSG',
      payload: 'There was a problem with FOOD GET',
    });
  }
}
