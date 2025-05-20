import { all } from "redux-saga/effects";
import { tasksSaga } from "./Features/tasks/tasksSaga";

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
