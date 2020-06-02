import { all, call, fork, put, takeLatest } from "redux-saga/effects";

import * as Action from "../actions/dogCeoConstants";
import { fetchDogs } from "../actions/dogCeo";
import { fetchDogsFactory } from "../services/dogApi";

function* runFetchDogs(action: ReturnType<typeof fetchDogs.start>) {
  const dogType = action.payload;

  try {
    const api = fetchDogsFactory();
    const dogs = yield call(api, dogType);

    yield put(fetchDogs.succeed(dogType, dogs));
  } catch (error) {
    yield put(fetchDogs.fail(dogType, error));
  }
}

export function* watchFetchDogs() {
  yield takeLatest(Action.GET_DOGS_START, runFetchDogs);
}

export default function* rootSaga() {
  yield all([fork(watchFetchDogs)]);
}
