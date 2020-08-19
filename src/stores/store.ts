import { createStore } from "redux";
import { tasksReducer } from '../reducers/tasksReducer';

export const store = createStore(tasksReducer);
