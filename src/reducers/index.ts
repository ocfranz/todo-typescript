import { combineReducers } from "redux";

import { tasksReducer } from "./tasksReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({ uiReducer, tasksReducer });
export type RootState = ReturnType<typeof rootReducer>;
