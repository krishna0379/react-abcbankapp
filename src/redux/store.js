import { combineReducers } from "redux";
import { createStore } from "redux";
import { AdminReducer } from "./AdminReducer";

const rootReducer = combineReducers({
  admin: AdminReducer,
});
const store = createStore(rootReducer);
export { store };
