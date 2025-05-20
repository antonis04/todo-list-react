import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000); // dla lepszego UX
    const exampleTasks = yield call(getExampleTasks);

    // Sprawdzamy zawartość pobranych danych w konsoli
    console.log("Pobrane zadania:", exampleTasks);

    // Upewniamy się, że odpowiedź jest zawsze tablicą
    const tasksArray = Array.isArray(exampleTasks) ? exampleTasks : [];

    yield put(fetchExampleTasksSuccess(tasksArray));
  } catch (error) {
    yield put(fetchExampleTasksError());
    console.error("Błąd podczas pobierania przykładowych zadań:", error);
  }
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}
