// this could have very easily been in medication saga, but it seemed more fun to extract this into its own file.

import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* barcodeSaga() {
  yield takeLatest('POST_BARCODE', postBarcode);
}

function* postBarcode(action) {
  try {
    yield axios.post(`/api/barcode/${action.payload.id}`, action.payload.data);
    yield put({ type: 'GET_MEDICATION_DETAIL', payload: action.payload.id });
  } catch (error) {
    console.log(error);
  }
}

export default barcodeSaga;
