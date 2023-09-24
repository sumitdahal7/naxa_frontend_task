import { all, fork } from "redux-saga/effects";
import { getServiceSaga } from "./services/saga";

const rootSaga = function* () {
  yield all([
    fork(getServiceSaga),
    // Other forks
  ]);
};

export default rootSaga;
