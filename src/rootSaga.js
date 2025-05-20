import {all} from 'redux-saga/effects';
import { watchFetchExampleTasks } from './Features/tasks/tasksSaga';

export default function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
    ])
}