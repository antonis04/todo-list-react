import { debounce, call, put, delay, select } from "redux-saga/effects";
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  selectTasks,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    console.log("starting work")
  try {
    const tasks = yield select(selectTasks);
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

export function* watchFetchExampleTasks() {
  yield debounce(2000, fetchExampleTasks.type, fetchExampleTasksHandler);
}
