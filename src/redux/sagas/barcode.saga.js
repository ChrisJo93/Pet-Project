// this could have very easily been in medication saga, but it seemed more fun to extract this into its own file.

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* barcodeSaga() {
  yield takeLatest('POST_MED_BARCODE', postMedBarcode);
  yield takeLatest('POST_FOOD_BARCODE', postFoodBarcode);
}

function* postMedBarcode(action) {
  try {
    yield axios.post(
      `/api/barcode/med/${action.payload.id}`,
      action.payload.data
    );
    yield put({ type: 'GET_MEDICATION_DETAIL', payload: action.payload.id });
  } catch (error) {
    console.log(error);
  }
}

function* postFoodBarcode(action) {
  try {
    yield axios.post(
      `/api/barcode/food/${action.payload.id}`,
      action.payload.data
    );
    yield put({ type: 'GET_FOOD', payload: action.payload.id });
  } catch (error) {
    console.log(error);
  }
}

export default barcodeSaga;
