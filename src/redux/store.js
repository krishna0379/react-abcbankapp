import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { AdminReducer } from "./AdminReducer";
import { EmployeeReducer } from "./EmployeeReducer";
import { LadReducer } from "./LadReducer";

const rootReducer = combineReducers({
  admin: AdminReducer,
  employee: EmployeeReducer,
  lad: LadReducer,
});
//const store = createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
