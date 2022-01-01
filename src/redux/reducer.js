import { combineReducers, createStore } from "redux";

import { birdsReducer } from "./birds/reducer";
import { progressReducer } from "./progress/reducer";

const rootReducer = combineReducers({
  birds: birdsReducer,
  progress: progressReducer,
});

export const store = createStore(rootReducer);
