import {
  takeLatest,
  call,
  put,
  delay,
  select,
  takeEvery,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  selectTasks
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  console.log("starting work");
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    console.log("Pobrane zadania:", exampleTasks);
    const tasksArray = Array.isArray(exampleTasks) ? exampleTasks : [];

    yield put(fetchExampleTasksSuccess(tasksArray));
  } catch (error) {
    yield put(fetchExampleTasksError());
    console.error("Błąd podczas pobierania przykładowych zadań:", error);
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
