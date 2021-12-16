import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { allReducer } from "./allReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  reducer: allReducer,
});

export default persistReducer(persistConfig, rootReducer);
