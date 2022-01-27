import { kernelSlice } from './kernel.slice';
import { takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

// eslint-disable-next-line @typescript-eslint/no-empty-function
function* initiate(): SagaIterator {}

export function* kernelSaga(): SagaIterator {
  yield takeLatest(kernelSlice.actions.initiate.type, initiate);
}
