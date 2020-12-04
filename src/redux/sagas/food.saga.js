import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* foodSaga() {
  yield takeLatest('GET_FOOD', getFood);
  yield takeLatest('POST_FOOD', postFood);
  yield takeLatest('PUT_FOOD', putFood);
  yield takeLatest('DELETE_FOOD', deleteFood);

  function* getFood(action) {
    try {
      const response = yield axios.get(`/api/food/${action.payload}`);
      yield put({
        type: 'SET_FOOD',
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

  function* postFood(action) {
    try {
      yield axios.post(`/api/food/${action.payload.id}`, action.payload);
      yield put({ type: 'GET_FOOD', payload: action.payload.id });
    } catch (err) {
      console.log('ERROR POSTING food:', action.payload.id);
    }
  }

  function* putFood(action) {
    try {
      yield axios.put(
        `/api/food/editFood/${action.payload.id}`,
        action.payload
      );
    } catch (error) {
      console.log('Error in put food', error);
    }
  }

  function* deleteFood(action) {
    try {
      yield axios.delete(`/api/food/${action.payload.id}`);
      yield put({ type: 'GET_FOOD', payload: action.payload.petId });
    } catch (err) {
      console.log('error deleting food:', action.payload);
    }
  }
}

export default foodSaga;
