import { put } from "redux-saga/effects";
import { getServicesErrorAction, getServicesSuccessAction } from "./slice";

// Generator function
function* getServiceSaga() {
  const url = "https://admin.naxa.com.np/api/services";
  try {
    // You can also export the axios call as a function.
    const response = yield fetch(url).then((res) => res.json());
    console.log("the response is>>", response);
    yield put(getServicesSuccessAction(response));
  } catch (error) {
    yield put(getServicesErrorAction(error));
  }
}

// Generator function
// export function* watchGetService() {
//   yield takeLatest(getServiceSaga);
// }

export { getServiceSaga };
